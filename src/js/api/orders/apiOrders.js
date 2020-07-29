import axios from 'axios';

axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZiYzQ4MWZlOWJhMDAxN2U4NzFhYiIsImlhdCI6MTU5NjAwNzE3NywiZXhwIjoxNTk2MDkzNTc3fQ.0uy-ge7NYJF1RvVWawn5BXjAsURuZqvfgo7lTF3tXes';

export default {
  async GetAllOrders() {
    try {
      const response = await axios.get('https://goit-store.herokuapp.com/orders');
      console.log(response);
      return response
    } catch (err) {
      throw new Error(err);
    }
  },

  async createNewOrder(newOrder) {
    try {
      const response = await axios.post('https://goit-store.herokuapp.com/orders', newOrder);
      console.log(response)
      return response

    } catch (err) {
      throw new Error(err);
    }
  }
}
