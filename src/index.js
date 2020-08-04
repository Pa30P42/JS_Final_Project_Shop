import './sass/main.scss';
import './js/category/category-markup';
import { containerHandler } from './js/container/container';
import { createSingleCardMarkup } from './js/sale/cardModule';
import { createList } from './js/sale/saleSection';
import { Sim } from './js/slider/slider';
import './js/catalog/catalog';
import './js/components/modalModule/modalModule';
import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import setting from './js/setting';
import { refs } from './js/components/refs';
import './js/category/category-markup';
import axios from 'axios';
import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import productCard from './js/adv/productCard';
import { setCartCounter, setupEvents } from './js/components/cart/cart';

import { addNewAndLastSeen } from './js/components/new';
import { pseudoProfile } from './js/profile/profileTabs';

// =========== adv ==============

// apiProducts.searchProductsbyCategory('new').then(data => createList(data.data));
// =========== adv ==============

const btnShowModal = document.getElementById('btnShowModal');

let currentItem = null;

btnShowModal.addEventListener('click', async () => {
  const response = await axios.get('https://goit-store.herokuapp.com/products');
  const item = response.data[8];
  currentItem = item;
  productCard(item);
});

const initialAction = async () => {
  await apiProducts.getCategories();
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();
  addNewAndLastSeen();
  setCartCounter();
  setupEvents();
  pseudoProfile();
  new Sim();
  // trigger.triggerFn();
};
initialAction();

// apiAuth.login({ email: 'unotest2@gmail.com', password: 'testuno111' });
// const initialActProfile = async () => {
//   const arr = await apiProducts.getAllProducts();
//   return arr

// };
// initialActProfile();
