import './sass/main.scss';

import './js/category/category-markup';
import {
  containerHandler
} from './js/container/container';

import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import userData from './js/userData';






// containerHandler();
// ========= services product ==== Все катигории и продукты
// 1.apiProducts.getCategories().then(data => console.log(userData));



// ! >>> Products >>>
// !===== Вывод масива объектов всех продуктов / length: 4
// apiProducts.getAllProducts().then(data => console.log(data.data));

// !===== Поиск продуктов через search
// apiProducts.searchProducts('mix').then(data => console.log(data.data));

// !===== Передача продуктов по пагинации(пайдж только 1 или можно менять? а то с 2 не работает)
// apiProducts.getProductsWithPagination(2, 1, "tools").then(data => console.log(data.data));
// !===== Добавить продукт- не работает)
// 
// apiProducts.CreateNewProduct({"images": [],
// "totalQuantity": 2,
// "name": "Wrenoholoy",
// "category": "tools",
// "price": 15,
// "description": "Good tool"}
// ).then(data => console.log(data.data));

// * >>>> Orders >>>>
// 1*Выводит все заказы
// apiOrders.GetAllOrders().then(data => console.log(data.data));

// 2*Вывод ID новго заказа
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


 



