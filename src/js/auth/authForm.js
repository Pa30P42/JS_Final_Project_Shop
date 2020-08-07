import close from '../../images/information/close-icon.svg';
import userData from '.././userData';

export const authForm = () => {
  return `
  <form name="authForm" class="authForm" >
  <p class="authorization-title">Авторизация </p> 
    <label for="email">
    <em class="authorization-star">*</em>
    <spam class="authorization-helper"> Email или телефон </spam>
    </label>

    <input 
    value="${userData.user.surname ? userData.user.surname : ''}"
    type="email"
    name="email"
    class="authFormEmail" required placeholder="Email или телефон"/>
    <div class="helper-text-div"></div>

  <label for="password">
    <em class="authorization-star">*</em>
    <spam class="authorization-helper"> Пароль </spam>
    </label>

    <input
    type="password"
    name="password"
    class="authFormPassword" required placeholder="Пароль"/>
    <div class="helper-text-div"></div>

    <button 
    type="submit" 
    class="btn__sign_in" 
    data-signin="sign"
    >Войти
    </button>

    <button 
    type="submit" 
    class="btn__sign_up" 
    data-signup="sign" 
    >Регистрация
    </button>
    
    <button type="submit"  data-wayclose="close" class="auth-close">
    &#9587;
  </button>
  </form>
    `;
};

// <img
// src="${close}"
// alt="x"
// width="20"
// />

function addInfoListenerAuth(key) {
  // e.preventDefault()
  // if (e.target.dataset.create !== “addProdact”) {
  //   return
  // }
  const inputForm = document.querySelector('.authForm');
  // const inputForm = form.querySelector(`[data-form=“${key}“]`);
  inputForm.addEventListener('input', validateForm);

  // console.log(“inputForm”, inputForm);
}

export function validateForm(event) {
  // console.log(event.target.value);
  const authField = event.target;
  const authInputValue = event.target.value;
  // const authInputLength = event.target.value.length;
  // console.log(authInputLength);
  const authNameOfInput = authField.getAttribute('name');
  // console.log(authNameOfInput);
  const passwordRedEx = /(?=.*[a-zA-Zа-яёА-Я])/;
  const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

  if (authNameOfInput === 'email') {
    authNameOfInput === 'email' && authInputValue.match(regExEmail)
      ? ((authField.nextElementSibling.innerHTML = `<span class="auth-helper-text__valid_email"></span>`),
        (authField.style.outlineColor = '#109b17'))
      : ((authField.nextElementSibling.innerHTML = `<span class="auth-helper-text__invalid_email">Неверный адрес почты</span>`),
        (authField.style.outlineColor = '#FF8A9D'));
  }
  if (authNameOfInput === 'password') {
    // console.log(authNameOfInput);
    authNameOfInput === 'password' && authInputValue.length > 7 && authInputValue.match(passwordRedEx)
      ? ((authField.nextElementSibling.innerHTML = `<span class="auth-helper-text__valid_password"></span>`),
        (authField.style.outlineColor = '#109b17'))
      : ((authField.nextElementSibling.innerHTML = `<span class="auth-helper-text__invalid_password"><small>Пароль должен содержать не менее 8 символов</small></span>`),
        (authField.style.outlineColor = '#FF8A9D'));
  }
}
