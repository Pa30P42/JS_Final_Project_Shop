import { refs } from '../../components/refs.js';
import apiProducts from '../../api/products/apiProducts.js';
import { createList } from '../../searchMarkUp/searchSection';
import { closeHeaderMenu } from '../../sideBar/headerSideBar';
const getSearchValue = event => {
  event.preventDefault();
  apiProducts
    .searchProductsbyName(event.target[1].value)
    .then(res => createList(res.data));
  event.target[1].value = '';
  closeHeaderMenu();
};

refs.search_sideBar.addEventListener('submit', getSearchValue);
