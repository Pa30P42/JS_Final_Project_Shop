import './sass/main.scss';
import './js/category/category-markup';
import {
  containerHandler
} from './js/container/container';
import {
  Sim
} from './js/slider/slider';

import './js/catalog/catalog';
import userData from './js/userData';
import './js/components/modalModule/modalModule';
import apiProducts from './js/api/products/apiProducts';
import apiUsers from './js/api/users/apiUsers';
import setting from './js/setting';
import './js/category/category-markup';
import axios from 'axios';
import productCard from './js/adv/productCard';
import apiAuth from './js/api/auth/apiAuth';

setting.getDevice(document.documentElement.clientWidth);
// apiProducts.getAllProducts().then(data => console.log(data.data));


//5f257c74dd556c0017611105
//5f253901dd556c0017610f5c
//5f256443dd556c0017611101
// функция для локал сторедж() добавляем в масив фейворитс и удаляем из масива(достаем масива файндом)
// паралельно делаем это на бекенде. записываем в функцию ед продукт файворит и ИД, а когда
// снимаем сердечко убираем и делаем запрос на ремув


// function addFavoritiesProduct() {
//   // apiUsers.addFavorite('5f253901dd556c0017610f5c');
apiUsers.getCurrentUser();
// }
// function favotites() {
//   const fav = ['5f257c74dd556c0017611105', '5f253901dd556c0017610f5c', '5f256443dd556c0017611101'];
//   return fav
// }

// apiProducts.getAllProducts().then(data => profileGetProducts(data.data));


// function profileGetProducts(products, favotites) {
//   console.log(products)
//   console.log(favotites)




// }
// profileGetProducts('5f253901dd556c0017610f5c', favotites());




// apiProducts.getAllProducts().then(data => console.log(data.data));


// apiAuth.register({
//   name: "Olh55a9",
//   email: "Olha55@gmail.com",
//   password: "Olha5598",
// })


// apiAuth.login({
//   email: 'Olha@gmail.com',
//   password: 'Olha98',
// })

const btnShowModal = document.getElementById('btnShowModal');

let currentItem = null;

btnShowModal.addEventListener('click', async () => {
  const response = await axios.get('https://goit-store.herokuapp.com/products');
  const item = response.data[8];
  currentItem = item;
  // console.log(response);
  productCard(item);
});

import {
  pseudoProfile
} from './js/profile/profileTabs';

const initialAction = async () => {
  await apiProducts.getCategories();
  setting.getDevice(document.documentElement.clientWidth);
  containerHandler();
  pseudoProfile();
  new Sim();
  // trigger.triggerFn();
};
initialAction();
