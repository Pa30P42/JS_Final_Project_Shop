import './sass/main.scss';
import './js/category/category-markup';
import './js/catalog/catalog';
import './js/components/modalModule/modalModule';
import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import setting from './js/setting';

import './js/category/category-markup';
import axios from 'axios';
import apiAuth from './js/api/auth/apiAuth';
import productCard from './js/adv/productCard';

import { pseudoProfile } from './js/profile/profileTabs';

import { Sim } from './js/slider/slider';
import { containerHandler } from './js/container/container';
import { addNewProducts } from './js/components/new/new';

// apiProducts.searchProductsbyCategory('new').then(data => createList(data.data));
// =========== adv ==============

const btnShowModal = document.getElementById('btnShowModal');

let currentItem = null;

btnShowModal.addEventListener('click', async () => {
  const response = await axios.get('https://goit-store.herokuapp.com/products');
  const item = response.data[8];
  currentItem = item;
  // console.log(response);
  productCard(item);
});

const initialAction = async () => {
  await apiProducts.getCategories();
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();
  addNewProducts();
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
