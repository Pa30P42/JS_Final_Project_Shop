import './sass/main.scss';
import {
  containerHandler
} from './js/container/container';
import services from './js/services/services';
import apiProducts from './js/api/products/apiProducts'
import userData from './js/userData'

apiProducts.getCategories().then(data => console.log(userData))

// services.addFavorite('5f154f156a4df46aa14dc526');
// services.GetAllOrders();
