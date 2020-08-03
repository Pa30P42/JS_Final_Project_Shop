const user = {
  email: '${}',
  password: '',
};

export const authForm = () => {
  return `
  <p class="Authorization-title">Авторизация </p> 
  <form name="authForm" class="authForm" >
    <label for="email">
    <em>*</em>
    Email или телефон
    </label>

    <input 
    type="email"
    name="email"
    class="authFormEmail" required placeholder="Email или телефон"/>

  <label for="password">
    <em>*</em>
    Пароль
    </label>

    <input
    type="password"
    name="password"
    class="authFormPassword" required placeholder="Пароль"/>

    <button 
    type="submit" 
    class="signIn" 
    data-signin="sign"
    >Войти
    </button>

    <button 
    type="submit" 
    class="signUp" 
    data-signup="sign" 
    >Регистрация
    </button>
  </form>
    `;
};
