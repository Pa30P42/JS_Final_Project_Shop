import './category.scss';
import categoriesList from '../userData';

export default {
  refs: {
    modalCategory: document.querySelector('.modal-category'), // УДАЛИТЬ
    categoriesListInsert: '',
    subcategoriesListInsert: '',
  },

  globalCategoriesObjects: Object.values(categoriesList.appliances),

  getLink(e) {
    //link можно добавить в хлебные крошки//

    if (
      (e.target.nodeName === 'LI' || e.target.nodeName === 'P') &&
      e.target.closest('[data-sublink]')
    ) {
      const subLink = e.target.closest('[data-sublink]').dataset.sublink;
      console.log(sunLink);
    }

    if (e.target.nodeName === 'BUTTON' && e.target.dataset.link) {
      const link = e.target.closest('[data-link]').dataset.link;
      // console.log(link);
      this.refs.modalCategory.innerHTML = this.getSubCategoryListMarkup(link);
      console.log('markup', this.refs.modalCategory);
    }

    const category = e.target.closest('[data-link]');
    const subCategory = category.querySelector('.subcategories__list');
    console.log(category);
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
    const result = categoriesList.appliances[subCategory].categories.reduce(
      (acc, subCategoryItem) => {
        acc += this.getSubCategoryListItemMarkup(subCategoryItem);
        return acc;
      },
      '',
    );
    return `<ul class="subcategories__list">${result}</ul>`;
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
      console.log('Global', globalCategory);
      acc += `
                <li class="categories__item">
                    <div class="category__img_wrapper">
                        <img src=${globalCategory.image} alt="${globalCategory.value}" class="category__img" width="280" height="144">
                    </div>
                    <p class="category__title">${globalCategory.name}</p>
                    <button type="button" class="btn btn_gradient js-category-buy-btn" data-link="${globalCategory.value}">Купить</button>
                </li>`;
      return acc;
    }, '');
  },

  // openSubCategories(markup) {
  //   console.log(markup);
  //   // return markup;
  // },

  // insertSubcategories(globalCategory) {
  //   console.log(globalCategory);

  //   const subCategoriesList = globalCategory.categories.reduce(
  //     (acc, subCategory) => {
  //       acc.push(subCategory.name);
  //       // console.log(acc);
  //       return acc;
  //     },
  //     [],
  //   );
  // },

  categoriesListMarkupAddListeners() {
    const button = document.querySelector('.js-category-buy-btn');
    console.log('BTN', button);

    const subLi = document.querySelector('.subcategories__list');

    this.refs.categoriesList = document.querySelector('.categories__list');
    this.refs.categoriesList.addEventListener('click', this.getLink.bind(this));
  },

  categoriesListMarkupRemoveListeners() {
    this.refs.categoriesListInsert.removeEventListener(
      'click',
      this.getLink.bind(this),
    );
  },
};

// console.log(categories);
