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

// =========== adv ==============

// apiProducts.searchProductsbyCategory('new').then(data => createList(data.data));
// =========== adv ==============

import userData from './js/userData';
import { getPofileTest, favouritesFormMarkup } from './js/profile/profileMarkups';
import { setCartCounter, setupEvents } from './js/components/cart/cart';
import { addNewAndLastSeen } from './js/components/new';

//=========================================================

export const initialAction = async () => {
  userData.getSettings();
  await apiProducts.getCategories();
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();

  new Sim();
  // trigger.triggerFn();
  console.log('userData :>> ', userData);
};
initialAction();

// console.log('userData', userData);

// const userDataFn = async () => {
//   if (localStorage.getItem('info')) {
//     const userToken = JSON.parse(localStorage.getItem('info')).token;
//     if (userToken) {
//       const response = await apiUsers.getCurrentUser();

//       userData.user = {
//         ...userData.user,
//         ...response.data,
//       };
//     }
//     delete userData.user.password;
//   } else {
//     localStorage.setItem(
//       'info',
//       JSON.stringify({
//         favorites: [],
//       }),
//     );
//   }

// };
