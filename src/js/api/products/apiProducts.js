import { getAppliances } from './services';
import axios from 'axios';
import userData from '../../userData';
export default {
  async getCategories() {
    try {
      const response = await axios.get(
        'https://goit-store.herokuapp.com/products/getCategories',
      );

      userData.categoriesItems = [...response.data.categories];
      // console.log(userData.categoriesItems)
      getAppliances(userData.categoriesItems);
      return userData.categoriesItems;
    } catch (err) {
      throw new Error(err);
    }
  },
};
