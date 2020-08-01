import './sass/main.scss';
import './js/api/auth/apiAuth';

import './js/category/category-markup';
import {
  containerHandler
} from './js/container/container';

import apiProducts from './js/api/products/apiProducts';

import setting from './js/setting';







import {
  pseudoProfile
} from './js/profile/profileTabs';



const initialAction = async () => {
  await apiProducts.getCategories();
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();
  pseudoProfile();

};
initialAction();
