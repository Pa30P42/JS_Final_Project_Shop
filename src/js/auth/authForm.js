import { refs } from '../components/refs.js';

const user = {
  email: '${}',
  password: '',
};

export const authForm = () => {
  return `
  <form name="authForm" class="authForm" >
  <input 
  type="text"
  name="name"
  class="authUserName"
  />

    <input 
    type="email"
    name="email"
    class="authFormEmail" required placeholder="Email"/>

    <input
    type="password"
    name="password"
    class="authFormPassword" required placeholder="Password"/>


    
    <button 
    type="submit" 
    class="signIn" 
    data-signin="sign"
    >Войти</button>

    <button 
    type="submit" 
    class="signUp" 
    data-signup="sign" 
    >Регистрация</button>
  </form>
    `;
};

// const authFormListeners = document.forms.name.authForm
