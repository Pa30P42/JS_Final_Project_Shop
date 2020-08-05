import close from '../../images/information/close-icon.svg';

const user = {
  email: '${}',
  password: '',
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
    class="authFormEmail" required placeholder="Email или телефон"/>

  <label for="password">
    <em class="authorization-star">*</em>
    <spam class="authorization-helper"> Пароль </spam>
    </label>

    <input
    type="password"
    name="password"
    class="authFormPassword" required placeholder="Пароль"/>

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
    
    <button class="information__close">
    <img
    src="${close}"
    alt="x"
    width="20"
    />
  </button>
  </form>
    `;
};
