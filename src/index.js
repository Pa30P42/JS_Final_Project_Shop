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

import markupInformation from './js/information/markup_info';

const btnRef = document.querySelector('.check');
const btnRef2 = document.querySelector('.check2');
import userData from './js/userData';

containerHandler();
btnRef.addEventListener('click', markupInformation);
btnRef2.addEventListener('click', () =>
  modalModule(markupInformation, listeners),
);

// btnRef.addEventListener('click', () => {
//   apiUsers.deleteFavorite('5f2155d59e8747001767cdf7');
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });
