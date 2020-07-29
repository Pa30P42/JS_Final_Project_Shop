import './header.scss';
import sprite from './svg/vector/sprite.svg';
import sprite2 from './svg/vector/sprite2.svg';
import sprite3 from './svg/vector/sprite3.svg';
export const headerMarkUp = () => {
  return ` <header class="header">


  <div class="phone">
    <ul class="header__nav">
      <div class="logo_container">
      <li class="header__nav__input"><a class="header__logo"></a></li>
    </div>
      <div class="center_conatiner">
        <li class="header__nav__input">
          <div class="header_wrap">
            <svg class="nav__icon">
              <use href="${sprite}#icon-phone-50313-PM"></use>
            </svg>
          </div>
        </li>
        <li class="header__nav__input">
          <div class="header_wrap_search">
            <svg class="nav__icon_search">
              <use href="${sprite}#icon-search-white"></use>
            </svg>
          </div>
        </li>
        <li class="header__nav__input">
          <div class="header_wrap">
            <p class="amount_cart">0</p>
            <svg class="nav__icon">
              <use href="${sprite}#icon-SHOPPING-CART"></use>
            </svg>
          </div>
        </li>
      </div>
      <li class="header__nav__three_dots">
        <div class="header_wrap_three_dots">
          <svg class="nav__icon_three_dots">
            <use
              href="${sprite2}#icon-three-dots-svgrepo-com"
            ></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>



  <div class="tablet">
    <ul class="header__nav">
      <div class="logo_container">
        <li class="header__nav__input"><a class="header__logo"></a></li>
        <p class="logo_name" >LoGO</p>
      </div>
      <div class="center_conatiner">
        <li class="header__nav__input">
          <div class="header_wrap">
            <svg class="nav__icon">
              <use href="${sprite}#icon-phone-50313-PM"></use>
            </svg>
          </div>
        </li>
        <li class="header__nav__input">
          <div class="header_wrap_search">
            <svg class="nav__icon_search">
              <use href="${sprite}#icon-search-white"></use>
            </svg>
          </div>
        </li>
        <li class="header__nav__input">
          <div class="header_wrap">
            <p class="amount_cart">0</p>
            <svg class="nav__icon">
              <use href="${sprite}#icon-SHOPPING-CART"></use>
            </svg>
          </div>
        </li>
      </div>
      <li class="header__nav__three_dots">
        <div class="header_wrap_three_dots">
          <svg class="nav__icon_three_dots">
            <use
              href="${sprite2}#icon-three-dots-svgrepo-com"
            ></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>


  <div class="desktop">
    <ul class="header__nav">
      <div class="logo_container">
        <li class="header__nav__input"><a class="header__logo"></a></li>
        <p class="logo_name" >LoGO</p>
      </div>
      <div class="navigatiom_container">
      <div class="phone_container nav_item">
        <li class="header__nav__input">
          <div class="header_wrap">
            <svg class="nav__icon">
              <use href="${sprite}#icon-phone-50313-PM"></use>
            </svg>
          </div>
        </li>
        <h1 class="phone_number">+38(050)333-37-96</h1>
        <svg class="arrow_down_icon">
          <use href="${sprite2}#icon-caret-down"></use>
        </svg>
      </div>
      <div class="catalog_container nav_item">
      
        <h1 class="phone_number">Каталог</h1>
        <svg class="arrow_down_icon">
          <use href="${sprite2}#icon-caret-down"></use>
        </svg>
      </div>
      <div class="sale_container nav_item">
    
        <h1 class="sale_text">Sale%</h1>
      </div>
      <div class="info_container nav_item">
   
        <h1 class="info_text">Информация</h1>
        <svg class="arrow_down_icon">
          <use href="${sprite2}#icon-caret-down"></use>
        </svg>
      </div>
      <div class="contact_container nav_item">
    
        <h1 class="contact_text">Контакты</h1>
      </div>
    </div>
    <div class="icon_container">
        <li class="header__nav__input nav_icon">
          <div class="header_wrap_search">
            <svg class="nav__icon_search">
              <use href="${sprite}#icon-search-white"></use>
            </svg>
          </div>
        </li>
        <li class="header__nav__input nav_icon">
          <div class="header_wrap">
            <svg class="nav__icon">
              <use href="${sprite3}#icon-user1"></use>
            </svg>
          </div>
        </li>
        <li class="header__nav__input nav_icon">
          <div class="header_wrap">
            <p class="amount_cart">0</p>
            <svg class="nav__icon">
              <use href="${sprite}#icon-like-50313-PM"></use>
            </svg>
          </div>
        </li>
        <li class="header__nav__input nav_icon">
          <div class="header_wrap">
            <p class="amount_cart">0</p>
            <svg class="nav__icon">
              <use href="${sprite}#icon-SHOPPING-CART"></use>
            </svg>
          </div>
        </li>
      </div>
    </ul>
  </div>
 
</header>`;
};
