import apiProducts from "../api/products/apiProducts";
import globeUserData from "../userData";
import axios from "axios";
import apiUsers from "../api/users/apiUsers";
import userData from '.././userData'

import Inputmask from "inputmask";
import image6 from "../../images/profile/image6.png";
import {
  refs
} from "../components/refs";
import {
  createSingleCardMarkup
} from "../sale/cardModule";
//
// apiAuth.getCurrentUser()   role: "ADMIN"
//
// const userData = {
//   name: "admin",
//   email: "admin@gmail.com",
//   password: "qwerty321",
//   role: "ADMIN",
// };

import {
  categoriesListMarkup,
  categoriesListMarkupAddListeners,
} from '../category/category-markup';




const forms = {
  infoForm: {
    name: "",
    surname: "",
    tel: "",
    email: "",
  },
  passwordForm: {
    password: "",
    confirmPassword: "",
  },
  addressForm: {
    country: "",
    city: "",
    place: "",
    street: "",
    block: "",
    building: "",
    flat: "",
  },
  advertisementForm: {
    name: "",
    category: "",
    price: 0,
    description: "",
    images: [],
    totalQuantity: 0,
  },
};
//=============tel===========
const getTel = (value) => {
  const telResult = value.split('');
  return telResult.reduce((acc, char) => {
    if (char !== ' ' && char !== '(' && char !== ')' && char !== '-' && char !== '+') {
      acc.push(char);
    }
    return acc;
  }, []).join('')
}
//  console.log('forms :>> ', forms);
// console.log('forms :>> ', getTel(forms.infoForm.tel));
//=============tel===========

export default {
  refs: {
    curentActiveTab: "",
    sectionRef: "",
  },

  maintabsMarkup() {
    console.log(this);
    this.sectionRef = document.querySelector(".container");
    console.log("sectionRef :>> ", this.sectionRef);

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
      <button class="profile__button favourites" type="button" title="favourites">Избранное</button>
      ${
        userData.user.role === "ADMIN"
          ? `<button class="profile__button advertisement" type="button" title="advertisement">Создать
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
    const mainTabsNav = document.querySelector("#parent_profile");

    mainTabsNav.addEventListener("click", this.getMarkup);
    const favouritesBtn = document.querySelector(".favourites");
    favouritesBtn.addEventListener("click", (event) => {
      console.log("event.target :>> ", event.target);
    });


    const profileExitLink = document.querySelector('.page-control__exit');
    profileExitLink.addEventListener('click', mainMarkupFromProfile);

    function mainMarkupFromProfile() {
      refs.container.innerHTML = categoriesListMarkup();
      categoriesListMarkupAddListeners();

      //вставить слушателей для профайл табс
      pseudoProfile();
    }
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
        addInfoListener("infoForm");

        break;
      case "password":
        passwordMarkup();
        addInfoListener("passwordForm");

        break;
      case "address":
        addressFormMarkup();
        addInfoListener("addressForm");
        break;
      case "favourites":

        apiProducts.getAllProducts().then(data => getPofileTest(data.data))
          .then(response => console.log('response :>> ', response))



        favouritesFormMarkup(response)
        // favouritesFormMarkup();

        break;
      case "advertisement":
        advertisementFormMarkup();
        addInfoListener("advertisementForm");
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
                    <input type="text" name="name" value="${userData.user.name}" id="name" class="form-control" placeholder="Username"  required/>
                    <div class="helper-text-div"></div>
                    <div class="helper-text-div__info"></div>
                    
                    <label id="name-label" for="name"><em> * </em>Фамилия</label>
                    <input type="text" name="surname"  value="${userData.user.surname}" id="surname" class="form-control" placeholder="Username2"   required />
                    <div class="helper-text-div"></div>

                    <label id="email-label" for="email"><em> * </em>Email</label>
                    <input type="email" name="email" value="${userData.user.email}" id="email" class="form-control" placeholder="user@mail.com"  required />
                    <div class="helper-text-div"></div>

                    <label id="phone-number" for="phone-number"><em> * </em>Телефон</label>
                    <input type="tel" name="tel"  value="${userData.user.phone}" for="tel" id="tel" class="form-control"
                       required />
                     <div class="helper-text-div"></div>

                      </div>
                      <button type="button" id="submit" class="save-button ">
                        Сохранить
                      </button>
                </form>
          `;
  };
  forms.infoForm.email = userData.user.email
  forms.infoForm.name = userData.user.name
  forms.infoForm.surname = userData.user.surname
  forms.infoForm.tel = userData.user.phone

  const contactsBtn = document.querySelector(".contacts");
  contactsBtn.insertAdjacentHTML("afterend", infoMarkup());
  // const inputValueProfile = document.querySelectorAll('.form-control')

  // console.log('inputValueProfile :>> ', inputValueProfile.length);

  document.querySelector('.save-button').addEventListener('click', event => {
    apiUsers.changeUserInfo({
      email: forms.infoForm.email,
      name: forms.infoForm.name,
      surname: forms.infoForm.surname,
      phone: getTel(forms.infoForm.tel),
    })
  })

  setActive();
}

function passwordMarkup() {
  const passwordFormMarkup = () => {
    return `
            <form   data-form="passwordForm" name="passwordForm" action="/" id="form" class="active-form js-active-tab tabs__panel">
                  <div class="form-group">
                    <label id="name-label" for="password"><em> * </em>Пароль</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="******"
                      required />
                      <div class="helper-text-div" ></div>
            
                    <label id="name-label" for="password"><em> * </em>Подтвердите пароль</label>
                    <input type="password" name="confirmPassword" id="passwordConfirm" class="form-control" placeholder="******"
                      required />
                      <div class="helper-text-div" id="helper-text-div"></div>

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
                    <input type="text" name="country"  value="${userData.user.address.country}" class="form-control" placeholder="Страна" required />
    <div class="helper-text-div"></div>
                    <label id="name-label" for="name"><em> * </em>Регион/Область</label>
                    <input type="text" name="city"  value="${userData.user.address.city}" class="form-control" placeholder="Киевская" required />
<div class="helper-text-div"></div>
                    <label id="name-label" for="name"><em> * </em>Город</label>
                    <input type="text" name="place" value="${userData.user.address.place}" class="form-control" placeholder="Киев" autocomplete="section-blue shipping street-address" required />
    <div class="helper-text-div"></div>
                    <label id="name-label" for="name"><em> * </em>Улица</label>
                    <input type="text" name="street"  value="${userData.user.address.street}" class="form-control" placeholder="Пушкинская" autocomplete="section-blue shipping street-address" required />
    <div class="helper-text-div"></div>
                    </div>
    <div class="section-two" >
                    <label id="name-label" for="name"><em> * </em>Дом</label>
                    <input type="text" name="building" value="${userData.user.address.building}" class="form-control form-control__address" placeholder="Дом"
                     autocomplete="section-blue shipping street-address"  required />
    <div class="helper-text-div"></div>
                    <label id="name-label" for="name">Блок</label>
                    <input type="text" name="block"  value="${userData.user.address.block}"  class="form-control  form-control__address"
                      placeholder="Блок" required />
<div class="helper-text-div"></div>
                    <label id="name-label" for="name">Квартира</label>
                    <input type="text" name="flat"  value="${userData.user.address.flat}"  class="form-control  form-control__address"
                      placeholder="Квартира" required />
                  <div class="helper-text-div"></div>

                      <div class="helper-text-div"></div>
                      </div>

                  </div>
                  <button type="button" id="submit" class="save-button">
                      Сохранить
                    </button>
                </form>
            `;
  };

  forms.addressForm.country = userData.user.address.country
  forms.addressForm.city = userData.user.address.city
  forms.addressForm.place = userData.user.address.place
  forms.addressForm.street = userData.user.address.street
  forms.addressForm.block = userData.user.address.block
  forms.addressForm.building = userData.user.address.building
  forms.addressForm.flat = userData.user.address.flat


  const myAddressBtn = document.querySelector(".address");
  myAddressBtn.insertAdjacentHTML("afterend", formMarkup());

  document.querySelector('.save-button').addEventListener('click', event => {

    apiUsers.changeUserInfo({
      country: forms.addressForm.country,
      city: forms.addressForm.city,
      street: forms.addressForm.street,
      building: forms.addressForm.building,
      block: forms.addressForm.block,
      flat: forms.addressForm.flat,

    })
  })
  setActive();
}
//=======FAVOURITES=========================


export function favouritesFormMarkup(array) {
  // console.log('array :>> ', favMassive);
  const favouritesMarkup = (array) => {

    return `
          <div class="favourites-wrapper tabs__panel" id="form" data-form="favourites">
          <div class="favourites-wrapper__position">
    
                <ul class="favourites-list ">
                ${array.reduce((acc, element) => {
                  acc += profileCreateSingleCardMarkup(element);
                  return acc;
                }, "")} </ul>
                <button type="submit" id="submit" class="favorite-button save-button">
                  Купить всё
                </button>
                </div>
              </div>`;
  };
  const profileCreateSingleCardMarkup = (element) => {
    const profileRating = () => {
      let markup = "";
      let number = profileGetRandomInt(1, 6);
      for (let i = 1; i <= number; i += 1) {
        markup += `<li class="card_rating"></li>`;
      }
      return markup;
    };
    const profileGetRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    };

    const profileCardItemMarkup = (element) => {
      return `
      <li class="favourites-list__items"  data-id=${element._id} >
        <div class="card-image">
  ${
    userData.isMobile
      ? ` <img class="card_img" src="${element.images[0]}" alt="${element.name}" width="86"/>`
      : `<img class="card_img-tablet" src="${element.images[0]}" alt="${element.name}" width="149"/>`
  }
 
  </div>
      
   <button class="favourites-list__favorite-button"><span tooltip="Убрать из избранного">o</span>
   <img src="" alt="" class="item__favorite-icon">
   </button>
      <img src="${vector}" alt="img" class="item-img" width="80">
       <p class="item-name">${element.name}</p>
       <ul class="item-rate">${profileRating()}</ul>
        <div class="item-price">
        <p class="item-price__old"><s>&#x20b4;</s></p>
        <p class="item-price__new"> &#x20b4;</p>
      ${
        sale
          ? `<p class="item-price__new">${
              element.price * 1.3
            }<span> &#x20b4;</span></p>
        <p class="item-price__old">${element.price}<span> &#8372;</span></p>`
          : `<p class="item-price__old">${element.price}<span> &#8372;</span></p>`
      }
     </div>
    </li>`;
    };
    return profileCardItemMarkup(element);
  };

  const favouritesBtn = document.querySelector(".favourites");

  favouritesBtn.insertAdjacentHTML("afterend", favouritesMarkup(array));


  setActive();
}
//=======FAVOURITES=========================

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
  const btnAddProduct = document.querySelector(".js-active-tab-advertisement");
  btnAddProduct.addEventListener("click", addProduct);

  // const optin = document.querySelector('.js__option')
  // optin.insertAdjacentHTML('beforeend', chooseCategory());

  //! ===============================================
}

function setActive() {
  const formRef = document.querySelector("#form");
  return formRef.setAttribute("data-active", "true");
}

function deleteActive() {
  const activePanel = document.querySelector('#form[data-active="true"]');
  activePanel.removeAttribute("data-active");

  const parent = document.querySelector("#parent_profile");
  const child = document.querySelector("#form");
  parent.removeChild(child);
}

// function getInfo(event) {
//   let key = event.target.closest('[data-form]').dataset.form;
//   forms[key][event.target.name] = event.target.value;

//   forms[key][event.target] = event.target;
//   console.log('forms[key]', forms[key]);
//   console.log('event.target : ', event.target);
//   console.log('forms[key][event.target.name] :>> ', forms[key][event.target.name]);

// };

function addInfoListener(key) {
  const form = document.querySelector("#profile");
  // console.log(forms[key]);
  const inputForm = form.querySelector(`[data-form="${key}"]`);


  inputForm.addEventListener("input", getInfo);
  //console.log("inputForm", inputForm.dataset.form);


}
//apiUsers.getInfo();
//getCurrentUser
//apiUsers.updateUserAddress()
//changeUserInfo
// const user = {
//   country: 'USA',
//   city: 'NY',
//   place: 'Brroklyn',
//   street: 'Wall street',
//   block: '1',
//   building: '',
//   flat: '15',
//   zip: '',
// };
//! ==================== Kostya ==================
const product = {
  images: [],
  totalQuantity: 1,
  name: "",
  category: "",
  price: 0,
  description: "",
};

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

function addProduct(e) {
  console.log("e.target", e.target);
  if (e.target.nodeName === "BUTTON" && e.target.closest("[data-create]")) {
    const createBtn = e.target.closest("[data-create]").dataset.create;
    console.log("createBtn", createBtn);
    apiProducts.CreateNewProduct(product);
  } else return;
}

function getInfo(event) {
  if (event.target.name === "productPrice") {
    product.price = event.target.value;
  }
  if (event.target.name === "productName") {
    product.name = event.target.value;
  }
  if (event.target.name === "productDescription") {
    product.description = event.target.value;
  }
  if (event.target.name === "productCatygory") {
    product.category = event.target.value;
  }
  // console.log("PRODUCT", product);
  // console.log("&&&&&&&", event.target);
  // apiProducts.CreateNewProduct(product)

  //! =======================================

  let key = event.target.closest("[data-form]").dataset.form;
  forms[key][event.target.name] = event.target.value;
  // console.log("KEY", key);
  // console.log("!!!!!!", event.target.name);
  // console.log("&&&&&&&", event.target.value);

  forms[key][event.target] = event.target;
  // console.log('forms[key]', forms[key]);
  // console.log('event.target : ', event.target);
  // console.log('forms[key][event.target.name] :>> ', forms[key][event.target.name]);

  // const field = forms[key][event.target];
  // field.nextElementSibling.innerHTML = '';

  const inputNew = event.target.value.length;

  const field = event.target;
  const inputValue = event.target.value;
  const inputLength = event.target.value.length;
  const nameOfInput = field.getAttribute("name");
  const textInput = field.getAttribute("type");

  console.log("nameOfInput", nameOfInput);
  ["[object HTMLInputElement]"].value;


  //^[a-zA-Zа-яА-Я0-9_]*$
  ///[^a-zа-яё ]/iu;
  // const onlyLettersRegEx = /^(?=.*[А-Я][а-яё\s]+|(?=.*[A-Z][a-z\s]+))$/iu;
  //=====text validation ====
  const onlyLetAndSymbolRegEx = /^(?=.*[A-ZА-Я])[a-zA-Zа-яА-Я_ -]*$/;
  const numbersRegEx = /^[a-zA-Zа-яА-Я0-9_/-]*$/;
  const zipRegEx = /^[0-9_/-]*$/;
  //const onlyLettersRegEx = /^[а-яё\s]+|(?=.*[A-Z])[a-z\s]+$/iu;

  if (nameOfInput === "name") {
    inputLength > 1 &&
      inputLength < 35 &&
      inputValue.match(onlyLetAndSymbolRegEx) ?
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = "#109b17")) :
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите имя, отчество </span>`),
        (field.style.outlineColor = "#FF8A9D"));
  } else if (nameOfInput === "surname") {
    inputLength < 35 &&
      inputLength > 1 &&
      inputValue.match(onlyLetAndSymbolRegEx) ?
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = "#109b17")) :
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите фамилию</span>`),
        (field.style.outlineColor = "#FF8A9D"));
  } else if (nameOfInput === "email") {
    const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
    nameOfInput === "email" && inputValue.match(regExEmail) ?
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = "#109b17")) :
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Неверный адрес почты</span>`),
        (field.style.outlineColor = "#FF8A9D"));
  } else if (nameOfInput === "tel") {
    let selector = document.querySelector('input[type="tel"]');

    let im = new Inputmask("+38 (999) 999-99-99");
    im.mask(selector);
    inputLength > 18 ?
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = "#109b17")) :
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите номер телефона</span>`),
        (field.style.outlineColor = "#FF8A9D"));

    // console.log('inputValueProfile.Length :>> ', inputValueProfile.length);
    const inputValueProfile = document.querySelectorAll('.helper-text-valid');
    inputValueProfile.length === 4 ?
      document.querySelector('.save-button').classList.add('save-button__valid') :
      document.querySelector('.save-button').classList.remove('save-button__valid')



  } else if (nameOfInput === "password") {
    nameOfInput === "password" && inputLength > 5 ?
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = "#109b17")) :
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid"><small>Пароль должен содержать не менее 6 символов</small></span>`),
        (field.style.outlineColor = "#FF8A9D"));
  } else if (nameOfInput === "confirmPassword") {
    let password = document.querySelector('[name="password"]').value;
    let confirmPassword = document.querySelector('[name="confirmPassword"]')
      .value;
    const errorDiv = document.querySelector("#helper-text-div");
    console.log("errorDiv :>> ", errorDiv);

    password === confirmPassword ?
      ((errorDiv.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = "#109b17")) :
      ((errorDiv.innerHTML = `<span class="helper-text-invalid"><small>Подтвердите пароль</small></span>`),
        (field.style.outlineColor = "#FF8A9D"));
    const inputValueProfile = document.querySelectorAll('.helper-text-valid');
    inputValueProfile.length === 2 ?
      document.querySelector('.save-button').classList.add('save-button__valid') :
      document.querySelector('.save-button').classList.remove('save-button__valid')
  } else if (
    nameOfInput === "country" ||
    nameOfInput === "city" ||
    nameOfInput === "place" ||
    nameOfInput === "street"
  ) {
    inputLength > 2 &&
      inputLength < 35 &&
      inputValue.match(onlyLetAndSymbolRegEx) ?
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = "#109b17")) :
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите данные</span>`),
        (field.style.outlineColor = "#FF8A9D"));
  } else if (
    nameOfInput === "building" ||
    nameOfInput === "block" ||
    nameOfInput === "flat"
  ) {
    inputLength > 0 && inputLength < 9 && inputValue.match(numbersRegEx) ?
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = "#109b17")) :
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите данные</span>`),
        (field.style.outlineColor = "#FF8A9D"));
    const inputValueProfile = document.querySelectorAll('.helper-text-valid');
    inputValueProfile.length >= 5 ?
      document.querySelector('.save-button').classList.add('save-button__valid') :
      document.querySelector('.save-button').classList.remove('save-button__valid')
    //======= address==========
  } else if (nameOfInput === "postIndex") {
    inputLength === 5 && inputValue.match(zipRegEx) ?
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-valid"></span>`),
        (field.style.outlineColor = "#109b17")) :
      ((field.nextElementSibling.innerHTML = `<span class="helper-text-invalid">Введите 5 цифр индекса</span>`),
        (field.style.outlineColor = "#FF8A9D"));
    // } else if (inputForm.dataset.form === 'favourites') {
    //console.log('key :>> ', event.target.dataset.form);



  }
  console.log('forms :>> ', forms);
}

//============ Favourites==========

//=======


// apiProducts.getAllProducts();




// apiUsers.addFavorite('5f253901dd556c0017610f5c');

// function profileGetFavourites() {

//   apiUsers.getCurrentUser().then(data => profileGetProducts(data));

// }
// profileGetFavourites();

// function profileGetProducts(favourites) {
//   // console.log('array :>> ', array.data);
//   // initialActProfile().then(data => console.log(data))
//   const response = axios.get(
//     'https://goit-store.herokuapp.com/products',

//   );

//   // console.log(favourites);
//   console.log(response);
//   // profileFindProduct(response)

// }

// function profileFindProduct(favourites, products) {
//   console.log(favourites)
//   console.log(products)

// }
//======================
const favMassive = [];

const favouritesId = ['5f257c74dd556c0017611105', '5f253901dd556c0017610f5c', '5f256443dd556c0017611101']

export function getPofileTest(arr) {
  console.log('arr :>> ', arr);
  const profileFavIdList = arr;

  for (const profileFav of favouritesId) {

    const profileOneFav = profileFavIdList.find(elem => {
      elem._id === profileFav ? favMassive.push(elem) : null

    })
  }
  console.log(favMassive);

  return favMassive;

}
