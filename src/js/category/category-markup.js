import './category.scss';
import categoriesList from '../userData';
import { modalModule } from '../components/modalModule/modalModule';
import apiProducts from '../api/products/apiProducts';
import { createList } from '../sale/saleSection';
import { createNewPagination } from '../pagination/pagination';
import userData from '../userData';

const refs = {
  modalCategory: document.querySelector('.modalModule'),
  categoriesListInsert: '',
  subcategoriesListInsert: '',
};

const globalCategoriesObjects = Object.values(categoriesList.appliances);

export function getLink(e) {
  //link можно добавить в хлебные крошки//
  if (e.target.nodeName === 'LI' || e.target.nodeName === 'P' || e.target.nodeName === 'IMG') {
    if (e.target.closest('[data-sublink]')) {
      const subLink = e.target.closest('[data-sublink]').dataset.sublink;
      const subLinkName = e.target.closest('[data-sublink]').dataset.categoryname;

      return subLink;
    } else return;
  }

  if (e.target.nodeName === 'BUTTON' && e.target.dataset.button) {
    const link = e.target.closest('[data-button]').dataset.button;

    return link;
  }
}

export function categoriesListMarkup() {
  return `
            <ul class="categories__list">
            ${categoriesItemMarkup(globalCategoriesObjects)}
            </ul>
            `;
}

function getSubCategoryListMarkup(subCategory) {
  const result = categoriesList.appliances[subCategory].categories.reduce((acc, subCategoryItem) => {
    acc += getSubCategoryListItemMarkup(subCategoryItem);
    return acc;
  }, '');
  return `
        <div class="modal_wrapper">
          <ul class="subcategories__list">${result}</ul>
        </div>`;
}

function getSubCategoryListItemMarkup(subCategoryItem) {
  return `
          <li class="subcategories__item" data-categoryName="${subCategoryItem.name}" data-sublink="${subCategoryItem.value}"> 
<img class="subcategories__image" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCIgeDI9IjUxMiIgeTE9IjI1NiIgeTI9IjI1NiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjODBkOGZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWE4MGZjIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtMzY5LjE2NDA2MiAxNzQuNzY5NTMxYzcuODEyNSA3LjgxMjUgNy44MTI1IDIwLjQ3NjU2MyAwIDI4LjI4NTE1N2wtMTM0LjE3MTg3NCAxMzQuMTc1NzgxYy03LjgxMjUgNy44MDg1OTMtMjAuNDcyNjU3IDcuODA4NTkzLTI4LjI4NTE1NyAwbC02My44NzEwOTMtNjMuODc1Yy03LjgxMjUtNy44MDg1OTQtNy44MTI1LTIwLjQ3MjY1NyAwLTI4LjI4MTI1IDcuODA4NTkzLTcuODEyNSAyMC40NzI2NTYtNy44MTI1IDI4LjI4MTI1IDBsNDkuNzMwNDY4IDQ5LjczMDQ2OSAxMjAuMDMxMjUtMTIwLjAzNTE1N2M3LjgxMjUtNy44MDg1OTMgMjAuNDc2NTYzLTcuODA4NTkzIDI4LjI4NTE1NiAwem0xNDIuODM1OTM4IDgxLjIzMDQ2OWMwIDE0MS41MDM5MDYtMTE0LjUxNTYyNSAyNTYtMjU2IDI1Ni0xNDEuNTAzOTA2IDAtMjU2LTExNC41MTU2MjUtMjU2LTI1NiAwLTE0MS41MDM5MDYgMTE0LjUxNTYyNS0yNTYgMjU2LTI1NiAxNDEuNTAzOTA2IDAgMjU2IDExNC41MTU2MjUgMjU2IDI1NnptLTQwIDBjMC0xMTkuMzk0NTMxLTk2LjYyMTA5NC0yMTYtMjE2LTIxNi0xMTkuMzk0NTMxIDAtMjE2IDk2LjYyMTA5NC0yMTYgMjE2IDAgMTE5LjM5NDUzMSA5Ni42MjEwOTQgMjE2IDIxNiAyMTYgMTE5LjM5NDUzMSAwIDIxNi05Ni42MjEwOTQgMjE2LTIxNnptMCAwIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+" width="50" height="50" />
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

  if (refs.categoriesListInsert) {
    refs.categoriesListInsert.addEventListener('click', showModal);
  }
}

async function listeners(action) {
  const getSubCategoryLink = async e => {
    const link = getLink(e);

    if (link) {
      action();

      await createNewPagination(link, createList);
    }
  };
  const subCategoryList = document.querySelector('.subcategories__list');
  subCategoryList.addEventListener('click', getSubCategoryLink);
}

function showModal(e) {
  const newLink = getLink(e);
  if (newLink) {
    modalModule(() => getSubCategoryListMarkup(newLink), listeners);
  }
}
