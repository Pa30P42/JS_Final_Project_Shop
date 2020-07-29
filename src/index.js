import './sass/main.scss';
import './js/category/category-markup';
import { containerHandler } from './js/container/container';
import services from './js/services/services';
import apiProducts from './js/api/products/apiProducts';
import './js/api/auth/apiAuth';
import userData from './js/userData';
import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';

const btnRef = document.querySelector('.check');
const btnRef2 = document.querySelector('.check2');

containerHandler();

// btnRef.addEventListener('click', () => {
//   apiUsers.deleteFavorite('5f2155d59e8747001767cdf7');
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });
