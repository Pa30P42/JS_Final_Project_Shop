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

    if (
      (e.target.nodeName === 'LI' || e.target.nodeName === 'P') &&
      e.target.closest('[data-subLink]')
    ) {
      const subLink = e.target.closest('[data-subLink]').dataset.subLink;
      console.log('subLink', subLink);

      return subLink;
    }

    if (e.target.nodeName === 'BUTTON' && e.target.dataset.button) {
      const link = e.target.closest('[data-button]').dataset.button;
      // console.log(link);
      // this.refs.modalCategory.innerHTML = this.getSubCategoryListMarkup(link);
      // console.log('markup', this.refs.modalCategory);

      return link;
    }

    // console.log('E.TARGET', e.target);

    // const category = e.target.closest('[data-sublink]');
    // // const subCategory = category.querySelector('.subcategories__list');
    // console.log(category);
  },

  getSubCategoryItemName() {
    this.refs.subcategoriesListInsert = document.querySelector(
      '.subcategories__list',
    );
    this.refs.subcategoriesListInsert.addEventListener('click', e => {
      console.log('hi', e.target);
    });
  },

  categoriesListMarkup() {
    return `
            <ul class="categories__list">
            ${this.categoriesItemMarkup(this.globalCategoriesObjects)}
            </ul>
            `;
  },

  // getCategories(globalCategory) {
  //   console.log(globalCategory);
  //   // const subCategories = categoriesList.appliances[x].categories.map(
  //   //   item => item.name,
  //   // );
  //   const markup = globalCategory.categories.reduce((acc, subCategory) => {
  //     acc += `
  //           <li class="subcategories__item" data-link="${subCategory.value}">${subCategory.name}  </li>
  //           `;
  //     return acc;
  //   }, '');
  //   // console.log(markup);
  //   return markup;
  // },

  getSubCategoryListMarkup(subCategory) {
    // console.log(subCategory);
    const result = categoriesList.appliances[subCategory].categories.reduce(
      (acc, subCategoryItem) => {
        acc += this.getSubCategoryListItemMarkup(subCategoryItem);
        return acc;
      },
      '',
    );
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
      // console.log('Global', globalCategory);
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
    // const button = document.querySelector('.js-category-buy-btn');
    // console.log('BTN', button);

    // const subLi = document.querySelector('.subcategories__list');

    this.refs.categoriesListInsert = document.querySelector(
      '.categories__list',
    );
    // this.refs.categoriesListInsert.addEventListener(
    //   'click',
    //   this.getLink.bind(this),
    // );
    this.refs.categoriesListInsert.addEventListener(
      'click',
      this.showModal.bind(this),
    );
  },

  // categoriesListMarkupRemoveListeners() {
  //   this.refs.categoriesListInsert.removeEventListener(
  //     'click',
  //     this.getLink.bind(this),
  //   );
  // },

  // testMarkup() {
  //   // return `${this.getSubCategoryListMarkup()}`;
  //   return `
  //   <div class="modal_wrapper">
  //       <p>HELLO</p>
  //          <button
  //       type="button"
  //       class="btn__MyCloseModal"
  //       data-action="btn__MyCloseModal"
  //   >MyClose</button>
  //   </div>
  //   `;
  // },

  listeners(action) {
    const getSubCategoryLink = e => {
      // console.log(e.target);
      const link = this.getLink(e);
      console.log(link);
    };
    const subCategoryList = document.querySelector('.subcategories__list');
    // console.log('subCategoryList', subCategoryList);
    subCategoryList.addEventListener('click', getSubCategoryLink);
  },

  showModal(e) {
    const newLink = this.getLink(e);
    const markup = this.getSubCategoryListMarkup(newLink);
    // console.log(markup);

    // console.log(this.getSubCategoryListMarkup(newLink));
    modalModule(
      () => this.getSubCategoryListMarkup(newLink),
      this.listeners.bind(this),
    );
    // console.log(this);
  },

  // const component = () => {
  //   return `<div class="component">
  //   <button class="btn__component"> action</button>
  //   </div>`;
  // };

  // ===  через listeners должны заходить Ваши слушатели ===

  // const listeners = action => {
  //   const btnComponent = document.querySelector('.btn__component');
  //   btnComponent.addEventListener('click', action);
  // };
};

// console.log(categories);
