import './sass/main.scss';

import './js/category/category-markup';
import { containerHandler } from './js/container/container';
import services from './js/services/services';
import apiProducts from './js/api/products/apiProducts';
import './js/api/auth/apiAuth';
import userData from './js/userData';
import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/auth/apiAuth';

const btnRef = document.querySelector('.check');
const btnRef2 = document.querySelector('.check2');

containerHandler();
// apiProducts.getCategories().then(data => console.log(userData));

// services.addFavorite('5f154f156a4df46aa14dc526');
// services.GetAllOrders();
apiAuth.login();
// btnRef.addEventListener('click', apiAuth.login);
// btnRef2.addEventListener('click', getInfo);
