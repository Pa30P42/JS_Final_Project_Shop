import './sass/main.scss';
import './js/api/auth/apiAuth';
import { containerHandler } from './js/container/container';

import './js/components/modalModule/modalModule';

import userData from './js/userData';
import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import './js/category/category-markup';
import { containerHandler } from './js/container/container';
import './js/components/modalModule/modalModule';
import services from './js/services/services';
import apiProducts from './js/api/products/apiProducts';
import userData from './js/userData';

containerHandler();

// btnRef.addEventListener('click', () => {
//   apiUsers.deleteFavorite('5f2155d59e8747001767cdf7');
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });
