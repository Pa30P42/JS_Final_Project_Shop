import './sass/main.scss';
import './js/api/auth/apiAuth';

import './js/category/category-markup';
import trigger from './js/components/trigger';
import { containerHandler } from './js/container/container';
import './js/components/modalModule/modalModule';
import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import setting from './js/setting';
import './js/category/category-markup';
import axios from 'axios';

// =========== adv ==============
import productCard from './js/adv/productCard';

const btnShowModal = document.getElementById('btnShowModal');

let currentItem = null;

btnShowModal.addEventListener('click', async () => {
  const response = await axios.get('https://goit-store.herokuapp.com/products');
  const item = response.data[8];
  currentItem = item;
  console.log(response);
  productCard(item);
});

import { pseudoProfile } from './js/profile/profileTabs';

const initialAction = async () => {
  await apiProducts.getCategories();
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();
  pseudoProfile();
  // trigger.triggerFn();
};
initialAction();
