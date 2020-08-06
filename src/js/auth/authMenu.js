import { modalModule } from '../components/modalModule/modalModule';
import { authForm } from '../auth/authForm';
import apiAuth from '../api/auth/apiAuth';
import apiUsers from '../api/users/apiUsers';
import profile from '../profile/profileMarkups';
import userData from '../userData';

  
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
      if (e.target === e.currentTarget[2]) {
        userValue.email = e.currentTarget[0].value;
        userValue.password = e.currentTarget[1].value;
        apiAuth.login(userValue);
        e.currentTarget.reset();
        modalContainer.innerHTML = '';
        alert("Log in");
      }
      if (e.target === e.currentTarget[3]) {
        userValue.email = e.currentTarget[0].value;
        userValue.password = e.currentTarget[1].value;
        apiAuth.register(userValue);
        e.currentTarget.reset();
        alert("Register");
      }
      if (e.target.nodeName === "IMG") {
        modalContainer.innerHTML = "";
        document.body.style.overflow = 'auto';
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
}

getName();

export const authMenuMarkUp = function () {
  return `
    <div class="auth-menu">
    <h4 class="user-name"> ${userName}
</h4 >
    <ul class="auth-menu__list">
      <li class="auth-menu__list_item privateAccount" date-way="privateaccount"> Личный кабинет</li>
      <li class="auth-menu__list_item favoritesAccount" date-way="privatefavorites"> Избранное</li>

      ${userData.user.role === "ADMIN" ?     
      `<li class="auth-menu__list_item createAdAccount" date-way="createad"> Создать объявление</li>`
    : ""}
    </ul>
    <p class="auth-menu__exit exitAccount" date-way="exit"> Выход</p>
  </div>
  `;
};

export const authMenuMarkUpListener = function () {
  listenPrivateAccount = document.querySelector('.auth-menu__list');
};

function validateForm(e) {

  const field = event.target;
  const inputValue = event.target.value;
  const inputLength = event.target.value.length;
  const nameOfInput = field.getAttribute('name');
  // const onlyLetAndSymbolRegEx = /^(?=.*[A-ZА-Я])[a-zA-Zа-яА-Я_ -]*$/;
  // const numbersRegEx = /^[a-zA-Zа-яА-Я0-9_/-]*$/;
  // const zipRegEx = /^[0-9_/-]*$/;
  const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;


  if (nameOfInput === 'email') {
    nameOfInput === 'email' && inputValue.match(regExEmail)
      ? ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = '#109b17'))
      : ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Неверный адрес почты</span>`),
        (field.style.outlineColor = '#FF8A9D'));
  }

  if (nameOfInput === 'password') {
    nameOfInput === 'password' && inputLength > 5
      ? ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = '#109b17'))
      : ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid"><small>Пароль должен содержать не менее 6 символов</small></span>`),
        (field.style.outlineColor = '#FF8A9D'));
  }
}