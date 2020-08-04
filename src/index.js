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

import './js/category/category-markup';
import axios from 'axios';
import apiAuth from './js/api/auth/apiAuth';
import apiUsers from './js/api/users/apiUsers';
import productCard from './js/adv/productCard';
import {
  pseudoProfile
} from './js/profile/profileTabs';
import userData from './js/userData'
import {
  getPofileTest,
  favouritesFormMarkup,


} from './js/profile/profileMarkups';






// =========== adv ==============




// apiProducts.searchProductsbyCategory('new').then(data => createList(data.data));
// =========== adv ==============

const btnShowModal = document.getElementById('btnShowModal');

let currentItem = null;

btnShowModal.addEventListener('click', async () => {
  const response = await axios.get('https://goit-store.herokuapp.com/products');
  const item = response.data[8];
  currentItem = item;
  console.log(response);
  productCard(item);
});

const initialAction = async () => {
  // await apiProducts.getAllProducts().then(data => getPofileTest(data.data))
  //   .then(response => console.log('response :>> ', response))
  await apiProducts.getCategories();
  await apiAuth.login({
    "email": "olysiHH@gmail.com",
    "password": "qwerty321"
  });
  setting.getDevice(document.documentElement.clientWidth);

  containerHandler();
  pseudoProfile();
  new Sim();
  // trigger.triggerFn();
  console.log('userData :>> ', userData);
};
initialAction();
apiUsers.getCurrentUser();
// const initialActProfile = async () => {
//   const arr = await apiProducts.getAllProducts();
//   return arr

// };
// initialActProfile();
