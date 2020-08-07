import {
  startSpinner
} from './js/scroll_and_spiner/spinner'
import './sass/main.scss';
import './js/category/category-markup';
import {
  containerHandler
} from './js/container/container';
import {
  createSingleCardMarkup
} from './js/sale/cardModule';
import {
  createList
} from './js/sale/saleSection';
import {
  Sim
} from './js/slider/slider';
import './js/catalog/catalog';
import './js/components/modalModule/modalModule';
import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import setting from './js/setting';
import {
  refs
} from './js/components/refs';
import './js/category/category-markup';
import axios from 'axios';
import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import productCard from './js/adv/productCard';
import { createNewPagination } from './js/pagination/pagination';

import userData from './js/userData';
import {
  getPofileTest,
  favouritesFormMarkup
} from './js/profile/profileMarkups';
import {
  setCartCounter,
  setupEvents
} from './js/components/cart/cart';
import {
  addNewAndLastSeen
} from './js/components/new';
import {
  heightScroll
} from './js/scroll_and_spiner/scroll';

export const initialAction = async () => {
  startSpinner();
  userData.getSettings();
  console.log(userData)

  await apiProducts.getCategories();
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();
  heightScroll();

  new Sim();
};
initialAction();
