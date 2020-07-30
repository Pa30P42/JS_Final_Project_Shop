import './sass/main.scss';
import './js/api/auth/apiAuth';

import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import './js/category/category-markup';
import { containerHandler } from './js/container/container';
import './js/components/modalModule/modalModule';
// import apiProducts from './js/api/products/apiProducts';
import userData from './js/userData';

containerHandler();

// btnRef.addEventListener('click', () => {
// apiUsers.deleteFavorite(`${getID()}`);
// });
// btnRef2.addEventListener('click', () => {
//   apiUsers.getInfo();
// });

