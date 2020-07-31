import './sass/main.scss';
import './js/api/auth/apiAuth';

import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import './js/category/category-markup';
import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import setting from './js/setting';
import trigger from './js/components/trigger';

const btnRef = document.querySelector('.check');
const btnRef2 = document.querySelector('.check2');

import { containerHandler } from './js/container/container';
import './js/components/modalModule/modalModule';
// import apiProducts from './js/api/products/apiProducts';
import userData from './js/userData';

containerHandler();
trigger.triggerFn();
// trigger.triggerMarkupListener();
// btnRef2.addEventListener('click', () => {
//   trigger.openTrigger();
//   // console.log('hello');
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });
