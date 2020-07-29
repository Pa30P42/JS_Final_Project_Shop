import {
  getAppliances
} from './services'
import axios from 'axios';
import userData from '../../userData'

axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTkyNjI0MiwiZXhwIjoxNTk2MDEyNjQyfQ.AiTPvTcz8gSizZbqAchpW8cMbFDrIq_vN7v52tDfCjY';

export default {
  // async checkData(key) {
  //   if(userData[key].length){

  //   }
  // }

  async getCategories() {
    if(userData.categoriesItems.length > 0){
      return userData.categoriesItems
    } else{
    try {
      const response = await axios.get('https://goit-store.herokuapp.com/products/getCategories');

      userData.categoriesItems = [...response.data.categories];
      console.log("user", userData.categoriesItems)

      getAppliances(userData.categoriesItems);
      return userData.categoriesItems;

    } catch (err) {
      throw new Error(err);
    }
  }
  },

  async getAllProducts() {
    if(userData.categoriesItems.length > 0){
      return userData.categoriesItems
    } else{
    try {
      const response = await axios.get('https://goit-store.herokuapp.com/orders');
      return response

    } catch (err) {
      throw new Error(err);
    }
  }
  },

  async CreateNewProduct(product) {
    // !==didn`t work
    try {
      const response = await axios.post('https://goit-store.herokuapp.com/products', product);
      console.log(response)
      return response

    } catch (err) {
      throw new Error(err);
    }
  },

  async searchProducts(inputSearch) {
    // нужна функция которая будет отслеживать какой запрос запускать
    try {
      const dataName = await axios.get(`https://goit-store.herokuapp.com/products?search=${inputSearch}`);
      // не ищет через категории!!!!!!!!!!!!!!!!!!!!!!!!
      const dataCategory = await axios.get('https://goit-store.herokuapp.com/products?search=category=tools');
      // https://goit-store.herokuapp.com/products?search=&category=tools такой запрос ищет по категориям даже без нейма,
      // но если нейм правельній а категория нет - то не работает
      const dataCategoryAndName = await axios.get(`https://goit-store.herokuapp.com/products?search=${inputSearch}&category=tools`);

      console.log(dataName)
      console.log(dataCategory)
      console.log(dataCategoryAndName)

      return dataName
    } catch (err) {
      throw new Error(err);
    }
  },


  async getProductsWithPagination(PerPage, page = 1, category) {
    try {
      const response = await axios.get(`https://goit-store.herokuapp.com/products?itemsPerPage=${PerPage}&page=${page}&category=${category}`);
      console.log(response)

      return response
    } catch (err) {
      throw new Error(err);
    }
  },

}
