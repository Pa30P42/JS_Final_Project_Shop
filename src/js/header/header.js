import { contactMarkUp } from '../contacts/contacts.js';
import { showCart } from '../components/cart/cart';
import trigger from '../components/trigger';
// import trigger from './js/components/trigger';
import {
  refs
} from '../components/refs.js';
import {
  headerMenu,
  closeHeaderMenu
} from '../sideBar/headerSideBar.js';
// import { contactMarkUp } from '../contacts/contacts.js';
import { catalogListMarkup, listeners, catalogListMarkupAddListeners } from '../catalog/catalog';

import {
  categoriesListMarkup,
  categoriesListMarkupAddListeners,
} from '../category/category-markup';
import {
  modalModule
} from '../components/modalModule/modalModule.js';
import information from '../information/information';

import {
  pseudoProfile
} from '../profile/profileTabs';

import {
  searshForm,
  listenersForSearch,
} from '../search/searchdesktop/searchDesktop';

import { authFn } from '../auth/authMenu';
import apiProducts from '../api/products/apiProducts';
import { createList } from '../sale/saleSection';
import { initialAction } from '../../index';

const headerButton = event => {
  let dataname;
  if (event.target.closest('[data-name]')) {
    dataname = event.target.closest('[data-name]').dataset.name;
  } else return;
  if (dataname === 'name_logo') {
    initialAction();
    // refs.container.innerHTML = categoriesListMarkup();
    // categoriesListMarkupAddListeners();

    //======надо будет удалить=====
  } else if (dataname === 'name_phone') {
    trigger.triggerFn();
    // trigger.openTrigger();
    console.log('phone');
  } else if (dataname === 'name_search') {
    modalModule(searshForm, listenersForSearch);
    closeHeaderMenu();
  } else if (dataname === 'name_buttonClose') {
    closeHeaderMenu();
  } else if (dataname === 'name_sale') {
    apiProducts.searchProductsbyCategory('new').then(data => createList(data.data));
    console.log('sale');
    closeHeaderMenu();
  } else if (dataname === 'name_info') {
    console.log('info');
    information();
    closeHeaderMenu();
  } else if (dataname === 'name_contacts') {
    contactMarkUp();
    closeHeaderMenu();
  } else if (dataname === 'name_user') {
    authFn();
    closeHeaderMenu();
  } else if (dataname === 'name_like') {
    console.log('like');
    closeHeaderMenu();
  } else if (dataname === 'name_cart') {
    // console.log('cart');
    closeHeaderMenu();
    showCart();
  } else if (dataname === 'name_menu') {
    headerMenu();
  } else if (dataname === 'name_catalog') {
    modalModule(catalogListMarkup, listeners);
    catalogListMarkupAddListeners();
  }
};

refs.header.addEventListener('click', headerButton);
