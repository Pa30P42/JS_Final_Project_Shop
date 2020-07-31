import './category.scss';
import categoriesList from '../userData';
import { modalModule } from '../components/modalModule/modalModule';

const refs = {
  modalCategory: document.querySelector('.modalModule'),
  categoriesListInsert: '',
  subcategoriesListInsert: '',
};

const globalCategoriesObjects = Object.values(categoriesList.appliances);

function getLink(e) {
  //link можно добавить в хлебные крошки//

  if (
    e.target.nodeName === 'LI' ||
    e.target.nodeName === 'P' ||
    e.target.nodeName === 'IMG'
  ) {
    const subLink = e.target.closest('[data-sublink]').dataset.sublink;

    return subLink;
  }

  if (e.target.nodeName === 'BUTTON' && e.target.dataset.button) {
    const link = e.target.closest('[data-button]').dataset.button;

    return link;
  }
}

function getSubCategoryItemName() {
  refs.subcategoriesListInsert = document.querySelector('.subcategories__list');
  refs.subcategoriesListInsert.addEventListener('click', e => {
    console.log('hi', e.target);
  });
}

export function categoriesListMarkup() {
  return `
            <ul class="categories__list">
            ${categoriesItemMarkup(globalCategoriesObjects)}
            </ul>
            `;
}

function getSubCategoryListMarkup(subCategory) {
  const result = categoriesList.appliances[subCategory].categories.reduce(
    (acc, subCategoryItem) => {
      acc += getSubCategoryListItemMarkup(subCategoryItem);
      return acc;
    },
    '',
  );
  return `
        <div class="modal_wrapper">
          <ul class="subcategories__list">${result}</ul>
        </div>`;
}

function getSubCategoryListItemMarkup(subCategoryItem) {
  return `
          <li class="subcategories__item" data-sublink="${subCategoryItem.value}"> 
          <img src="#" alt="#"/>
          <p>${subCategoryItem.name}</p>
          </li>
    `;
}

function categoriesItemMarkup(globalCategoriesObjects) {
  return globalCategoriesObjects.reduce((acc, globalCategory) => {
    acc += `
                <li class="categories__item" data-link="global_category_item">
                    <div class="category__img_wrapper">
                        <img src=${globalCategory.image} alt="${globalCategory.value}" class="category__img" width="280" height="144">
                    </div>
                    <p class="category__title">${globalCategory.name}</p>
                    <button type="button" class="btn btn_gradient js-category-buy-btn" data-button="${globalCategory.value}">Купить</button>
                </li>`;
    return acc;
  }, '');
}

export function categoriesListMarkupAddListeners() {
  refs.categoriesListInsert = document.querySelector('.categories__list');
  refs.categoriesListInsert.addEventListener('click', showModal);
}

function listeners(action) {
  const getSubCategoryLink = e => {
    const link = getLink(e);

    action();
    // Чужая функция,в которую передать полученную категорию в виде массива
  };
  const subCategoryList = document.querySelector('.subcategories__list');
  subCategoryList.addEventListener('click', getSubCategoryLink);
}

function showModal(e) {
  const newLink = getLink(e);
  const markup = getSubCategoryListMarkup(newLink);

  modalModule(() => getSubCategoryListMarkup(newLink), listeners);
}
