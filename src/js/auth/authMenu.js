import { modalModule } from '../components/modalModule/modalModule';
import { authForm } from '../auth/authForm';
import apiAuth from '../api/auth/apiAuth';
import apiUsers from '../api/users/apiUsers';
import { pseudoProfile } from '../profile/profileTabs';

let authFormListeners = '';
const userValue = {
  email: '',
  password: '',
};

const modalContainer = document.querySelector('.modalModule');
let loginAccount = '';

const privateMenu = function (e) {
  const dataway = e.target.classList;
  if (dataway.contains('privateAccount')) {
    // pseudoProfile();
  }
  if (dataway.contains('favoritesAccount')) {
  }
  if (dataway.contains('createAdAccount')) {
  }
  if (dataway.contains('exitAccount')) {
    
  }

  console.dir(dataway);
};

export const authFn = function () {
  if (localStorage.getItem('info')) {
    modalModule(authMenuMarkUp, authMenuMarkUpListener);
    loginAccount = document.querySelector('.auth-menu');
    loginAccount.addEventListener('click', privateMenu);
  } else {
    modalModule(authForm, authMenuMarkUpListener);
    authFormListeners = document.querySelector('.authForm');
    authFormListeners.addEventListener('click', e => {
      e.preventDefault();
      if (e.target === e.currentTarget[2]) {
        userValue.email = e.currentTarget[0].value;
        userValue.password = e.currentTarget[1].value;
        apiAuth.login(userValue);
        e.currentTarget.reset();
        modalContainer.innerHTML = '';
      }
      if (e.target === e.currentTarget[3]) {
        userValue.email = e.currentTarget[0].value;
        userValue.password = e.currentTarget[1].value;
        apiAuth.register(userValue);
        e.currentTarget.reset();
      }
    });
  }
};

// const userName = apiUsers.getCurrentUser().then(response => {
//   return response.data.name;
// });

let listenPrivateAccount = '';
const authMenuMarkUp = function () {
  return `
    <div class="auth-menu">
    <h4 class="user-name">Username: ${apiUsers
      .getCurrentUser()
      .then(response => {
        return response.data.name;
      })}
</h4 >
    <ul class="auth-menu__list">
      <li class="auth-menu__list_item privateAccount" date-way="privateaccount"> Личный кабинет</li>
      <li class="auth-menu__list_item favoritesAccount" date-way="privatefavorites"> Избранное</li>
      <li class="auth-menu__list_item createAdAccount" date-way="createad"> Создать объявление</li>
    </ul>
    <p class="auth-menu__exit exitAccount" date-way="exit"> Выход</p>
  </div>
  `;
};

const authMenuMarkUpListener = function () {
  listenPrivateAccount = document.querySelector('.auth-menu__list');
};
