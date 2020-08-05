import axios from 'axios';

//Информация для пользования Апи
// В файле где будете использовать функции из данной Апи, с импортируйте обьект по примеру.import apiAuth from './js/api/auth/apiAuth';
// Далее пройдите по функциям выбрав вам нужную. для запуска напишите apiAuth.(имя функции которую хоите вставить)
// Если в функцию нужен импут, то сложите его по закоментированному примеру в самой функции

export default {
  usersUrl: 'https://goit-store.herokuapp.com/users',
  getUserInfoUrl: 'https://goit-store.herokuapp.com/users/currentUser',
  getUserByIdUrl: 'https://goit-store.herokuapp.com/users/getById/',
  changePasswordUrl: 'https://goit-store.herokuapp.com/users/changePassword',
  updateAddressUrl: 'https://goit-store.herokuapp.com/users/updateAddress',
  addFavoriteUrl: 'https://goit-store.herokuapp.com/users/addFavoriteProduct/',
  deleteFavoriteUrl: 'https://goit-store.herokuapp.com/users/removeFavoriteProduct/',
  // should get a prod id

  //   {
  //     "email": "olysik@gmail.com",
  //     "password": "olysik34"
  // }
  async addFavorite(id) {
    try {
      // console.log(JSON.parse(localStorage.getItem('info')).token);
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const response = await axios.get(`${this.addFavoriteUrl}${id}`);
      return response;
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
  async deleteFavorite(id) {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const response = await axios.delete(`${this.deleteFavoriteUrl}${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
  async getInfo() {
    try {
      const response = await axios.get(this.usersUrl);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
  async changeUserInfo(info) {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const user = info;
      // const user = { email: 'cheeseburger555555@gmail.com' };
      const response = await axios.patch(this.usersUrl, user);
      console.log(response);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },

  async updateUserAddress(info) {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const user = info;
      // const user = {
      //   country: 'USA',
      //   city: 'NY',
      //   place: 'Brroklyn',
      //   street: 'Wall street',
      //   block: '1',
      //   building: '',
      //   flat: '15',
      //   zip: '',
      // };
      const response = await axios.patch(this.updateAddressUrl, user);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
  async changeUserPassword(info) {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const newPassword = info;
      // const newPassword = {
      //   password: 'qwerty123',
      //   confirmPassword: 'qwerty123',
      // };
      const response = await axios.patch(this.changePasswordUrl, newPassword);
      // console.log(response);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
  async getCurrentUser() {
    if (localStorage.getItem('info')) {
      try {
        axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
        const response = await axios.get(this.getUserInfoUrl);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        // throw error;
      }
    } else return;
  },
  async getUserById(id) {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const response = await axios.get(`${this.getUserByIdUrl}${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
  async getUserInfo() {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const response = await axios.get(this.getUserInfoUrl);
      const currentId = response.data._id;
      console.log(currentId);
      return currentId;
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
};
