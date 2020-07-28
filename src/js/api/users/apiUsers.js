import axios from 'axios';
axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTkyNjI0MiwiZXhwIjoxNTk2MDEyNjQyfQ.AiTPvTcz8gSizZbqAchpW8cMbFDrIq_vN7v52tDfCjY';

export default {
  async geAllUsers() {
    try {
      const response = await axios.get('https://goit-store.herokuapp.com/orders');
      console.log(response);
      return response
    } catch (err) {
      throw new Error(err);
    }

  },

  validToken() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTkyNjI0MiwiZXhwIjoxNTk2MDEyNjQyfQ.AiTPvTcz8gSizZbqAchpW8cMbFDrIq_vN7v52tDfCjY';
    return token;
  },

  async addFavorite(id) {
    try {
      // let config = {
      //   headers: {
      //     'Authorization': 'Bearer ' + this.validToken()
      //   }
      // }
      // console.log(config.headers['Authorization'])
      // await axios.post('http://localhost:8000/api/v1/get_token_payloads', config);

      axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTkyNjI0MiwiZXhwIjoxNTk2MDEyNjQyfQ.AiTPvTcz8gSizZbqAchpW8cMbFDrIq_vN7v52tDfCjY';
      const response = await axios.get(`https://goit-store.herokuapp.com/users/addFavoriteProduct/${id}`);
      console.log(response)

    } catch (err) {
      throw new Error(err);
    }
  },

  async removeFavoriteProduct(id) {},

}
