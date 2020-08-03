import { refs } from '../components/refs.js';
import {
  catalogListMarkup,
  catalogListMarkupAddListeners,
} from '../catalog/catalog';

export const headerMenu = () => {
  refs.sidebar.classList.remove('ishidden_sidebar');
  const insertCatalog = document.querySelector('.catalog__wrapper__markap');
  insertCatalog.innerHTML = catalogListMarkup();
  catalogListMarkupAddListeners();
};

export const closeHeaderMenu = () => {
  refs.sidebar.classList.add('ishidden_sidebar');
};
