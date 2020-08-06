import close from '../../images/information/close-icon.svg';

const authForms = {
  authForm: {
    email: '',
    password: '',
  },
};


export const authForm = () => {
  return `
  <form name="authForm" class="authForm" >
  <p class="authorization-title">Авторизация </p> 
    <label for="email">
    <em class="authorization-star">*</em>
    <spam class="authorization-helper"> Email или телефон </spam>
    </label>

    <input 
    type="email"
    name="email"
    class="authFormEmail" placeholder="Email или телефон"/>

  <label for="password">
    <em class="authorization-star">*</em>
    <spam class="authorization-helper"> Пароль </spam>
    </label>

    <input
    type="password"
    name="password"
    class="authFormPassword" placeholder="Пароль"/>

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
    
    <button type="submit"  data-wayclose="close" class="information__close">
    <img
    src="${close}"
    alt="x"
    width="20"
    />
  </button>
  </form>
    `;
};


// const authSignInBtn = document.querySelector('.btn__sign_in');
// authSignInBtn.addEventListener('click', event => {
//   apiUsers
//     .changeUserInfo({
//       email: forms.authForm.email,
//       password: forms.authForm.password,
//     })
//     .then(() => {
//       userData.user = {
//         ...userData.user,
//         ...forms.authForm,
//       };
//     });
// });


function validateForm(event) {

  const authField = event.target;
  const authInputValue = event.target.value;
  const authInputLength = event.target.value.length;
  const authNameOfInput = authField.getAttribute('name');
  const passwordRedEx = /(?=.*[a-zA-Zа-яёА-Я])/;
  const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

  if (authNameOfInput === 'email') {
    authNameOfInput === 'email' && authInputValue.match(regExEmail)
      ? ((authField.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (authField.style.outlineColor = '#109b17'))
      : ((authField.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Неверный адрес почты</span>`),
        (authField.style.outlineColor = '#FF8A9D'));
  }  else if (authNameOfInput === 'password') {
    authNameOfInput === 'password' && authInputLength > 7 && authInputValue.match(passwordRedEx)
      ? ((authField.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (authField.style.outlineColor = '#109b17'))
      : ((authField.nextElementSibling.innerHTML = `<span class="helper-text-invalid"><small>Пароль должен содержать не менее 8 символов</small></span>`),
        (authField.style.outlineColor = '#FF8A9D'));
  }
}

