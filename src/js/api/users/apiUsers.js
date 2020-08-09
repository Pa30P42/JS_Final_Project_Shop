import axios from 'axios';

export default {
  usersUrl: 'https://goit-store.herokuapp.com/users',
  getUserInfoUrl: 'https://goit-store.herokuapp.com/users/currentUser',
  getUserByIdUrl: 'https://goit-store.herokuapp.com/users/getById/',
  changePasswordUrl: 'https://goit-store.herokuapp.com/users/changePassword',
  updateAddressUrl: 'https://goit-store.herokuapp.com/users/updateAddress',
  addFavoriteUrl: 'https://goit-store.herokuapp.com/users/addFavoriteProduct/',
  deleteFavoriteUrl: 'https://goit-store.herokuapp.com/users/removeFavoriteProduct/',

  async addFavorite(id) {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const response = await axios.get(`${this.addFavoriteUrl}${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteFavorite(id) {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const response = await axios.delete(`${this.deleteFavoriteUrl}${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  async getInfo() {
    try {
      const response = await axios.get(this.usersUrl);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async changeUserInfo(info) {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const user = info;
      const response = await axios.patch(this.usersUrl, user);
    } catch (error) {
      console.log(error);
    }
  },

  async updateUserAddress(info) {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const user = info;
      const response = await axios.patch(this.updateAddressUrl, user);
    } catch (error) {
      console.log(error);
    }
  },
  async changeUserPassword(info) {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const newPassword = info;
      const response = await axios.patch(this.changePasswordUrl, newPassword)
    } catch (error) {
      throw new Error(err);
    }
  },
  async getCurrentUser() {
    if (localStorage.getItem('info')) {
      try {
        axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
        const response = await axios.get(this.getUserInfoUrl);
        return response;
      } catch (error) {
        throw new Error(err);
      }
    } else return;
  },
  async getUserById(id) {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const response = await axios.get(`${this.getUserByIdUrl}${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  async getUserInfo() {
    try {
      axios.defaults.headers['Authorization'] = JSON.parse(localStorage.getItem('info')).token;
      const response = await axios.get(this.getUserInfoUrl);
      const currentId = response.data._id;
      return currentId;
    } catch (error) {
      console.log(error);
    }
  },
};
