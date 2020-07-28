import './sass/main.scss';

import './js/category/category-markup';
import {
  containerHandler
} from './js/container/container';

import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import apiUsers from './js/api/users/apiUsers';

import userData from './js/userData';

// containerHandler();
// ========= services product
// apiProducts.getCategories().then(data => console.log(userData));

// ! >>> Products >>>
// !===== Вывод масива обьектов всех продуктов / length: 4
// apiProducts.getAllProducts().then(data => console.log(data.data));

// !===== Поиск продуктов через search
// apiProducts.searchProducts('mix').then(data => console.log(data.data));

// !===== Передача продуктов по пагинации(пайдж только 1 или можно менять? а то с 2 не работает)
// apiProducts.getProductsWithPagination(2, 1, "tools").then(data => console.log(data.data));
// !===== Добавить продукт- не работает)
// apiProducts.CreateNewProduct({
//   "totalQuantity": 2,
//   "name": "Wrench",
//   "category": "tools",
//   "price": 15,
//   "description": "Good tool"
// }).then(data => console.log(data.data));
// * >>>> Orders >>>>
// *Выводит все заказы
// apiOrders.GetAllOrders().then(data => console.log(data.data));
// *Вывод ID новго заказа
// apiOrders.createNewOrder({"address": {
//   "city": "dsfs",
//   "country": "werwrewr",
//   "place": "rewrewrn",
//   "street": "rwerwer",
//   "block": "",
//   "building": "15",
//   "flat": "35"
// },
// "productList": [
//   "5f1021fbc7a15c871d735f48",
//    "5f154f156a4df46aa14dc526"]}
// ).then(data => console.log(data.data.id));

// ! >>> Users >>>


const button = document.querySelector('.button')
button.addEventListener('click', event => {
  // apiUsers.geAllUsers().then(data => console.log(data.data));;
});



// services.addFavorite('5f154f156a4df46aa14dc526');
// =========
