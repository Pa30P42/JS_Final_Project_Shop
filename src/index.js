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
// apiUsers.getInfo();
btnRef.addEventListener('click', () => {
  apiUsers.deleteFavorite('5f2155d59e8747001767cdf7');
});
btnRef2.addEventListener('click', () => {
  apiUsers.getInfo();
});
// apiProducts.getCategories().then(data => console.log(userData));

// services.addFavorite('5f154f156a4df46aa14dc526');
// services.GetAllOrders();

// btnRef.addEventListener('click', apiAuth.login);
// btnRef2.addEventListener('click', getInfo);
