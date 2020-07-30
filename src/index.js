import './sass/main.scss';
import { containerHandler } from './js/container/container';
import { addNewProducts } from './js/components/new';
// import services from './js/services/services';
import userData from './js/userData';
import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import './js/category/category-markup';
import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import setting from './js/setting';

const btnRef = document.querySelector('.check');
const btnRef2 = document.querySelector('.check2');

containerHandler();
addNewProducts();

// apiProducts.getCategories().then(data => console.log(userData));

// btnRef.addEventListener('click', () => {
//   apiUsers.deleteFavorite('5f2155d59e8747001767cdf7');
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });
