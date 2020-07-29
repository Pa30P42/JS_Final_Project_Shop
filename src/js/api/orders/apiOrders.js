import axios from 'axios';

axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTkyNjI0MiwiZXhwIjoxNTk2MDEyNjQyfQ.AiTPvTcz8gSizZbqAchpW8cMbFDrIq_vN7v52tDfCjY';

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
