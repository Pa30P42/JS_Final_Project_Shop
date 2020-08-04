import axios from 'axios';
import apiUsers from '../users/apiUsers';
import userData from '../../userData'
// Get All Users
//Информация для пользования Апи
// В файле где будете использовать функции из данной Апи, с импортируйте обьект по примеру.import apiAuth from './js/api/auth/apiAuth';
// Далее пройдите по функциям выбрав вам нужную. для запуска напишите apiAuth.(имя функции которую хоите вставить)
// Если в функцию нужен импут, то сложите его по закоментированному примеру в самой функции

export default {
  regUrl: 'https://goit-store.herokuapp.com/auth/registration',
  loginUrl: 'https://goit-store.herokuapp.com/auth/login',

  async register(info) {
    try {
      const user = info;
      // const user = {
      //   name: 'Ismayil',
      //   email: 'ismayilnew2@gmail.com',
      //   password: 'ismayil123123',
      // };
      const response = await axios.post(this.regUrl, user);

    } catch (error) {
      console.log(error);

    }
  },

  async login(info) {
    try {
      const user = info;
      const response = await axios.post(this.loginUrl, user);
      userData.user = {
        ...userData.user,
        ...response.data.user
      }

      axios.defaults.headers['Authorization'] = response.data.accces_token;
      const currentUser = await axios.get(apiUsers.getUserInfoUrl);


      localStorage.setItem(
        'info',
        JSON.stringify({
          token: response.data.accces_token,
          favorites: [...currentUser.data.favorites],
        }),
      );
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};
