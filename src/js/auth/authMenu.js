import { modalModule } from '../components/modalModule/modalModule';
import { authForm } from '../auth/authForm';
import apiAuth from '../api/auth/apiAuth';
let authFormListeners = '';
const userValue = {
  email: '',
  password: '',
};

const userRegisterValue = {
  name: '',
  email: '',
  password: '',
};

export const authFn = function () {
  if (localStorage.getItem('info')) {
    modalModule(authMenuMarkUp, authMenuMarkUpListener);
  } else {
    modalModule(authForm, authMenuMarkUpListener);
    authFormListeners = document.querySelector('.authForm');
    authFormListeners.addEventListener('submit', e => {
      e.preventDefault();
      console.log(e.currentTarget[3]);
      if (e.currentTarget[3]) {
        userValue.email = e.currentTarget[1].value;
        userValue.password = e.currentTarget[2].value;
        console.log(userValue);
        apiAuth.login(userValue);
        e.currentTarget.reset();
      } else {
        userRegisterValue.name = e.currentTarget[0].value;
        userRegisterValue.email = e.currentTarget[1].value;
        userRegisterValue.password = e.currentTarget[2].value;
        apiAuth.register(userRegisterValue);
      }
    });
  }
};

let listenPrivateAccount = '';
const authMenuMarkUp = function () {
  return `
    <div class="auth-menu">
    <h4 class="user-name"></h4>
    <ul class="auth-menu__list">
      <li class="auth-menu__list_item" class="privateAccount">Личный кабинет</li>
      <li class="auth-menu__list_item" class="favorites">Избранное</li>
      <li class="auth-menu__list_item" class="createAd">Создать объявление</li>
    </ul>
    <p class="auth-menu__exit" class="exit">Выход</p>
  </div>
  `;
};

const authMenuMarkUpListener = function () {
  listenPrivateAccount = document.querySelector('.auth-menu__list');
};

// authMenuMarkUpFn() {
//     modalModule(this.authMenuMarkUp, this.authMenuMarkUpListener)
// }
