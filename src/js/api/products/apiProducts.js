import {
  getAppliances
} from './services'
import axios from 'axios';

import userData from '../../userData'


axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTkyNjI0MiwiZXhwIjoxNTk2MDEyNjQyfQ.AiTPvTcz8gSizZbqAchpW8cMbFDrIq_vN7v52tDfCjY';

export default {

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
      const response = await axios.get('https://goit-store.herokuapp.com/products');
      return response

    } catch (err) {
      throw new Error(err);
    }
  }
  },

  async CreateNewProduct(product) {
    
    try {
      const response = await axios.post('https://goit-store.herokuapp.com/products', product);
      return response

    } catch (err) {
      throw new Error(err);
    }
  },

  async searchProductsbyName(inputSearch) {
    
    try {
      const dataName = await axios.get(`https://goit-store.herokuapp.com/products?search=${inputSearch}`);
    
      console.log(dataName)
      return dataName
    } catch (err) {
      throw new Error(err);
    }
  },

  async searchProductsbyCategory(inputSearch) {
    
    try {
      const dataCategory = await axios.get(`https://goit-store.herokuapp.com/products?search=category=${inputSearch}`);
      console.log(dataCategory)
      return dataCategory
    } catch (err) {
      throw new Error(err);
    }
  },

  async searchProductsbyCategoryAndName(name, category) {
    
    try {
      const dataCategoryAndName = await axios.get(`https://goit-store.herokuapp.com/products?search=${name}&category=${category}`); 
      return dataCategoryAndName
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
