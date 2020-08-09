import './category.scss';
import categoriesList from '../userData';
import { modalModule } from '../components/modalModule/modalModule';

export default {
  refs: {
    // modalCategory: document.querySelector('.modal-category'), // УДАЛИТЬ
    modalCategory: document.querySelector('.modalModule'),
    categoriesListInsert: '',
    subcategoriesListInsert: '',
  },

  globalCategoriesObjects: Object.values(categoriesList.appliances),

  getLink(e) {
    //link можно добавить в хлебные крошки//

    if ((e.target.nodeName === 'LI' || e.target.nodeName === 'P') && e.target.closest('[data-subLink]')) {
      const subLink = e.target.closest('[data-subLink]').dataset.subLink;

      return subLink;
    }

    if (e.target.nodeName === 'BUTTON' && e.target.dataset.button) {
      const link = e.target.closest('[data-button]').dataset.button;

      return link;
    }
  },

  getSubCategoryItemName() {
    this.refs.subcategoriesListInsert = document.querySelector('.subcategories__list');
    this.refs.subcategoriesListInsert.addEventListener('click', e => {});
  },

  categoriesListMarkup() {
    return `
            <ul class="categories__list">
            ${this.categoriesItemMarkup(this.globalCategoriesObjects)}
            </ul>
            `;
  },

  getSubCategoryListMarkup(subCategory) {
    const result = categoriesList.appliances[subCategory].categories.reduce((acc, subCategoryItem) => {
      acc += this.getSubCategoryListItemMarkup(subCategoryItem);
      return acc;
    }, '');
    return `
        <div class="modal_wrapper">
          <ul class="subcategories__list">${result}</ul>
        </div>`;
  },

  getSubCategoryListItemMarkup(subCategoryItem) {
    return `
          <li class="subcategories__item" data-sublink="${subCategoryItem.value}"> 
          <img src="#" alt="#"/>
          <p>${subCategoryItem.name}</p>
          </li>
    `;
  },

  categoriesItemMarkup(globalCategoriesObjects) {
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
  },

  categoriesListMarkupAddListeners() {
    this.refs.categoriesListInsert = document.querySelector('.categories__list');

    this.refs.categoriesListInsert.addEventListener('click', this.showModal.bind(this));
  },

  listeners(action) {
    const getSubCategoryLink = e => {
      const link = this.getLink(e);
    };
    const subCategoryList = document.querySelector('.subcategories__list');

    subCategoryList.addEventListener('click', getSubCategoryLink);
  },

  showModal(e) {
    const newLink = this.getLink(e);
    const markup = this.getSubCategoryListMarkup(newLink);

    modalModule(() => this.getSubCategoryListMarkup(newLink), this.listeners.bind(this));
  },
};
