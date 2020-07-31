import './sass/main.scss';
import './js/api/auth/apiAuth';

import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import './js/category/category-markup';
import { containerHandler } from './js/container/container';
import { modalModule } from './js/components/modalModule/modalModule';
import apiProducts from './js/api/products/apiProducts';
import userData from './js/userData';

const initialAction = async () => {
  await apiProducts.getCategories();
  containerHandler();
};

initialAction();

// btnRef.addEventListener('click', () => {
//   console.log('hi');
//   apiAuth.login({
//     email: 'unotest2@gmail.com',
//     password: 'testuno111',
//   });
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });
