import { startSpinner } from './js/scroll_and_spiner/spinner';
import './sass/main.scss';
import './js/category/category-markup';
import { containerHandler } from './js/container/container';
import { Sim } from './js/slider/slider';
import './js/catalog/catalog';
import './js/components/modalModule/modalModule';
import apiProducts from './js/api/products/apiProducts';
import setting from './js/setting';
import './js/category/category-markup';

import userData from './js/userData';
import { heightScroll } from './js/scroll_and_spiner/scroll';

export const initialAction = async () => {
  startSpinner();
  userData.getSettings();

  await apiProducts.getCategories();
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();
  heightScroll();

  new Sim();
};
initialAction();
