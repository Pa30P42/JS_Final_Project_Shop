import { refs } from '../components/refs';
import { categoriesListMarkup, categories } from '../category/category-markup';
import { headerMarkUp } from '../header/header.js';
//В каждом диве запустить функцию определенного модуля который булет отрисовывать блок.

const containerHeaderMarkup = function () {
  return `
    <div class="header-wrapper">${headerMarkUp()}</div>
    `;
};
const containerFooterMarkup = function () {
  return `
    <div class="footer"></div>
    `;
};
const containerSectionsMarkup = function () {
  return ` 
    <div class="slider-wrapper"></div>
    <div class="category-wrapper">${categoriesListMarkup(categories)}</div>
    <div class="new-products-wrapper"></div>
    <div class="last-seen-wrapper"></div>
    `;
};

export const containerHandler = () => {
  refs.container.insertAdjacentHTML('afterbegin', containerHeaderMarkup());
  refs.container.insertAdjacentHTML('beforeend', containerFooterMarkup());
  refs.sections.innerHTML = containerSectionsMarkup();
};

// categoriesListMarkup(categories);
