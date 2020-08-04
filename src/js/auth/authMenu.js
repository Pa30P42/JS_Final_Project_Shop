import { modalModule } from '../components/modalModule/modalModule';
import { authForm } from '../auth/authForm';
import apiAuth from '../api/auth/apiAuth';
import apiUsers from '../api/users/apiUsers';
import profile from '../profile/profileMarkups';

let authFormListeners = '';
let listenPrivateAccount = '';
let loginAccount = '';
let userName = '';
const userValue = {
  email: '',
  password: '',
};

const modalContainer = document.querySelector('.modalModule');

const privateMenu = function (e) {
  const dataway = e.target.classList;
  if (dataway.contains('privateAccount')) {
    modalContainer.innerHTML = '';
    document.body.style.overflow = 'auto';
  }
  if (dataway.contains('favoritesAccount')) {
    modalContainer.innerHTML = '';
    document.body.style.overflow = 'auto';
  }
  if (dataway.contains('createAdAccount')) {
    modalContainer.innerHTML = '';
    document.body.style.overflow = 'auto';
  }
  if (dataway.contains('exitAccount')) {
    localStorage.removeItem('info');
    modalContainer.innerHTML = '';
    document.body.style.overflow = 'auto';
  }

  console.dir(dataway);
};

export const authFn = function () {
  document.body.style.overflow = 'hidden';
  if (localStorage.getItem('info')) {
    modalModule(authMenuMarkUp, authMenuMarkUpListener);

    loginAccount = document.querySelector('.auth-menu');
    loginAccount.addEventListener('click', privateMenu);

    const pseudoRef = document.querySelector('.privateAccount');
    pseudoRef.addEventListener('click', profile.maintabsMarkup.bind(profile));
  } else {
    modalModule(authForm, authMenuMarkUpListener);
    authFormListeners = document.querySelector('.authForm');
    authFormListeners.addEventListener('click', e => {
      e.preventDefault();
      document.body.style.backgroundColor = 'red';
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

function getName() {
  if (localStorage.getItem('info')) {
    apiUsers.getCurrentUser().then(response => {
      getUserName(response.data);
    });
  }
}

function getUserName(data) {
  userName = data.name;
  console.log('userName', data.name);
}

getName();

const authMenuMarkUp = function () {
  return `
    <div class="auth-menu">
    <h4 class="user-name"> ${userName}
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
