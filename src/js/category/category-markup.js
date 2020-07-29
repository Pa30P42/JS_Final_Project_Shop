import './category.scss';
import categoriesList from '../userData';

export default {
  refs: {
    categoriesListInsert: '',
    subcategoriesListInsert: '',
  },

  globalCategoriesObjects: Object.values(categoriesList.appliances),

  getLink(e) {
    if (e.target.nodeName === 'BUTTON' && e.target.dataset.link) {
      const link = e.target.closest('[data-link]').dataset.link;
      console.log(link); //link можно добавить в хлебные крошки//
    } else return;
  },

  categoriesListMarkup() {
    return `
            <ul class="categories__list">
            ${this.categoriesItemMarkup(this.globalCategoriesObjects)}
            </ul>
            `;
  },

  getCategories(globalCategory) {
    console.log(globalCategory);
    // const subCategories = categoriesList.appliances[x].categories.map(
    //   item => item.name,
    // );
    const markup = globalCategory.categories.reduce((acc, subCategory) => {
      acc += `
            <li class="subcategories__item" data-link="${subCategory.value}">${subCategory.name}  </li>
            `;
      return acc;
    }, '');
    // console.log(markup);
    return markup;
  },

  categoriesItemMarkup(globalCategoriesObjects) {
    return globalCategoriesObjects.reduce((acc, globalCategory) => {
      console.log('Global', globalCategory);
      acc += `
                <li class="categories__item">
                    <div class="category__img_wrapper">
                        <img src=${globalCategory.image} alt="${
        globalCategory.value
      }" class="category__img" width="280" height="144">
                    </div>
                    <p class="category__title">${globalCategory.name}</p>
                    <ul class="subcategories__list">
                    <template>
                      <div class="modal">
                          <p>I'm a modal created from a DOM element/node.</p>
                          <p>${this.getCategories(globalCategory)}</p>
                      </div>
                     </template>
                    
                    </ul>
                    <button type="button" class="btn btn_gradient js-category-buy-btn" data-link="${
                      globalCategory.value
                    }">Купить</button>
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
    this.refs.categoriesList.addEventListener('click', this.getLink);
  },

  categoriesListMarkupRemoveListeners() {
    this.refs.categoriesListInsert.removeEventListener('click', this.getLink);
  },
};

// console.log(categories);
