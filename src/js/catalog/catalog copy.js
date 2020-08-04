import './catalog.scss';
import catalogList from '../userData';
import subItem from '../api/products/services';
import apiProducts from '../api/products/apiProducts';
import { modalModule } from '../components/modalModule/modalModule';

const isMobile = true;
const isTablet = false;
const isDesktop = false;

export default {
  refs: {
    catalogList: '',
  },

  categories: Object.values(catalogList.appliances),

  getLink(e) {
    // console.log("nodeName", e.target.nodeName);
    // console.log(e.target);
    // if (e.target.dataset.sublink) {
    //   console.log(e.target.dataset.sublink);
    // }
    // console.log(e.target);
    if (
      (e.target.nodeName === 'LI' || e.target.nodeName === 'P') &&
      e.target.closest('[data-sublink]')
    ) {
      const subLink = e.target.closest('[data-sublink]').dataset.sublink;
      console.log(subLink);
    }

    if (e.target.nodeName === 'H2' && e.target.dataset.title) {
      if (isMobile || isTablet) {
        const activeSubCatalog = this.refs.catalogList.querySelector(
          '.catalog__active',
        );

        if (activeSubCatalog) {
          activeSubCatalog.classList.remove('catalog__active');
          activeSubCatalog.classList.add('catalog__hidden');
        }

        console.log(activeSubCatalog);
        console.log(e.target);

        // if (activeSubCatalog.closest('[data-title]') === e.target) {
        //   e.target.classList.remove('active')
        //   e.target.classList.add('hidden')
        // }

        const catalog = e.target.closest('[data-link]');
        const subCatalog = catalog.querySelector('.sub__catalog__list');

        subCatalog.classList.add('catalog__active');
      }
    }
  },

  getVisibilitySubCatalog() {
    if (isMobile || isTablet) {
      return 'catalog__hidden';
    } else return 'catalog__active';
  },

  catalogListMarkup() {
    return `
                <ul class="catalog__list">
                ${this.catalogItemMarkup(this.categories)}
                </ul>
                `;
  },

  getCategories(category) {
    const markup = category.categories.reduce((acc, category) => {
      acc += `
        <li class="sub__catalog__item" data-sublink="${category.value}">
        <p class="sub__catalog__text">${category.name}</p>
        </li>
        `;
      return acc;
    }, '');
    // console.log(markup);
    return markup;
  },

  catalogItemMarkup(categories) {
    return categories.reduce((acc, category) => {
      // console.log(category);
      acc += `
        <li class="catalog__item" data-link="${category.value}">
        <img src="${category.image}" alt="${
        category.value
      }" class="catalog__img" width="247" height="127">
        <h2 class="catalog__title" data-title="${category.value}">${
        category.name
      }</h2>
        <ul class="sub__catalog__list ${this.getVisibilitySubCatalog()}">
        ${this.getCategories(category)}
        </ul>
      </li>`;
      return acc;
    }, '');
  },

  catalogListMarkupAddListeners() {
    const li = document.querySelector('.catalog__item');
    console.log(li);

    this.refs.catalogList = document.querySelector('.catalog__list');
    this.refs.catalogList.addEventListener('click', this.getLink.bind(this));
  },

  catalogListMarkupRemoveListeners() {
    this.refs.catalogList.removeEventListener('click', this.getLink);
  },

  listeners(action) {
    const getSubCatalogLink = e => {
      const link = this.getLink(e);
      action();
    };
    const subCatalogList = document.querySelector('.sub__catalog__list');
    subCatalogList.addEventListener('click', getSubCatalogLink);
  },
};
