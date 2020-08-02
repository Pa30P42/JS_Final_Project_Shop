import { contactMarkUp } from '../contacts/contacts.js';

import trigger from '../components/trigger';
// import trigger from './js/components/trigger';
import { refs } from '../components/refs.js';
import { headerMenu, closeHeaderMenu } from '../sideBar/headerSideBar.js';
// import { contactMarkUp } from '../contacts/contacts.js';
import {
  catalogListMarkup,
  listeners,
  catalogListMarkupAddListeners,
} from '../catalog/catalog';

import {
  categoriesListMarkup,
  categoriesListMarkupAddListeners,
} from '../category/category-markup';
import { modalModule } from '../components/modalModule/modalModule.js';

import { pseudoProfile } from '../profile/profileTabs';

import {
  searshForm,
  listenersForSearch,
} from '../search/searchdesktop/searchDesktop';
const headerButton = event => {
  const dataname = event.target.closest('[data-name]').dataset.name;
  if (dataname === 'name_logo') {
    refs.container.innerHTML = categoriesListMarkup(categories);
    categoriesListMarkupAddListeners();

    //вставить слушателей для профайл табс
    pseudoProfile();
    //======надо будет удалить=====
  } else if (dataname === 'name_phone') {
    trigger.triggerFn();
    // trigger.openTrigger();
    console.log('phone');
  } else if (dataname === 'name_search') {
    modalModule(searshForm, listenersForSearch);
    console.log('search');
  } else if (dataname === 'name_buttonClose') {
    closeHeaderMenu();
  } else if (dataname === 'name_sale') {
    console.log('sale');
  } else if (dataname === 'name_info') {
    console.log('info');
  } else if (dataname === 'name_contacts') {
    console.log('cont');
    contactMarkUp();
  } else if (dataname === 'name_user') {
    console.log('user');
  } else if (dataname === 'name_like') {
    console.log('like');
  } else if (dataname === 'name_cart') {
    console.log('cart');
  } else if (dataname === 'name_menu') {
    headerMenu();
  } else if (dataname === 'name_catalog') {
    modalModule(catalogListMarkup, listeners);
    catalogListMarkupAddListeners();

    // console.log('catalog');
  }
};

refs.header.addEventListener('click', headerButton);
