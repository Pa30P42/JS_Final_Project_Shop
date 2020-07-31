import { refs } from '../components/refs.js';
import { headerMenu, closeHeaderMenu } from '../sideBar/headerSideBar.js';
import { contactMarkUp } from '../contacts/contacts.js';
import { categoriesListMarkup, categories } from '../category/category-markup';
import '../components/modalModule/modalModule';
import { showCart } from '../components/cart';

const headerButton = event => {
  const dataNode = event.target.closest('[data-name]');
  const dataname = event.target.dataset.name;
  if (dataname === 'name_logo') {
    refs.container.innerHTML = categoriesListMarkup(categories);
    console.log('logo');
  } else if (dataname === 'name_phone') {
    // trigger.openTrigger();
    console.log('phone');
  } else if (dataname === 'name_search') {
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
    showCart();
  } else if (dataname === 'name_menu') {
    headerMenu();
  } else if (dataname === 'name_catalog') {
    console.log('catalog');
  }
};

refs.header.addEventListener('click', headerButton);
