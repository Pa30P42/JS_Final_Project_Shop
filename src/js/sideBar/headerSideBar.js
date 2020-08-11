import { refs } from '../components/refs.js';
import {
  catalogListMarkup,
  catalogListMarkupAddListeners,
} from '../catalog/catalog';

import {
  authMenuMarkUp,
  authMenuMarkUpListener
} from '../auth/authMenu';
import { modalModule } from '../components/modalModule/modalModule';
import { authForm } from '../auth/authForm';
import { validateForm } from '../auth/authForm';
import apiAuth from '../api/auth/apiAuth';


let authFormListeners = "";
const userValue = {
  email: '',
  password: '',
};

export const headerMenu = () => {
  refs.sidebar.classList.remove('ishidden_sidebar');
  const insertCatalog = document.querySelector('.catalog__wrapper__markap');
  insertCatalog.innerHTML = catalogListMarkup();
  catalogListMarkupAddListeners();
  // ------
  if (localStorage.getItem('info')) {
    const insertAuthMenu = document.querySelector('.auth-menu__wrapper');
    insertAuthMenu.innerHTML = authMenuMarkUp();
    authMenuMarkUpListener();
  }
  else {
    modalModule(authForm, authMenuMarkUpListener);
    authFormListeners = document.querySelector('.authForm');
    authFormListeners.addEventListener('click', e => {
      e.preventDefault();
      validateForm(e);
      if (e.target === e.currentTarget[2]) {
        userValue.email = e.currentTarget[0].value;
        userValue.password = e.currentTarget[1].value;

        apiAuth.login(userValue);
        e.currentTarget.reset();
        modalContainer.innerHTML = '';
        document.body.style.overflow = 'auto';
      }

      if (e.target === e.currentTarget[3]) {
        userValue.email = e.currentTarget[0].value;
        userValue.password = e.currentTarget[1].value;
        apiAuth.register(userValue);
        e.currentTarget.reset();
        document.body.style.overflow = 'auto';
      }

      if (e.target === e.currentTarget[4]) {
        modalContainer.innerHTML = "";
        document.body.style.overflow = 'auto';
      }
    });
  };
};


export const closeHeaderMenu = () => {
  refs.sidebar.classList.add('ishidden_sidebar');
};
