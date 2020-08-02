import './sass/main.scss';
import './js/api/auth/apiAuth';
import './js/category/category-markup';
import {
  containerHandler
} from './js/container/container';
import './js/components/modalModule/modalModule';
import setting from './js/setting'
import apiUsers from './js/api/users/apiUsers'
import breadСrumbs from './js/breadCrumbs/breadСrumbs'

const initialAction = async () => {
  apiUsers.getCurrentUser();
  // await apiProducts.getCategories().then(data => console.log(data.data));
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();
};
initialAction();
// if (setting.isDesktop) {
//   console.log()
// }


