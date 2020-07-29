import axios from 'axios';
axios.defaults.headers['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZiYzQ4MWZlOWJhMDAxN2U4NzFhYiIsImlhdCI6MTU5NjAwNzE3NywiZXhwIjoxNTk2MDkzNTc3fQ.0uy-ge7NYJF1RvVWawn5BXjAsURuZqvfgo7lTF3tXes`;

export default {
  async geAllUsers() {
    try {
      const response = await axios.get('https://goit-store.herokuapp.com/users');
      
      return response
    } catch (err) {
      throw new Error(err);
    }
  },

  async changeUserEmailOrNameAddress(info) {
    try {
      const response = await axios.patch('https://goit-store.herokuapp.com/users', info);
      console.log(response)
      return response
    } catch (err) {
      throw new Error(err);
    }
  },

  async changeUserPassword(password) {

    try {
      const response = await axios.patch('https://goit-store.herokuapp.com/users/changePassword', password);
      console.log(response)
      return response
    } catch (err) {
      throw new Error(err);
    }
  },

  validToken() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZiYzQ4MWZlOWJhMDAxN2U4NzFhYiIsImlhdCI6MTU5NjAwNzE3NywiZXhwIjoxNTk2MDkzNTc3fQ.0uy-ge7NYJF1RvVWawn5BXjAsURuZqvfgo7lTF3tXes';
    return token;
  },

  async addFavoriteProduct(id) {
    // не работает
    try {
      // let config = {
      //   headers: {
      //     'Authorization': 'Bearer ' + this.validToken() if(userData.categoriesItems.length > 0){
      return userData.categoriesItems
    } else{
      //   }
      // }
      // console.log(config.headers['Authorization'])
      // await axios.post('http://localhost:8000/api/v1/get_token_payloads', config);

      axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZiYzQ4MWZlOWJhMDAxN2U4NzFhYiIsImlhdCI6MTU5NjAwNzE3NywiZXhwIjoxNTk2MDkzNTc3fQ.0uy-ge7NYJF1RvVWawn5BXjAsURuZqvfgo7lTF3tXes';
      const response = await axios.get(`https://goit-store.herokuapp.com/users/addFavoriteProduct/${id}`);
      console.log(response)

    } catch (err) {
      throw new Error(err);
    }
  },

  async RemoveFavoriteProduct(id) {
    // не работает
    try {
      const response = await axios.delete(`https://goit-store.herokuapp.com/users/removeFavoriteProduct/${id}`);
      console.log(response)
      return response
    } catch (err) {
      throw new Error(err);
    }
  },


  async createOrChangeUserAdress(adress) {
    console.log(adress)
    // не работает
    try {
      const response = await axios.patch(`https://goit-store.herokuapp.com/users/updateAddress`, adress);
      console.log(response)
      return response
    } catch (err) {
      throw new Error(err);
    }
  },

  async getUserInfo(id) {
    try {
      const response = await axios.get(`https://goit-store.herokuapp.com/users/getById/${id}`);
      console.log(response)
      return response
    } catch (err) {
      throw new Error(err);
    }
  },

  async  getСurrentUser() {
    try {
      const response = await axios.get(`https://goit-store.herokuapp.com/users/currentUser`);
      console.log(response)
      return response
    } catch (err) {
      throw new Error(err);
    }
  },

  async getUserById(id) {
    try {
      const response = await axios.get(`https://goit-store.herokuapp.com/users/getById/${id}`);
      console.log(response)
      return response
    } catch (err) {
      throw new Error(err);
    }
  }

}
