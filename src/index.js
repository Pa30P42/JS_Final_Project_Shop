import './sass/main.scss';
import './js/api/auth/apiAuth';

import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import './js/category/category-markup';
import { containerHandler } from './js/container/container';

import { cardItem } from './js/sale/cardModule';
import { createSingleCardMarkup } from './js/sale/cardModule';
import { refs } from './js/components/refs';
//containerHandler();
import { createList } from './js/sale/saleSection';
import './js/components/modalModule/modalModule';
import apiProducts from './js/api/products/apiProducts';
import userData from './js/userData';
apiProducts.searchProductsbyCategory('new').then(data => createList(data.data));
// function parsData(products) {
//   const body = document.querySelector('body');
//   body.innerHTML = cardCartItem(products[0], 5);
//   console.log(products);
//   // cardItemMarkup(products[0]);
// }

// refs.container.insertAdjacentHTML('afterbegin', cardItemMarkup());
// apiAuth.register({
//   name: 'Anna',
//   email: 'anna.goryanina88@gmail.com',
//   password: '1234567anna',
// });
// apiAuth.login({ email: 'anna.goryanina88@gmail.com', password: '1234567anna' });

// btnRef.addEventListener('click', () => {
//   apiUsers.deleteFavorite('5f2155d59e8747001767cdf7');
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });
