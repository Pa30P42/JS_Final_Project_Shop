import './sass/main.scss';
import './js/category/category-markup';
import trigger from './js/components/trigger';
import { containerHandler } from './js/container/container';
import { Sim } from './js/slider/slider';

import './js/catalog/catalog';
import userData from './js/userData';
import './js/components/modalModule/modalModule';
import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import setting from './js/setting';
import './js/category/category-markup';
import axios from 'axios';
import apiAuth from './js/api/auth/apiAuth';
import { pseudoProfile } from './js/profile/profileTabs';
import markupInformation from './js/information/markup_info';

// ============= adv ===============
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
// =================================

const initialAction = async () => {
  await apiProducts.getCategories();
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();
  pseudoProfile();
  new Sim();
  // trigger.triggerFn();
};
initialAction();
