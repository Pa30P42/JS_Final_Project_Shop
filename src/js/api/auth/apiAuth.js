import axios from 'axios';
import apiUsers from '../users/apiUsers';
import userData from '../../userData';
import { modalModule } from '../../components/modalModule/modalModule';

const errorMarkup = error => {
  return `
    <div style="padding: 40px; text-align: center; font-size: 26px; font-weight: bold;">
      ${error}
    </div>`;
};
const addListener = callbackClose => {
  const buttonRef = document.createElement('button');
};

export default {
  regUrl: 'https://goit-store.herokuapp.com/auth/registration',
  loginUrl: 'https://goit-store.herokuapp.com/auth/login',
  async register(info) {
    try {
      const user = info;
      const response = await axios.post(this.regUrl, user);
      modalModule(() => errorMarkup('Вы успешно зарегестрировались! '), addListener);
    } catch (error) {
      modalModule(() => errorMarkup('Введенные вами данные не являются валидными'), addListener);
    }
  },
  async login(info) {
    try {
      const user = info;
      const response = await axios.post(this.loginUrl, user);
      userData.user = {
        ...userData.user,
        ...response.data.user,
      };
      localStorage.setItem(
        'user-data',
        JSON.stringify({
          USER_DATA: [...userData.user],
          response_data_user: [...response.data.user],
        }),
      );
      axios.defaults.headers['Authorization'] = response.data.accces_token;
      const currentUser = await axios.get(apiUsers.getUserInfoUrl);
      localStorage.setItem(
        'info',
        JSON.stringify({
          token: response.data.accces_token,
          favorites: [...currentUser.data.favorites],
          user: response.data,
        }),
      );
      modalModule(() => errorMarkup('Вы успешно авторизировались!'), addListener);
    } catch (error) {
      modalModule(() => errorMarkup('Введенный вами емайл или пароль не верны'), addListener);
      throw new Error(error);
    }
  },
};
