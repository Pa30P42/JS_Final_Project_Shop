import chooseCategory from '../../profile/profileMarkups';
import { getAppliances } from './services';
import axios from 'axios';
import userData from '../../userData';

// ========= services product ==== Все катигории и продукты и залиті в ЮЗЕРДАТУ
// 1.apiProducts.getCategories().then(data => console.log(userData));

// ! >>> Products >>>
// !===== Вывод масива объектов всех продуктов / length: 4
// apiProducts.getAllProducts().then(data => console.log(data.data));

// !===== Поиск продуктов через search
// apiProducts.searchProductsbyName('mix').then(data => console.log(data.data));
// apiProducts.searchProductsbyCategory('tools').then(data => console.log(data.data));

// !===== Передача продуктов по пагинации(пайдж только 1 пока что)
// apiProducts.getProductsWithPagination(2, 1, "tools").then(data => console.log(data.data));

// !===== Добавить продукт
// apiProducts.CreateNewProduct({"images": [],
// "totalQuantity": 2,
// "name": "Wrenoholoy",
// "category": "tools",
// "price": 15,
// "description": "Good tool"}
// ).then(data => console.log(data.data));

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

      // userData.countOfProducts = [...response.data.countOfProducts];

      // console.log('response', userData.countOfProducts);
      // chooseCategory(userData.categoriesItems)
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
    axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info'));
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
      const dataName = await axios.get(
        `https://goit-store.herokuapp.com/products?search=${inputSearch}`,
      );
      return dataName;
    } catch (err) {
      throw new Error(err);
    }
  },

  async searchProductsbyCategory(inputSearch) {
    axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info'));
    try {
      const dataCategory = await axios.get(
        `https://goit-store.herokuapp.com/products?search=&category=${inputSearch}`,
      );
      return dataCategory;
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

  async getProductsWithPagination(category, page = 1, PerPage = userData.pagination.perPage) {
    console.log('category', category);
    console.log('current page', page);
    console.log('PerPage', PerPage);
    try {
      const response = await axios.get(
        `https://goit-store.herokuapp.com/products?itemsPerPage=${PerPage}&page=${page}&category=${category}`,
      );
      return response;
    } catch (err) {
      throw new Error(err);
    }
  },
};
