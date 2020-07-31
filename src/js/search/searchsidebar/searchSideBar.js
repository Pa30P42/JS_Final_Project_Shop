import { refs } from '../../components/refs.js';
import apiProducts from '../../api/products/apiProducts.js';

const getSearchValue = event => {
  event.preventDefault();
  apiProducts
    .searchProductsbyName(event.target[1].value)
    .then(res => console.log(res.data));
  event.target[1].value = '';
};

refs.search_sideBar.addEventListener('submit', getSearchValue);
