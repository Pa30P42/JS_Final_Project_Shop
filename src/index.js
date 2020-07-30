import './sass/main.scss';
import './js/api/auth/apiAuth';
import { containerHandler } from './js/container/container';
import userData from './js/userData';
import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import './js/category/category-markup';
import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import setting from './js/setting';

const btnRef = document.querySelector('.check');
const btnRef2 = document.querySelector('.check2');

const initialAction = async () => {
  await apiProducts.getCategories();
  containerHandler();
};

initialAction();

// btnRef.addEventListener('click', () => {
//   console.log('hi');
//   apiAuth.login({
//     email: 'unotest2@gmail.com',
//     password: 'testuno111',
//   });
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });
