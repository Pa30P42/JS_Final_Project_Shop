import chooseCategory from '../../profile/profileMarkups';
import { getAppliances } from './services';
import axios from 'axios';
import userData from '../../userData';

export default {
  async getCategories() {
    axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info'));
    if (userData.categoriesItems.length > 0) {
      return userData.categoriesItems;
    } else {
      try {
        const response = await axios.get('https://goit-store.herokuapp.com/products/getCategories');

        userData.categoriesItems = [...response.data.categories];
        getAppliances(userData.categoriesItems);
        return userData.categoriesItems;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  async getCategoryTotalCount(inputSearch) {
    try {
      const response = await axios.get(
        `https://goit-store.herokuapp.com/products/getCategories?category=${inputSearch}`,
      );
      return response.data.countOfProducts;
    } catch (err) {
      throw new Error(err);
    }
  },

  async getAllProducts() {
    if (!userData.allProducts) {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info'));
      if (userData.categoriesItems.length > 0) {
        return userData.categoriesItems;
      } else {
        try {
          const response = await axios.get('https://goit-store.herokuapp.com/products');
          userData.allProducts = [...response];
          return response;
        } catch (err) {
          throw new Error(err);
        }
      }
    } else return userData.allProducts;
  },

  async CreateNewProduct(product) {
    axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
    try {
      const response = await axios.post('https://goit-store.herokuapp.com/products', product);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  },

  async searchProductsbyName(inputSearch) {
    axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info'));
    try {
      const dataName = await axios.get(`https://goit-store.herokuapp.com/products?search=${inputSearch}`);
      return dataName;
    } catch (err) {
      throw new Error(err);
    }
  },

  async searchProductsbyCategory(inputSearch) {
    axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info'));
    try {
      const dataCategory = await axios.get(`https://goit-store.herokuapp.com/products?search=&category=${inputSearch}`);
      return dataCategory;
    } catch (err) {
      throw new Error(err);
    }
  },

  async getCountOfProducts(link) {
    axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info'));
    try {
      const countOfProducts = await axios.get(
        `https://goit-store.herokuapp.com/products/getCategories?category=${link}`,
      );
      return countOfProducts.data.countOfProducts;
    } catch (err) {
      throw new Error(err);
    }
  },

  async searchProductsbyCategoryAndName(name, category) {
    axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info'));
    try {
      const dataCategoryAndName = await axios.get(
        `https://goit-store.herokuapp.com/products?search=${name}&category=${category}`,
      );
      return dataCategoryAndName;
    } catch (err) {
      throw new Error(err);
    }
  },

  async getProductsWithPagination(
    category,
    page = userData.pagination.currentPage,
    PerPage = userData.pagination.perPage,
  ) {
    try {
      const response = await axios.get(
        `https://goit-store.herokuapp.com/products?itemsPerPage=${PerPage}&page=${page}&category=${category}`,
      );
      return response;
    } catch (err) {
      throw new Error(err);
    }
  },

  async getSearchWithPagination(search, page = userData.pagination.currentPage, PerPage = userData.pagination.perPage) {
    try {
      const response = await axios.get(
        `https://goit-store.herokuapp.com/products?itemsPerPage=${PerPage}&page=${page}&search=${search}`,
      );
      return response;
    } catch (err) {
      throw new Error(err);
    }
  },
};
