import axios from 'axios';

export default {
  async GetAllOrders() {
    axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
    try {
      const response = await axios.get('https://goit-store.herokuapp.com/orders');

      return response;
    } catch (err) {
      throw new Error(err);
    }
  },

  async createNewOrder(newOrder) {
    axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
    try {
      const response = await axios.post('https://goit-store.herokuapp.com/orders', newOrder);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  },
};
