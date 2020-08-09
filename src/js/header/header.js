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
  categoriesListMarkupAddListeners
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
  listenersForSearch
} from '../search/searchdesktop/searchDesktop';

import {
  containerHandler
} from '../container/container';

import { authFn } from '../auth/authMenu';
import apiProducts from '../api/products/apiProducts';

import {
  createNewPagination
} from '../pagination/pagination.js';

import profile from '../profile/profileMarkups';
import userData from '.././userData';

import {
  profileFavErrorMarkup,
  favouritesFormMarkup,
  setFavouritesCount
} from '../profile/profileMarkups';

import {
  createList
} from '../sale/saleSection';
import {
  initialAction
} from '../../index';
import {
  createPagination
} from '../pagination/pagination.js';

const headerButton = async event => {
  let dataname;
  if (event.target.closest('[data-name]')) {
    dataname = event.target.closest('[data-name]').dataset.name;
  } else return;
  if (dataname === 'name_logo') {
    initialAction();



    //======надо будет удалить=====
  } else if (dataname === 'name_phone') {
    trigger.triggerFn();
    // trigger.openTrigger();

  } else if (dataname === 'name_search') {
    modalModule(searshForm, listenersForSearch);
    closeHeaderMenu();
  } else if (dataname === 'name_buttonClose') {
    closeHeaderMenu();
  } else if (dataname === 'name_sale') {
    await createNewPagination('new', createList);
    // const pagination = await createPagination('sale');
    // createList(pagination.array, pagination.paginationMarkup, userData.getName('sale'));
    closeHeaderMenu();
  } else if (dataname === 'name_info') {

    information();
    closeHeaderMenu();
  } else if (dataname === 'name_contacts') {
    contactMarkUp();
    closeHeaderMenu();
  } else if (dataname === 'name_user') {
    authFn();
    closeHeaderMenu();
  } else if (dataname === 'name_like') {
    //======open favourites=====


    const localUserFavorites = JSON.parse(localStorage.getItem("user-data"))
      .response_data_user[0].favorites;
    const result = localStorage.getItem("user-data") ?
      localUserFavorites :
      localStorage.getItem("favorites__") ? [...JSON.parse(localStorage.getItem("favorites__"))] : [];

    //======open favourites=====

    profile.maintabsMarkup();
    (result.length === 0) ?
    profileFavErrorMarkup():
      favouritesFormMarkup(result);


    const controlItem = document.querySelector('button[title="favourites"]');
    controlItem.classList.add('active');
    setFavouritesCount();

    //======open favourites=====


    closeHeaderMenu();
  } else if (dataname === 'name_cart') {

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
