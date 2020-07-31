import { refs } from '../../components/refs.js';
import apiProducts from '../../api/products/apiProducts.js';
import sprite from '../../../images/svgHeader/sprite.svg';
export const searshForm = () => {
  return ` <div class="search">
  <div class="search__block">
  <form class='hover_search' action="submit">
    <input class="search__input" />
    <button class="search__button__phone">Искать</button>
    <button class="search__button__svg">
      <svg class="nav__icon" width="20px" height="20px">
        <use
          href="${sprite}#icon-search-white"
          class="navigation__item--icon"
        ></use>
      </svg>
    </button>
    </form>
  </div>
  </div>`;
};

export const listenersForSearch = clsmodal => {
  const hoverSearch = document.querySelector('.hover_search');

  const searchList = event => {
    event.preventDefault();

    apiProducts
      .searchProductsbyName(event.target[0].value)
      .then(res => console.log(res.data));
    event.target[0].value = '';
    clsmodal();
  };
  hoverSearch.addEventListener('submit', searchList);
};
