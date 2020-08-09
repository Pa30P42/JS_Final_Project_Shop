import catalogList from '../userData';
import subItem from '../api/products/services';
import apiProducts from '../api/products/apiProducts';
import { modalModule } from '../components/modalModule/modalModule';
import { closeHeaderMenu } from '../sideBar/headerSideBar';
import caretblack from '../../images/svgHeader/caret-black.svg';
import { createNewPagination } from '../pagination/pagination';
import { createList } from '../sale/saleSection';
import userData from '../userData';

const isMobile = true;
const isTablet = false;
const isDesktop = false;

const refs = {
  catalogList: '',
  subCatalogList: '',
};

const categories = Object.values(catalogList.appliances);

async function getLink(e) {
  if ((e.target.nodeName === 'LI' || e.target.nodeName === 'P') && e.target.closest('[data-sublink]')) {
    const subLink = e.target.closest('[data-sublink]').dataset.sublink;
    await createNewPagination(subLink, createList);
    closeHeaderMenu();
    return subLink;
  }

  if (e.target.nodeName === 'H2' && e.target.dataset.title) {
    if (userData.settings.isMobile || userData.settings.isTablet) {
      const activeSubCatalog = refs.catalogList.querySelector('.catalog__active');

      const catalog = e.target.closest('[data-link]');
      const subCatalog = catalog.querySelector('.sub__catalog__list');

      subCatalog.classList.toggle('catalog__active');

      if (activeSubCatalog) {
        activeSubCatalog.classList.remove('catalog__active');
        activeSubCatalog.classList.add('catalog__hidden');
      }

      const catalogLink = e.target.closest('[data-sublink]');
    }
  }
}

function incomingData(e) {
  if ((e.target.nodeName === 'LI' || e.target.nodeName === 'P') && e.target.closest('[data-categoryName]')) {
    const categoryNameLink = e.target.dataset.categoryname;

    //! ==============================================================================
    //? вместо console.log вставляем функцию Ани которая принимает массив продуктов для открисовки категории по клику
  }
}

function getVisibilitySubCatalog() {
  if (userData.settings.isMobile || userData.settings.isTablet) {
    return 'catalog__hidden';
  } else return 'catalog__active';
}

export function catalogListMarkup() {
  return `
                <ul class="catalog__list">
                ${catalogItemMarkup(categories)}
                </ul>
                `;
}

function getCategories(category) {
  const markup = category.categories.reduce((acc, category) => {
    acc += `
        <li class="sub__catalog__item" data-sublink="${category.value}">
        <p class="sub__catalog__text" data-categoryName="${category.value}">${category.name}</p>
        </li>
        `;
    return acc;
  }, '');

  return markup;
}

function catalogItemMarkup(categories) {
  return categories.reduce((acc, category) => {
    acc += `
        <li class="catalog__item" data-link="${category.value}">
         <img alt="svg_icon_header" class="caret_down_category" 
        src=${caretblack}  width="15" height="15"/> <img src="${category.image}" alt="${
      category.value
    }" class="catalog__img" width="247" height="127">
        <h2 class="catalog__title" data-title="${category.value}">${category.name}</h2>
        <ul class="sub__catalog__list ${getVisibilitySubCatalog()}">
        ${getCategories(category)}
        </ul>
      
      </li>`;
    return acc;
  }, '');
}

export function catalogListMarkupAddListeners() {
  const li = document.querySelector('.catalog__item');

  refs.catalogList = document.querySelector('.catalog__list');
  refs.catalogList.addEventListener('click', getLink);
  refs.catalogList.addEventListener('click', incomingData);
}

function catalogListMarkupRemoveListeners() {
  refs.catalogList.removeEventListener('click', getLink);
}

export function listeners(action) {
  const getSubCatalogLink = async e => {
    const link = getLink(e);

    if (link) {
      action();
    }
    await createNewPagination(link, createList);
  };
  const catalogList = document.querySelector('.catalog__list');
  catalogList.addEventListener('click', getSubCatalogLink);
}
