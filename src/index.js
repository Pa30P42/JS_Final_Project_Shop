import './sass/main.scss';

import './js/category/category-markup';
import {
  containerHandler
} from './js/container/container';

import apiProducts from './js/api/products/apiProducts';
import apiOrders from './js/api/orders/apiOrders';
import apiUsers from './js/api/users/apiUsers';

import userData from './js/userData';


const addFavoriteUrl =
  'https://goit-store.herokuapp.com/users/addFavoriteProduct/5f154f156a4df46aa14dc526';
const deleteFavoriteUrl =
  'https://goit-store.herokuapp.com/users/removeFavoriteProduct/5f154f156a4df46aa14dc526';
const addFavorite = async () => {
  try {
    axios.defaults.headers['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
    const response = await axios.get(addFavoriteUrl);
    console.log(response);
  } catch (error) {
    console.log(error);
    
  }
};
const deleteFavorite = async () => {
  try {
    axios.defaults.headers['Authorization'] =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
    const response = await axios.delete(deleteFavoriteUrl);
    console.log(response);\
  } catch (error) {
    console.log(error);
  
  }
};



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
// ! Все данные про всех ючеров, инфа о них, фейворитс, прошлые просмотренные и т. д
// apiUsers.geAllUsers().then(data => console.log(data.data));

// !Поиск человека по имени, емейлу или адресу
// apiUsers.changeUserEmailOrNameAddress('email": "olha11111@gmail.com').then(data => console.log(data.data));

// ! Подтверждает пароль юзера(они должны быть одинаковы)
// apiUsers.changeUserPassword({"password": "qwerty123", "confirmPassword": "qwerty123"}).then(data => alert("Успешно подтверждено"));

//! DONT WORK FAVORITE
// apiUsers.addFavorite('5f154f156a4df46aa14dc526').then(data => console.log(data.data));


// ! Ищит зареестрированого юзера по его верхнем ИД
// apiUsers.getUserById('5f210ac59e8747001767cc2c').then(data => console.log(data.data));

// ! Показывает одного текущего юзера, кооторый зареестрировался последним и сейчас залогиненый на сайте
// apiUsers.getСurrentUser().then(data => console.log(data.data));


// ! Ищет инфу об одном юзере по его ИД
// apiUsers.getUserInfo('5f1c07c110a0f5001756a477').then(data => console.log(data.data));


   // не работает    // не работает    // не работает
     // apiUsers.createOrChangeUserAdress().then(data => console.log(data.data));

//FAVORITE!!!!!!
// apiUsers.addFavoriteProduct('5f1c07c110a0f5001756a477').then(data => console.log(data.data));
// apiUsers.RemoveFavoriteProduct('5f1c07c110a0f5001756a477').then(data => console.log(data.data));



apiProducts.getCategories().then(data => console.log(data.data));

const button = document.querySelector('.button')
button.addEventListener('click', event => {
apiUsers.addFavoriteProduct('5f1c07c110a0f5001756a477').then(data => console.log(data.data));

// apiUsers.changeUserEmailOrNameAddress('email": "olha@gmail.com').then(data => console.log(data.data));

}); 



// =========
