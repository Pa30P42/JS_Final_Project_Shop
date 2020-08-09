import apiProducts from '../api/products/apiProducts';
import globeUserData from '../userData';
import axios from 'axios';
import { addNewProductCard, addAdvListeners, getNewADV, previewImg, chengeImg } from '../newADV/newAdv';
import apiUsers from '../api/users/apiUsers';
import userData from '.././userData';

import Inputmask from 'inputmask';
import image6 from '../../images/profile/image6.png';
import { refs } from '../components/refs';
import { createSingleCardMarkup } from '../sale/cardModule';
import vector from '../../images/sale/Vector.svg';
import { initialAction } from '../../index';
import SliderMI from '../components/sliderMI/sliderMI';

import productCard from '../adv/productCard';

import { addProductsToCart, showCart } from '../components/cart/cart';

import { removeItem } from '../auth/authMenu';

import { selectImg } from '../sale/saleSection';

import { categoriesListMarkup, categoriesListMarkupAddListeners } from '../category/category-markup';

export const setFavouritesCount = () => {
  const headerNavLike = document.querySelectorAll('header .counter_like-items');
  const likeCounters = Array.from(headerNavLike);

  const localUserFavorites = JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites;
  const result = localStorage.getItem('user-data')
    ? localUserFavorites
    : localStorage.getItem('favorites__')
    ? [...JSON.parse(localStorage.getItem('favorites__'))]
    : [];

  const totalLikeCount = result.length;
  likeCounters.forEach(counter => {
    counter.textContent = totalLikeCount;
  });
};

const clearFavouritesCount = () => {
  const headerNavLike = document.querySelector('header .counter_like-items');
  headerNavLike.textContent = 0;
};

const forms = {
  infoForm: {
    name: '',
    surname: '',
    tel: '',
    email: '',
  },
  passwordForm: {
    password: '',
    confirmPassword: '',
  },
  addressForm: {
    country: '',
    city: '',
    place: '',
    street: '',
    block: '',
    building: '',
    flat: '',
    // zip: ""
  },
  advertisementForm: {
    name: '',
    category: '',
    price: 0,
    description: '',
    images: [],
    totalQuantity: 0,
  },
};
//=============tel===========
const getTel = value => {
  const telResult = value.split('');
  return telResult
    .reduce((acc, char) => {
      if (char !== ' ' && char !== '(' && char !== ')' && char !== '-' && char !== '+') {
        acc.push(char);
      }
      return acc;
    }, [])
    .join('');
};

//=============tel===========

export default {
  refs: {
    curentActiveTab: '',
    sectionRef: '',
  },

  maintabsMarkup() {
    this.sectionRef = document.querySelector('.sections');
    this.sectionRef.innerHTML = '';
    const accountTabsMarkup = () => {
      return ` 
      <section class="profile tabs__panel"  id="profile">
      <div class="container-tabs">
      
      <div class="page-control__wrapper">
      <a href="#" class="page-control__home">Главная</a>
      <a href="#" class="page-control__exit">Выход</a>
      </div>
      
      <h2 class="profile__title">Учетная запись</h2>
      <div id="tabs-1" class="profile-wrapper">
  
      <div class="profile__buttons-wrapper tabs__nav" id="parent_profile" >
      <button class="profile__button contacts" type="button" title="contacts" data-action="tabsManager">Контакты</button>
      
      <button class="profile__button password" type="button" title="password" data-action="tabsManager">Изменить пароль</button>
      <button class="profile__button address" type="button" title="address" data-action="tabsManager" >Мой Адрес</button>
      <button class="profile__button favourites" type="button" title="favourites" data-action="tabsManager" >Избранное</button>
      ${
        userData.user.role === 'ADMIN'
          ? `<button class="profile__button advertisement" type="button" title="advertisement"  data-action="tabsManager" >Создать
      объявление</button>`
          : ``
      }
      </div>
      </div>
      </div>
            </section>
          `;
    };

    this.sectionRef.innerHTML = accountTabsMarkup();
    const mainTabsNav = document.querySelector('#parent_profile');
    mainTabsNav.addEventListener('click', this.getMarkup);

    //=========link  Выход ==============
    const profileExitLink = document.querySelector('.page-control__exit');
    profileExitLink.addEventListener('click', exitFromAccount);

    function exitFromAccount() {
      localStorage.removeItem('info');
      initialAction();
      clearFavouritesCount();
    }
    //=========link  Главная ==============
    const profileHomeLink = document.querySelector('.page-control__home');
    profileHomeLink.addEventListener('click', initialAction);
  },

  getMarkup(event) {
    if (event.target.dataset.action !== 'tabsManager') {
      return;
    }
    const currentActiveBtn = document.querySelector('.active');

    if (currentActiveBtn) {
      currentActiveBtn.classList.remove('active');
      deleteActive();
    }
    const controlItem = event.target;
    controlItem.classList.add('active');

    switch (controlItem.title) {
      case 'contacts':
        userInfoMarkup();
        addInfoListener('infoForm');

        break;
      case 'password':
        passwordMarkup();
        addInfoListener('passwordForm');

        break;
      case 'address':
        addressFormMarkup();
        addInfoListener('addressForm');
        break;
      case 'favourites':
        const localUserFavorites = JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites;
        const result = localStorage.getItem('user-data')
          ? localUserFavorites
          : localStorage.getItem('favorites__')
          ? [...JSON.parse(localStorage.getItem('favorites__'))]
          : [];

        result.length === 0 ? profileFavErrorMarkup() : favouritesFormMarkup(result);

        setFavouritesCount();

        break;
      case 'advertisement':
        advertisementFormMarkup();
        addInfoListener('advertisementForm');
        const refs = {
          newAdvInput: document.querySelector('.add__product'),
        };
        refs.newAdvInput.addEventListener('input', getNewADV);
        refs.newAdvInput.addEventListener('input', previewImg);

        addAdvListeners('.addnewproduct__wrapper');
        break;

      default:
        break;
    }
  },
};

export function profileFavErrorMarkup() {
  const profileFavEmpty = () => {
    return `
     <div class="favourites-wrapper tabs__panel" id="form" data-form="favourites">

          <div class="profile-favourites-empty">
              <div class="profile-favourites-empty_top">
                 <span class="profile-favourites-empty__text">Вы еще не добавили ни одного  продукта в <big>"Избранное</big>"</span>
                </div>
              </div>
          </div>
            `;
  };
  const favouritesBtn = document.querySelector('.favourites');
  favouritesBtn.insertAdjacentHTML('afterend', profileFavEmpty());

  setActive();
}

function userInfoMarkup() {
  const infoMarkup = () => {
    return `
        <form name="infoForm"  data-form="infoForm" id="form" class="active-form js-active-tab tabs__panel">
                  <div class="form-group">
                    <label id="name-label" for="name"><em> * </em>Имя, Отчество</label>
                    <input type="text" name="name" value="${
                      userData.user.name ? userData.user.name : ''
                    }" id="name" class="form-control" placeholder="Username"  required/>
                    <div class="helper-text-div"></div>
                    <div class="helper-text-div__info"></div>
                    
                    <label id="name-label" for="name"><em> * </em>Фамилия</label>
                    <input type="text" name="surname"  value="${
                      userData.user.surname ? userData.user.surname : ''
                    }" id="surname" class="form-control" placeholder="Username2"   required />
                    <div class="helper-text-div"></div>

                    <label id="email-label" for="email"><em> * </em>Email</label>
                    <input type="email" name="email" value="${
                      userData.user.email ? userData.user.email : ''
                    }" id="email" class="form-control" placeholder="user@mail.com"  required />
                    <div class="helper-text-div"></div>

                    <label id="phone-number" for="phone-number"><em> * </em>Телефон</label>
                    <input type="tel" name="tel"  value="${
                      userData.user.phone ? userData.user.phone : ''
                    }" for="tel" id="tel" class="form-control"
                       required />
                     <div class="helper-text-div"></div>

                      </div>
                      <button type="button" id="submit" class="save-button ">
                        Сохранить
                      </button>
                </form>
          `;
  };
  forms.infoForm = {
    ...userData.user,
  };

  const contactsBtn = document.querySelector('.contacts');
  contactsBtn.insertAdjacentHTML('afterend', infoMarkup());

  document.querySelector('.save-button').addEventListener('click', event => {
    apiUsers
      .changeUserInfo({
        email: forms.infoForm.email,
        name: forms.infoForm.name,
        surname: forms.infoForm.surname,
        phone: getTel(forms.infoForm.tel),
      })
      .then(() => {
        userData.user = {
          ...userData.user,
          ...forms.infoForm,
        };
      });
  });

  setActive();
}

function passwordMarkup() {
  const passwordFormMarkup = () => {
    return `
            <form   data-form="passwordForm" name="passwordForm" action="/" id="form" class="active-form js-active-tab tabs__panel">
                  <div class="form-group">
                    <label id="name-label" for="password"><em> * </em>Пароль</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="******"
                      required autocomplete="new-password" / >
                      <div class="helper-text-div" ></div>
            
                    <label id="name-label" for="password"><em> * </em>Подтвердите пароль</label>
                    <input type="password" name="confirmPassword" id="passwordConfirm" class="form-control" placeholder="******"
                      required autocomplete="new-password" />
                      <div class="helper-text-div" id="helper-text-div"></div>

                      </div>
                      <button type="button" id="submit" class="save-button">
                        Сохранить
                      </button>
                </form>
            `;
  };
  const changePasswordBtn = document.querySelector('.password');
  changePasswordBtn.insertAdjacentHTML('afterend', passwordFormMarkup());

  document.querySelector('.save-button').addEventListener('click', event => {
    apiUsers.changeUserPassword({
      password: forms.passwordForm.password,
      confirmPassword: forms.passwordForm.confirmPassword,
    });
  });
  setActive();
}

function addressFormMarkup() {
  const formMarkup = () => {
    return `
            <form name="addressForm" data-form="addressForm"
            
            id="form"
            class="  active-form js-active-tab tabs__panel" >
                  <div class="address-form-group">
                  <div class="section-one">
    
                    <label id="name-label" for="name"><em> * </em>Страна</label>
                    <input type="text" name="country"  value="${
                      forms.addressForm.country ? forms.addressForm.country : ''
                    }" class="form-control" placeholder="Страна" required />
    <div class="helper-text-div"></div>
                    <label id="name-label" for="name"><em> * </em>Регион/Область</label>
                    <input type="text" name="city"  value="${
                      forms.addressForm.city ? forms.addressForm.city : ''
                    }" class="form-control" placeholder="Киевская" required />
<div class="helper-text-div"></div>
                    <label id="name-label" for="name"><em> * </em>Город</label>
                    <input type="text" name="place" value="${
                      forms.addressForm.place ? forms.addressForm.place : ''
                    }" class="form-control" placeholder="Киев" autocomplete="section-blue shipping street-address" required />
    <div class="helper-text-div"></div>
                    <label id="name-label" for="name"><em> * </em>Улица</label>
                    <input type="text" name="street"  value="${
                      forms.addressForm.street ? forms.addressForm.street : ''
                    }" class="form-control" placeholder="Пушкинская" autocomplete="section-blue shipping street-address" required />
    <div class="helper-text-div"></div>
                    </div>
    <div class="section-two" >
                    <label id="name-label" for="name"><em> * </em>Дом</label>
                    <input type="text" name="building" value="${
                      forms.addressForm.building ? forms.addressForm.building : ''
                    }" class="form-control form-control__address" placeholder="Дом"
                     autocomplete="section-blue shipping street-address"  required />
    <div class="helper-text-div"></div>
                    <label id="name-label" for="name">Блок</label>
                    <input type="text" name="block"  value="${
                      forms.addressForm.block ? forms.addressForm.block : ''
                    }"  class="form-control  form-control__address"
                      placeholder="Блок" required />
<div class="helper-text-div"></div>
                    <label id="name-label" for="name">Квартира</label>
                    <input type="text" name="flat"  value="${
                      forms.addressForm.flat ? forms.addressForm.flat : ''
                    }"  class="form-control  form-control__address"
                      placeholder="Квартира" required />
                  <div class="helper-text-div"></div>
                   
                      </div>

                  </div>
                  <button type="button" id="submit" class="save-button">
                      Сохранить
                    </button>
                </form>
            `;
  };
  forms.addressForm = {
    ...userData.user.address,
  };

  const myAddressBtn = document.querySelector('.address');
  myAddressBtn.insertAdjacentHTML('afterend', formMarkup());

  document.querySelector('.save-button').addEventListener('click', event => {
    apiUsers
      .updateUserAddress({
        country: forms.addressForm.country,
        city: forms.addressForm.city,
        place: forms.addressForm.place,
        street: forms.addressForm.street,
        building: forms.addressForm.building,
        block: forms.addressForm.block,
        flat: forms.addressForm.flat,
        zip: '',
      })
      .then(() => {
        userData.user.address = {
          ...userData.user.address,
          ...forms.addressForm,
        };
      });
  });
  setActive();
}
//=======FAVOURITES=========================

let profileSliderInstances = [];

//==================
export function favouritesFormMarkup(array) {
  function favouritesMarkup(array) {
    return `
          <div class="favourites-wrapper__position" id="form" data-form="favourites">
          
    
                <ul class="favourites-list">
                ${array.reduce((acc, element) => {
                  acc += createSingleCardMarkup(element);
                  return acc;
                }, '')} </ul>
                <button type="submit" id="submit" class="favorite-button save-button">
                  Купить всё
                </button>
                
              </div>`;
  }

  const favouritesBtn = document.querySelector('.favourites');
  favouritesBtn.insertAdjacentHTML('afterend', favouritesMarkup(array));
  //==============slider=================

  if (profileSliderInstances.length) {
    profileSliderInstances.forEach(instance => instance.removeListeners());
  }
  profileSliderInstances = [];
  const profileSliderNew = new SliderMI('.favourites-wrapper__position', {
    step: 1,
    isNavs: true,
    isPagination: true,
  });
  profileSliderInstances.push(profileSliderNew);

  //==============slider=================

  const profileFavoritesLi = document.querySelectorAll('.card_item-sale');

  for (let i = 0; i < profileFavoritesLi.length; i += 1) {
    profileFavoritesLi[0].addEventListener('click', renderIntoBigCard);
    profileFavoritesLi[i].addEventListener('click', renderIntoBigCard);
    profileFavoritesLi[i].addEventListener('click', selectImg);

    const renderIntoBigCard = (e, items) => {
      items = userData.user.favorites;

      if (e.target.nodeName === 'UL') return;
      if (!e.target.dataset.favorite) {
        const id = e.target.closest('[data-id]').dataset.id;
        const product = items.find(item => item._id === id);
        productCard(product);
      }
    };

    // ============= добавить в корзину=============
    const favProfileBuyBtn = document.querySelector('.favorite-button');
    favProfileBuyBtn.addEventListener('click', fromprofiltoCart);

    function fromprofiltoCart() {
      const localUserFavorites = JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites;
      const result = localStorage.getItem('user-data')
        ? localUserFavorites
        : localStorage.getItem('favorites__')
        ? [...JSON.parse(localStorage.getItem('favorites__'))]
        : [];
      addProductsToCart(result);
      showCart();
    }
    // ============= добавить в корзину=============

    setActive();
  }
}

export function advertisementFormMarkup() {
  const advertisementMarkup = () => {
    return `
        
          <form name="advertisementForm"  data-form="advertisementForm" id="form" class="active-form-advertisement js-active-tab-advertisement">
            <div class="form-group">
    
              <label  class="adv-label" for="name">Название товара</label>
              <input type="text" name="productName" id="productName" class="advertisement-inputs form-control-advertisement productName" placeholder="Название"
                required />
               

              <p class="newadv__description">Фото</p>
            <div class="addnewproduct__wrapper">
              ${addNewProductCard()}
              </div>

              <label  class="adv-label" for="name">Описание товара</label>
              <textarea style="resize:none"  name="productDescription" id="comments" class="advertisement-inputs form-control-advertisement  input-textarea productDescription"
                placeholder="Описание"></textarea>
             
              <label  class="adv-label" for="name">Категория товара</label>
              <select id="productCatygory" name="productCatygory" class="advertisement-inputs form-control-advertisement productCatygory" required>
              <option disabled selected value="choose__categorie" class="input-select">Выберите категорию</option>
              <option value="refrigerators">Холодильники</option>
              <option value="washing_machines">Стиральные машины</option>
              <option value="dishwashers">Посудомоечные машины</option>
              <option value="сookers">Кухонные плиты</option>
              <option value="freezers">Морозильные камеры</option>
              <option value="drying_machines">Сушильные машины</option>
              <option value="built_in_ovens">Встраиваемые духовые шкафы</option>
              <option value="built_in_hobs">Встраиваемые варочные поверхности</option>
              <option value="cooker_hoods">Кухонные вытяжки</option>
              <option value="food_waste_disposers">Измельчители пищевых отходов</option>
              <option value="Accessories_for_vbt">Аксессуары к вбт</option>
              <option value="coffee_machines">Кофемашины</option>
              <option value="multicooker">Мультиварки</option>
              <option value="microwave_ovens">Печи СВЧ</option>
              <option value="blenders">Блендеры</option>
              <option value="grills">Грили</option>
              <option value="accessories_for_kitchen_appliances">Аксессуары для кухонной техники</option>
              <option value="other_small_equipment">Прочая мелкая техника</option>
              <option value="vacuum_cleaners">Пылесосы</option>
              <option value="robot_vacuum_cleaners">Роботы-пылесосы</option>
              <option value="irons">Утюги</option>
              <option value="sewing_equipment_and_accessories">Швейная техника и аксессуары</option>
              <option value="steam_cleaners">Пароочистители</option>
              <option value="accessories_for_home_care_and_clothing_products">Аксессуары к товарам по уходу за домом и одеждой</option>
              <option value="sale">Распродажа</option>
              <option value="new">Новые поступления</option>
               </select>
               
              <label class="adv-label"  id="name-label" for="name">Цена</label>
              <input type="text" name="productPrice" class="form-control form-control__address productPrice" placeholder="0.000 &#x20b4;"
                required />
    
    
            </div>
            <button type="button" data-create="addProdact" id="submit" class="save-button">
              Создать
            </button>
          </form>
    `;
  };
  const advertisementBtn = document.querySelector('.advertisement');
  advertisementBtn.insertAdjacentHTML('afterend', advertisementMarkup());

  setActive();

  //! ============================= Kostya ==================
  const btnAddProduct = document.querySelector('.js-active-tab-advertisement');
  const addImage = document.querySelector('.js-active-tab-advertisement');
  btnAddProduct.addEventListener('click', addProduct);

  addImage.productImageFirst.addEventListener('input', createbaseFirst);
  addImage.productImageSecond.addEventListener('input', createbaseSecond);
  addImage.productImageThird.addEventListener('input', createbaseThird);
  addImage.productImageFourth.addEventListener('input', createbaseFourth);
  addImage.productImageFifth.addEventListener('input', createbaseFifth);
  addImage.productImageSixth.addEventListener('input', createbaseSixth);

  function createbaseFirst() {
    const element = addImage.productImageFirst;
    toDataUrl(element).then(data => {
      product.images = [...product.images, ...data];
    });
  }

  function createbaseSecond() {
    const element = addImage.productImageSecond;
    toDataUrl(element).then(data => {
      product.images = [...product.images, ...data];
    });
  }

  function createbaseThird() {
    const element = addImage.productImageThird;
    toDataUrl(element).then(data => {
      product.images = [...product.images, ...data];
    });
  }

  function createbaseFourth() {
    const element = addImage.productImageFourth;
    toDataUrl(element).then(data => {
      product.images = [...product.images, ...data];
    });
  }

  function createbaseFifth() {
    const element = addImage.productImageFifth;
    toDataUrl(element).then(data => {
      product.images = [...product.images, ...data];
    });
  }

  function createbaseSixth() {
    const element = addImage.productImageSixth;
    toDataUrl(element).then(data => {
      product.images = [...product.images, ...data];
    });
  }

  //! ===============================================
}

function setActive() {
  const formRef = document.querySelector('#form');
  return formRef.setAttribute('data-active', 'true');
}

function deleteActive() {
  const activePanel = document.querySelector('#form[data-active="true"]');
  activePanel.removeAttribute('data-active');

  const parent = document.querySelector('#parent_profile');
  const child = document.querySelector('#form');
  parent.removeChild(child);
}

function addInfoListener(key) {
  const form = document.querySelector('#profile');
  const inputForm = form.querySelector(`[data-form="${key}"]`);

  inputForm.addEventListener('input', getInfo);
}

//! ==================== Kostya ==================
const product = {
  images: [],
  totalQuantity: 10,
  name: '',
  category: '',
  price: 0,
  description: '',
};

function toDataUrl(element) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
}

function addProduct(e) {
  if (e.target.nodeName === 'BUTTON' && e.target.closest('[data-create]')) {
    const createBtn = e.target.closest('[data-create]').dataset.create;

    apiProducts.CreateNewProduct(product);
  }
}

function getInfo(event) {
  if (event.target.name === 'productPrice') {
    product.price = event.target.value;
  }
  if (event.target.name === 'productName') {
    product.name = event.target.value;
  }
  if (event.target.name === 'productDescription') {
    product.description = event.target.value;
  }
  if (event.target.name === 'productCatygory') {
    product.category = event.target.value;
  }

  //! =======================================
  let key = event.target.closest('[data-form]').dataset.form;
  forms[key][event.target.name] = event.target.value;

  forms[key][event.target] = event.target;

  const inputNew = event.target.value.length;
  const field = event.target; // сам инпут
  const inputValue = event.target.value;
  const inputLength = event.target.value.length;
  const nameOfInput = field.getAttribute('name');
  const textInput = field.getAttribute('type');

  ['[object HTMLInputElement]'].value;

  //^[a-zA-Zа-яА-Я0-9_]*$
  ///[^a-zа-яё ]/iu;
  // const onlyLettersRegEx = /^(?=.*[А-Я][а-яё\s]+|(?=.*[A-Z][a-z\s]+))$/iu;
  //const onlyLettersRegEx = /^[а-яё\s]+|(?=.*[A-Z])[a-z\s]+$/iu;
  //=====text validation ====
  const onlyLetAndSymbolRegEx = /^(?=.*[A-ZА-Я])[a-zA-Zа-яА-Я_ -]*$/;
  const numbersRegEx = /^[a-zA-Zа-яА-Я0-9_/-]*$/;
  const zipRegEx = /^[0-9_/-]*$/;
  const passwordRedEx = /(?=.*[a-zA-Zа-яёА-Я])/;

  if (nameOfInput === 'name') {
    inputLength > 1 && inputLength < 35 && inputValue.match(onlyLetAndSymbolRegEx)
      ? ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = '#109b17'))
      : ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите имя, отчество </span>`),
        (field.style.outlineColor = '#FF8A9D'));
  } else if (nameOfInput === 'surname') {
    inputLength < 35 && inputLength > 1 && inputValue.match(onlyLetAndSymbolRegEx)
      ? ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = '#109b17'))
      : ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите фамилию</span>`),
        (field.style.outlineColor = '#FF8A9D'));
  } else if (nameOfInput === 'email') {
    const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
    nameOfInput === 'email' && inputValue.match(regExEmail)
      ? ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = '#109b17'))
      : ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Неверный адрес почты</span>`),
        (field.style.outlineColor = '#FF8A9D'));
  } else if (nameOfInput === 'tel') {
    let selector = document.querySelector('input[type="tel"]');

    let im = new Inputmask('+38 (999) 999-99-99');
    im.mask(selector);
    inputLength > 18
      ? ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = '#109b17'))
      : ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите номер телефона</span>`),
        (field.style.outlineColor = '#FF8A9D'));

    const inputValueProfile = document.querySelectorAll('.helper-text-valid');
    if (inputValueProfile.length === 4) {
      document.querySelector('.save-button').classList.add('save-button__valid');
    }
  } else if (nameOfInput === 'password') {
    nameOfInput === 'password' && inputLength > 7 && inputValue.match(passwordRedEx)
      ? ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = '#109b17'))
      : ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid"><small>Пароль должен содержать не менее 8 символов</small></span>`),
        (field.style.outlineColor = '#FF8A9D'));
  } else if (nameOfInput === 'confirmPassword') {
    let password = document.querySelector('[name="password"]').value;
    let confirmPassword = document.querySelector('[name="confirmPassword"]').value;
    const errorDiv = document.querySelector('#helper-text-div');

    password === confirmPassword
      ? ((errorDiv.innerHTML = `<span class="helper-text-valid"></span>`), (field.style.outlineColor = '#109b17'))
      : ((errorDiv.innerHTML = `<span class="helper-text-invalid"><small>Подтвердите пароль</small></span>`),
        (field.style.outlineColor = '#FF8A9D'));
    const inputValueProfile = document.querySelectorAll('.helper-text-valid');

    if (inputValueProfile.length === 2) {
      document.querySelector('.save-button').classList.add('save-button__valid');
    }
  } else if (
    nameOfInput === 'country' ||
    nameOfInput === 'city' ||
    nameOfInput === 'place' ||
    nameOfInput === 'street'
  ) {
    inputLength > 2 && inputLength < 35 && inputValue.match(onlyLetAndSymbolRegEx)
      ? ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = '#109b17'))
      : ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите данные</span>`),
        (field.style.outlineColor = '#FF8A9D'));
  } else if (nameOfInput === 'building' || nameOfInput === 'block' || nameOfInput === 'flat') {
    inputLength > 0 && inputLength < 9 && inputValue.match(numbersRegEx)
      ? ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = '#109b17'))
      : ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите данные</span>`),
        (field.style.outlineColor = '#FF8A9D'));
    const inputValueProfile = document.querySelectorAll('.helper-text-valid');
    if (inputValueProfile.length >= 5) {
      document.querySelector('.save-button').classList.add('save-button__valid');
    }

    //======= address==========
  } else if (nameOfInput === 'postIndex') {
    inputLength === 5 && inputValue.match(zipRegEx)
      ? ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = '#109b17'))
      : ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите 5 цифр индекса</span>`),
        (field.style.outlineColor = '#FF8A9D'));
  }
}
