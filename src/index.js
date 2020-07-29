import './sass/main.scss';

import './js/category/category-markup';
import { containerHandler } from './js/container/container';
import services from './js/services/services';
import apiProducts from './js/api/products/apiProducts';
import userData from './js/userData';
import './js/category/category-modal';

const initialAction = async () => {
  await apiProducts.getCategories();
  containerHandler();

  const x = 'built_in_appliances';
  console.log(
    'userData',
    userData.appliances[x].categories.map(item => item.name),
  );
};

initialAction();

// services.addFavorite('5f154f156a4df46aa14dc526');
// services.GetAllOrders();
