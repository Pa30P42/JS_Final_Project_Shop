import './sass/main.scss';
import './js/api/auth/apiAuth';
import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import './js/category/category-markup';
import { containerHandler } from './js/container/container';
import './js/components/modalModule/modalModule';
import settings from './js/setting';
import { setCartCounter } from './js/components/cart';
// import apiProducts from './js/api/products/apiProducts';
import userData from './js/userData';

containerHandler();
settings.getDevice();
setCartCounter();
window.addEventListener('resize', e => {
  // console.log(e.target);
  settings.getDevice();
  console.log(settings.isMobile, settings.isTablet, settings.isDesktop);
  setCartCounter();
});

// btnRef.addEventListener('click', () => {
//   apiUsers.deleteFavorite('5f2155d59e8747001767cdf7');
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });
