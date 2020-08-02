export const authFormMarkUp = () => {
  return `
  <form name="authForm" class="authForm" >
    <input type="email" name="email" class="authFormEmail" required placeholder="Email"/>
    <input type="password" name="password" class="authFormPassword"required placeholder="Password"/>
    <button type="submit" class="signIn">Войти</button>
    <button type="submit"class="signUp">Регистрация</button>
  </form>
    `;
};
