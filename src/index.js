import './sass/main.scss';
import './js/api/auth/apiAuth';

import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import './js/category/category-markup';
import {
  containerHandler
} from './js/container/container';
import './js/components/modalModule/modalModule';
import apiProducts from './js/api/products/apiProducts';
import userData from './js/userData';
import setting from './js/setting'


const initialAction = async () => {
  // await apiProducts.getCategories();
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();
};
initialAction();
// if (setting.isDesktop) {
//   console.log('WORK')
// } ПЕРЕПРОВЕРКА





// btnRef.addEventListener('click', () => {
//   apiUsers.deleteFavorite('5f2155d59e8747001767cdf7');
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });
