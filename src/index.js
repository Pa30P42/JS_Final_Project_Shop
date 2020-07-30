import './sass/main.scss';

import './js/category/category-markup';
import { containerHandler } from './js/container/container';
import { addNewProducts } from './js/components/new';
import services from './js/services/services';
import apiProducts from './js/api/products/apiProducts';
import userData from './js/userData';

containerHandler();
addNewProducts();
apiProducts.getCategories().then(data => console.log(userData));

// services.addFavorite('5f154f156a4df46aa14dc526');
// services.GetAllOrders();
