import apiProducts from '../api/products/apiProducts'
import globeUserData from '../userData'
import axios from 'axios';

// import {
//   apiAuth
// } from './api/users/apiUsers';



//
// apiAuth.getCurrentUser()   role: "ADMIN"
//
// const role = "ADMIN";


const userData = {

  name: "admin",
  email: "admin@gmail.com",
  password: "qwerty321",
  role: "ADMIN",

};

import {
  refs
} from "../components/refs";

const forms = {
  infoForm: {
    name: '',
    surname: '',
    phone: '',
    email: ''
  },
  passwordForm: {
    password: '',
    confirmPassword: ''
  },
  addressForm: {
    country: '',
    city: '',
    place: '',
    street: '',
    block: '',
    building: '',
    flat: '',
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


export default {
  refs: {
    curentActiveTab: "",
    sectionRef: "",
  },




  maintabsMarkup() {
    console.log(this);
    this.sectionRef = document.querySelector(".container");
    console.log('sectionRef :>> ', this.sectionRef);

    this.sectionRef.innerHTML = "";
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
      <button class="profile__button contacts" type="button" title="contacts">Контакты</button>
      
      <button class="profile__button password" type="button" title="password">Изменить пароль</button>
      <button class="profile__button address" type="button" title="address">Мой Адрес</button>
      <button class="profile__button favorites" type="button" title="favorites">Избранное</button>
      ${(userData.role === "ADMIN")? `<button class="profile__button advertisement" type="button" title="advertisement">Создать
      объявление</button>`:``}
      
      </div>
      
      </div>
      </div>
            </section>
          `;
    };
    console.log('refs.sections :>> ', refs.sections);
    this.sectionRef.innerHTML = accountTabsMarkup();
    const mainTabsNav = document.querySelector("#parent_profile");

    console.log(mainTabsNav);
    mainTabsNav.addEventListener("click", this.getMarkup);

  },
  getMarkup(event) {

    if (event.target.nodeName !== "BUTTON") {
      console.log("Not a button");
      return;
    }
    const currentActiveBtn = document.querySelector(".active");


    if (currentActiveBtn) {
      currentActiveBtn.classList.remove("active");
      deleteActive();
    }
    const controlItem = event.target;
    controlItem.classList.add("active");



    switch (controlItem.title) {
      case "contacts":
        userInfoMarkup();
        addInfoListener('infoForm')

        break;
      case "password":
        passwordMarkup();
        addInfoListener('passwordForm')

        break;
      case "address":
        addressFormMarkup();
        addInfoListener('addressForm')
        break;
      case "favorites":
        favoritesFormMarkup();

        break;
      case "advertisement":
        advertisementFormMarkup();
        addInfoListener('advertisementForm')
        break;

      default:
        break;
    }
  },

};





function userInfoMarkup() {
  const infoMarkup = () => {
    return `
        <form name="infoForm"  data-form="infoForm" id="form" class="active-form js-active-tab tabs__panel">
                  <div class="form-group">
                    <label id="name-label" for="name"><em> * </em>Имя, Отчество</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Username"  required/>
                    <div class="helper-text-div"><span class="helper-text-valid">Successfull</span></div>

    
                    <label id="name-label" for="name"><em> * </em>Фамилия</label>
                    <input type="text" name="surname" id="surname" class="form-control" placeholder="Username2"   required />
                    <div class="helper-text-div"><span class="helper-text-invalid">Failed</span></div>

    
                    <label id="email-label" for="email"><em> * </em>Email</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="user@mail.com"  required />


                    <label id="phone-number" for="phone-number"><em> * </em>Телефон</label>
                    <input type="tel" name="phone" id="phone" class="form-control"
                      placeholder="+38 (093) 333 99 99" required />

                      
    
                      
                      </div>
                      <button type="submit" id="submit" class="save-button">
                        Сохранить
                      </button>
                </form>
          `;
  };
  const contactsBtn = document.querySelector(".contacts");
  contactsBtn.insertAdjacentHTML("afterend", infoMarkup());
  setActive();
};

function passwordMarkup() {
  const passwordFormMarkup = () => {
    return `
            <form   data-form="passwordForm" name="passwordForm" action="/" id="form" class="active-form js-active-tab tabs__panel">
                  <div class="form-group">
                    <label id="name-label" for="password"><em> * </em>Пароль</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="******"
                      required />

    
                    <label id="name-label" for="password"><em> * </em>Подтвердите пароль</label>
                    <input type="password" name="confirmPassword" id="passwordConfirm" class="form-control" placeholder="******"
                      required />

    
                      
                      </div>
                      <button type="submit" id="submit" class="save-button">
                        Сохранить
                      </button>
                </form>
            `;
  };
  const changePasswordBtn = document.querySelector(".password");
  changePasswordBtn.insertAdjacentHTML("afterend", passwordFormMarkup());
  setActive();
};

function addressFormMarkup() {
  const formMarkup = () => {
    return `
            <form name="addressForm" data-form="addressForm"
            
            id="form"
            class="  active-form js-active-tab tabs__panel" >
                  <div class="address-form-group">
                  <div class="section-one">
    
                    <label id="name-label" for="name"><em> * </em>Страна</label>
                    <input type="text" name="country"  class="form-control" placeholder="Страна" required />
    
                    <label id="name-label" for="name"><em> * </em>Регион/Область</label>
                    <input type="text" name="city"  class="form-control" placeholder="Киевская" required />

                    <label id="name-label" for="name"><em> * </em>Город</label>
                    <input type="text" name="place"  class="form-control" placeholder="Киев" autocomplete="section-blue shipping street-address" required />
    
                    <label id="name-label" for="name"><em> * </em>Улица</label>
                    <input type="text" name="street"  class="form-control" placeholder="Пушкинская" autocomplete="section-blue shipping street-address" required />
    </div>
    <div class="section-two" >
                    <label id="name-label" for="name"><em> * </em>Дом</label>
                    <input type="text" name="building"  class="form-control form-control__address" placeholder="Дом"
                     autocomplete="section-blue shipping street-address"  required />
    
                    <label id="name-label" for="name">Блок</label>
                    <input type="text" name="block"  class="form-control  form-control__address"
                      placeholder="Блок" required />

                    <label id="name-label" for="name">Квартира</label>
                    <input type="text" name="flat"  class="form-control  form-control__address"
                      placeholder="Квартира" required />
                  

    
                    <label id="name-label" for="name"><em> * </em>Почтовый индекс</label>
                    <input type="text" name="postIndex"  class="form-control  form-control__address" placeholder="00000"
                      required />
                      </div>
    
    
    
                    
    
                  </div>
                  <button type="submit" id="submit" class="save-button">
                      Сохранить
                    </button>
                </form>
            `;
  };
  const myAddressBtn = document.querySelector(".address");
  myAddressBtn.insertAdjacentHTML("afterend", formMarkup());
  setActive();
};

function favoritesFormMarkup() {
  const favoritesMarkup = () => {
    return `
          <div class="favorites-wrapper tabs__panel" id="form">
          <div class="favorites-wrapper__position">
    
                <ul class="favorites-list ">
                  <li class="favorites-list__items">
                    <button class="favorites-list__favorite-button"><span tooltip="Убрать из избранного">o</span>
                      <img src="./images/profile/heart.svg" alt="" class="item__favorite-icon">
                    </button>
    
                    <img src="./images/profile/image 6.png" alt="" class="item-img" width="80">
                    <p class="item-name">Духовой шкаф электрический</p>
                    <div class="item-rate">
                      <img src="./images/profile/circle.svg" alt="" class="item-rate__img">
                      <img src="./images/profile/circle.svg" alt="" class="item-rate__img">
                      <img src="./images/profile/circle.svg" alt="" class="item-rate__img">
                      <img src="./images/profile/circle.svg" alt="" class="item-rate__img">
                      <img src="./images/profile/circle.svg" alt="" class="item-rate__img">
                    </div>
                    <div class="item-price">
                      <p class="item-price__old"><s> 10 555 &#x20b4;</s></p>
                      <p class="item-price__new"> 13 999 &#x20b4;</p>
                    </div>
    
                  </li>
    
                  <li class="favorites-list__items">
                    <button class="favorites-list__favorite-button"><span tooltip="Убрать из избранного">o</span>
                
                      <img src="./images/profile/heart.svg" alt="" class="item__favorite-icon">
                    </button>
    
                    <img src="./images/profile/image 6.png" alt="" class="item-img" width="80">
                    <p class="item-name">Духовой шкаф электрический</p>
                    <div class="item-rate">
                      <img src="./images/profile/circle.svg" alt="" class="item-rate__img">
                      <img src="./images/profile/circle.svg" alt="" class="item-rate__img">
                      <img src="./images/profile/circle.svg" alt="" class="item-rate__img">
                      <img src="./images/profile/circle.svg" alt="" class="item-rate__img">
                      <img src="./images/profile/circle.svg" alt="" class="item-rate__img">
                    </div>
                    <div class="item-price">
                      <p class="item-price__old"><s> 10 555 &#x20b4;</s></p>
                      <p class="item-price__new"> 13 999 &#x20b4;</p>
                    </div>
    
                  </li>
    
    
    
    
                </ul>
                <button type="submit" id="submit" class="favorite-button save-button">
                  Купить всё
                </button>
                </div>
              </div>
          `;
  };
  const favoritesBtn = document.querySelector(".favorites");
  favoritesBtn.insertAdjacentHTML("afterend", favoritesMarkup());
  setActive();
};

export function advertisementFormMarkup() {
  const advertisementMarkup = () => {
    return `
        
        
        
          <form name="advertisementForm"  data-form="advertisementForm" id="form" class="active-form-advertisement js-active-tab-advertisement">
            <div class="form-group">
    
              <label  class="adv-label" for="name">Название товара</label>
              <input type="text" name="productName" id="productName" class="advertisement-inputs form-control-advertisement productName" placeholder="Название"
                required />
               

    
              <label class="adv-label"  for="name">Фото</label>
              <input type="file" id="productImage" name="productImage" class="input-photo form-control productImage" accept="image/*"
                class="form-control" required />

               

    
              <label  class="adv-label" for="name">Описание товара</label>
              <textarea style="resize:none"  name="productDescription" id="comments" class="advertisement-inputs form-control-advertisement  input-textarea productDescription"
                placeholder="Описание"></textarea>
             

    
              <label  class="adv-label" for="name">Категория товара</label>
              <select id="productCatygory" name="productCatygory" class="advertisement-inputs form-control-advertisement productCatygory" required>
              <option disabled selected value class="input-select">Выберите категорию</option>
              <option value="student">2</option>
              <option value="job">3</option>
              <option value="learner">4</option>
              <option value="preferNo">5</option>
              <option value="other">6</option>
               </select>
               

    
              <label class="adv-label"  id="name-label" for="name">Цена</label>
              <input type="text" name="productPrice" class="form-control form-control__address productPrice" placeholder="0.000 &#x20b4;"
                required />

                <label class="adv-label" id="phone-number">Телефон</label>
              <input type="tel" name="productPhone" class="form-control form-control__address productPhone"
                placeholder="+38 (093) 333 99 99" required />

              
    
    
            </div>
            <button type="submit" data-create="addProdact" id="submit" class="save-button">
              Создать
            </button>
          </form>
    `;
  };
  const advertisementBtn = document.querySelector(".advertisement");
  advertisementBtn.insertAdjacentHTML("afterend", advertisementMarkup());
  setActive();
  
  //! ============================= Kostya ==================
  const btnAddProduct = document.querySelector('.js-active-tab-advertisement')
  btnAddProduct.addEventListener('click', addProduct)

  // const optin = document.querySelector('.js__option')
  // optin.insertAdjacentHTML('beforeend', chooseCategory());

  //! ===============================================
};

function setActive() {
  const formRef = document.querySelector("#form");

  return formRef.setAttribute("data-active", "true");
  //console.log(formRef.dataset.active);
};

function deleteActive() {
  const activePanel = document.querySelector(
    '#form[data-active="true"]'
  );
  activePanel.removeAttribute("data-active");

  const parent = document.querySelector("#parent_profile");
  const child = document.querySelector("#form");
  parent.removeChild(child);
};

// function getInfo(event) {
//   let key = event.target.closest('[data-form]').dataset.form;
//   forms[key][event.target.name] = event.target.value;

//   forms[key][event.target] = event.target;
//   console.log('forms[key]', forms[key]);
//   console.log('event.target : ', event.target);
//   console.log('forms[key][event.target.name] :>> ', forms[key][event.target.name]);

// };

function addInfoListener(key) {
  const form = document.querySelector('#profile');
  // console.log(forms[key]);
  const inputForm = form.querySelector(`[data-form="${key}"]`);
  inputForm.addEventListener('input', getInfo);
  console.log('inputForm', inputForm.dataset.form);
};
//=====================VALIDATION=====CONTACTS========
// function showValidMarkup() {
//   return `<span class="helper-text-valid"></span>`;
// };

// function showInValidMarkup() {
//   return `<span class="helper-text-invalid">Failed Validation</span>`;
// };


//===========MY Functions=======



//! ==================== Kostya ==================
const product = {
  "images": [],
  "totalQuantity": 1,
  "name": "",
  "category": "",
  "price": 0,
  "description": ""
  }

// export async function wayToCategory() {
//   const response = await axios.get(
//     'https://goit-store.herokuapp.com/products/getCategories',
//   )
//   chooseCategory(response.data)
// };
// wayToCategory()



// function chooseCategory(categories) {
//   const values = Object.values(categories)
//   console.log(values);
// // console.log(valueCategories);
//   // console.log(values);
//   const arrValues = values[0]
//   return arrValues.reduce((acc, value) => {
//     acc += `
//     <option value="${value.name}">${value.name}</option>
//     `
//     return acc;
//   }, '');

//   };




  function addProduct (e) {
  console.log("e.target", e.target);
  if ((e.target.nodeName === "BUTTON")  && e.target.closest('[data-create]')) {
    const createBtn = e.target.closest('[data-create]').dataset.create
    console.log("createBtn", createBtn);
    apiProducts.CreateNewProduct(product)
  } else return
  }
  

function getInfo(event) {
 if (event.target.name === "productPrice") {
    product.price = event.target.value
}
 if (event.target.name === "productName") {
  product.name = event.target.value
}
 if (event.target.name === "productDescription") {
  product.description = event.target.value
}
 if (event.target.name === "productCatygory") {
  product.category = event.target.value
}
console.log("PRODUCT", product);
console.log("&&&&&&&", event.target);
// apiProducts.CreateNewProduct(product)


//! =======================================

  let key = event.target.closest('[data-form]').dataset.form;
  forms[key][event.target.name] = event.target.value;
  // console.log("KEY", key);
  // console.log("!!!!!!", event.target.name);
  // console.log("&&&&&&&", event.target.value);

  forms[key][event.target] = event.target;
  // console.log('forms[key]', forms[key]);
  // console.log('event.target : ', event.target);
  // console.log('forms[key][event.target.name] :>> ', forms[key][event.target.name]);

  const inputValue = forms[key][event.target.name];
  const field = forms[key][event.target];
  // field.nextElementSibling.innerHTML = '';

  const inputNew = event.target.value.length;


  console.log('field', field);
  const nameOfInput = field.getAttribute('name');

  //&& (inputNew > 35) && (inputNew < 6) && (inputNew.match(regEx))
  let regEx = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
  //((!inputValue)) ? field.nextElementSibling.insertAdjacentHTML('beforeend', showValidMarkup()): field.nextElementSibling.insertAdjacentHTML('beforeend', showInValidMarkup());

  // ((!inputValue)) ? field.nextElementSibling.innerHTML = showValidMarkup(): field.nextElementSibling.innerHTML = showInValidMarkup();
  // console.log('field.nextElementSibling :>> ', field.nextElementSibling);






};
