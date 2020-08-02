export const authMenuMarkUp = () => {
  return `
    <div class="auth-menu">
    <h4 class="user-name"></h4>
    <ul class="auth-menu__list">
      <li class="auth-menu__list_item" class="privateAccount">Личный кабинет</li>
      <li class="auth-menu__list_item" class="favorites">Избранное</li>
      <li class="auth-menu__list_item" class="createAd">Создать объявление</li>
    </ul>
    <p class="auth-menu__exit" id="exit">Выход</p>
  </div>
  `;
};
