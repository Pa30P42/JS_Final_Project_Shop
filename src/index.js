import './sass/main.scss';
import './js/api/auth/apiAuth';

import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import './js/category/category-markup';
import { containerHandler } from './js/container/container';
import './js/components/modalModule/modalModule';
import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import setting from './js/setting';
import './js/category/category-markup';

// =========== adv ==============
import productCard from './js/adv/productCard';

const btnShowModal = document.getElementById('btnShowModal');

let currentItem = null;

containerHandler();

btnShowModal.addEventListener('click', async () => {
  const response = await apiProducts.getAllProducts();
  const item = response.data[8];
  currentItem = item;
  productCard(item);
});
