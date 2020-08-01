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

// apiProducts.getCategories().then(data => console.log(data.data));
const initialAction = async () => {
  // await apiProducts.getCategories().then(data => console.log(data.data));
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();
};
initialAction();
// if (setting.isDesktop) {
//   console.log()
// }
