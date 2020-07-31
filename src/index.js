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

// document.body.onload = updateLastSeen(189864298, new Date().getTime());
const btnShowModal = document.getElementById('btnShowModal');

let currentItem = null;

containerHandler();

btnShowModal.addEventListener('click', async () => {
  const response = await apiProducts.getAllProducts();
  const item = response.data[8];
  currentItem = item;
  productCard(item);
});

// =============================

// const btnRef = document.querySelector('.check');
// const btnRef2 = document.querySelector('.check2');
// // import apiProducts from './js/api/products/apiProducts';
// import userData from './js/userData';

// containerHandler();

// btnRef.addEventListener('click', markupProductCard);

// btnRef.addEventListener('click', () => {
//   apiUsers.deleteFavorite('5f2155d59e8747001767cdf7');
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });

// apiAuth.register({
//   name: 'Vygovska',
//   email: 'pillowforneedles@gmail.com',
//   password: 'qwerty123',
// });

// apiAuth.login({
//   email: 'pillowforneedles@gmail.com',
//   password: 'qwerty123',
// });
