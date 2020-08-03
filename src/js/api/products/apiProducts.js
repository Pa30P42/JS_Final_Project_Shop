import chooseCategory from '../../profile/profileMarkups';
import { getAppliances } from './services';
import axios from 'axios';
import userData from '../../userData';

axios.defaults.headers['Authorization'] = JSON.parse(
  localStorage.getItem('info'),
);

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
    if (userData.categoriesItems.length > 0) {
      return userData.categoriesItems;
    } else {
      try {
        const response = await axios.get(
          'https://goit-store.herokuapp.com/products/getCategories',
        );

        userData.categoriesItems = [...response.data.categories];

        // console.log('user', userData.categoriesItems);
        // chooseCategory(userData.categoriesItems)
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

      userData.countOfProducts = [...response.data.countOfProducts];

      console.log('response', userData.countOfProducts);
      // chooseCategory(userData.categoriesItems)
      return response.data.countOfProducts;
    } catch (err) {
      throw new Error(err);
    }
  },

  async getAllProducts() {
    if (userData.categoriesItems.length > 0) {
      return userData.categoriesItems;
    } else {
      try {
        const response = await axios.get(
          'https://goit-store.herokuapp.com/products',
        );
        return response;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  async CreateNewProduct(product) {
    try {
      const response = await axios.post(
        'https://goit-store.herokuapp.com/products',
        product,
      );
      return response;
    } catch (err) {
      throw new Error(err);
    }
  },

  async searchProductsbyName(inputSearch) {
    try {
      const dataName = await axios.get(
        `https://goit-store.herokuapp.com/products?search=${inputSearch}`,
      );

      // console.log(dataName);
      return dataName;
    } catch (err) {
      throw new Error(err);
    }
  },

  async searchProductsbyCategory(inputSearch) {
    try {
      const dataCategory = await axios.get(
        `https://goit-store.herokuapp.com/products?search=&category=${inputSearch}`,
      );
      // console.log(dataCategory);
      return dataCategory;
    } catch (err) {
      throw new Error(err);
    }
  },

  async searchProductsbyCategoryAndName(name, category) {
    try {
      const dataCategoryAndName = await axios.get(
        `https://goit-store.herokuapp.com/products?search=${name}&category=${category}`,
      );
      return dataCategoryAndName;
    } catch (err) {
      throw new Error(err);
    }
  },

  async getProductsWithPagination(PerPage, page = 1, category) {
    console.log('PerPage', PerPage);
    console.log('page', page);
    console.log('category', category);
    try {
      const response = await axios.get(
        `https://goit-store.herokuapp.com/products?itemsPerPage=${PerPage}&page=${page}&category=${category}`,
      );
      // console.log(response);

      return response;
    } catch (err) {
      throw new Error(err);
    }
  },
};
