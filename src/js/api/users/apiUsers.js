import axios from 'axios';

export default {
  usersUrl: 'https://goit-store.herokuapp.com/users',
  getUserInfoUrl: 'https://goit-store.herokuapp.com/users/currentUser',
  getUserByIdUrl: 'https://goit-store.herokuapp.com/users/getById/',
  changePasswordUrl: 'https://goit-store.herokuapp.com/users/changePassword',
  updateAddressUrl: 'https://goit-store.herokuapp.com/users/updateAddress',
  addFavoriteUrl:
    'https://goit-store.herokuapp.com/users/addFavoriteProduct/5f154f156a4df46aa14dc526',
  deleteFavoriteUrl:
    'https://goit-store.herokuapp.com/users/removeFavoriteProduct/5f154f156a4df46aa14dc526',

  async addFavorite() {
    try {
      axios.defaults.headers['Authorization'] =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
      const response = await axios.get(this.addFavoriteUrl);
      console.log(response);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
  async deleteFavorite() {
    try {
      axios.defaults.headers['Authorization'] =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
      const response = await axios.delete(this.deleteFavoriteUrl);
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
  async changeUserInfo() {
    try {
      axios.defaults.headers['Authorization'] =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
      const user = { email: 'cheeseburger555555@gmail.com' };
      const response = await axios.patch(this.usersUrl, user);
      console.log(response);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },

  async updateUserAddress() {
    try {
      axios.defaults.headers['Authorization'] =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
      const user = {
        country: 'USA',
        city: 'NY',
        place: 'Brroklyn',
        street: 'Wall street',
        block: '1',
        building: '',
        flat: '15',
        zip: '',
      };
      const response = await axios.patch(this.updateAddressUrl, user);
      console.log(response);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
  async changeUserPassword() {
    try {
      axios.defaults.headers['Authorization'] =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
      const newPassword = {
        password: 'qwerty123',
        confirmPassword: 'qwerty123',
      };
      const response = await axios.patch(this.changePasswordUrl, newPassword);
      console.log(response);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
  async getCurrentUser(token) {
    try {
      axios.defaults.headers['Authorization'] = token;
      const response = await axios.get(this.getUserInfoUrl);
      console.log(response);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
  async getUserById(id) {
    try {
      axios.defaults.headers['Authorization'] =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
      const response = await axios.get(`${this.getUserByIdUrl}${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
      // throw error;
    }
  },
  async getUserInfo() {
    try {
      axios.defaults.headers['Authorization'] =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWZlMDk0ZjlkMWZiMDAxNzQ0MGYyMiIsImlhdCI6MTU5NTk1MTIxNywiZXhwIjoxNTk2MDM3NjE3fQ.fkNST8eulZySCYzg-vVOYBs-Ircia1yN-lHY8M82daE';
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
