import './category.scss';
import categoriesList from '../userData';
import apiProducts from '../api/products/apiProducts';
import { getAppliances } from '../api/products/services';
import userData from '../../js/userData';

export default {
  refs: {
    categoriesList: '',
  },

  categories: Object.values(categoriesList.appliances),

  getLink(e) {
    if (e.target.nodeName === 'BUTTON' && e.target.dataset.link) {
      const link = e.target.closest('[data-link]').dataset.link;
      console.log(link); //link можно добавить в хлебные крошки//
    } else return;
  },

  categoriesListMarkup() {
    return `
            <ul class="categories__list">
            ${this.categoriesItemMarkup(this.categories)}
            </ul>
            `;
  },

  getCategories(categoryItem) {
    // const subCategories = userData.appliances[x].categories.map(item => item.name),

    const markup = categoryItem.categories.reduce((acc, subCategory) => {
      acc += `
            <li data-link="${subCategory.value}">${subCategory.name}  </li>
            `;

      return acc;
    }, '');
    // console.log(markup);
    return markup;
  },

  categoriesItemMarkup(categories) {
    return categories.reduce((acc, categoryItem) => {
      acc += `
                <li class="categories__item">
                    <div class="category__img_wrapper">
                        <img src=${categoryItem.image} alt="${
        categoryItem.value
      }" class="category__img" width="280" height="144">
                    </div>
                    <p class="category__title">${categoryItem.name}</p>
                    <ul class="list">
                    ${this.getCategories(categoryItem)}
                    </ul>
                    <button type="button" class="btn btn_gradient js-category-buy-btn" data-link="${
                      categoryItem.value
                    }">Купить</button>
                </li>`;
      return acc;
    }, '');
  },

  categoriesListMarkupAddListeners() {
    const button = document.querySelector('.js-category-buy-btn');
    console.log('BTN', button);

    this.refs.categoriesList = document.querySelector('.categories__list');
    this.refs.categoriesList.addEventListener('click', this.getLink);
  },

  categoriesListMarkupRemoveListeners() {
    this.refs.categoriesList.removeEventListener('click', this.getLink);
  },
};

// console.log(categories);
