import {
  refs
} from "../components/refs";


export default {
  refs: {
    curentActiveTab: '',
    sectionRef: '',
  },

  setActive() {

    const formRef = this.refs.sectionRef.querySelector('#form');

    return formRef.setAttribute('data-active', 'true');
    //console.log(formRef.dataset.active);
  },
  deleteActive() {
    const activePanel = this.refs.sectionRef.querySelector('#form[data-active="true"]');
    activePanel.removeAttribute('data-active');

    const parent = sectionRef.querySelector("#parent");
    const child = sectionRef.querySelector("#form");
    parent.removeChild(child);
  },

  getMarkup(event) {
    console.log(event);
    if (event.target.nodeName !== 'BUTTON') {
      console.log('Not a button');
      return;
    }
    const currentActiveBtn = mainTabsNav.querySelector('.active');
    console.log(currentActiveBtn);

    if (currentActiveBtn) {
      currentActiveBtn.classList.remove('active');
      this.deleteActive();

    }
    const controlItem = event.target;
    controlItem.classList.add('active');

    console.log(controlItem.title);

    switch (controlItem.title) {
      case "contacts":
        userInfoMarkup();


        break;
      case "password":
        passwordMarkup();
        break;
      case "address":
        addressFormMarkup();
        break;
      case "favorites":
        favoritesFormMarkup()
        break;
      case "advertisement":
        advertisementFormMarkup();
        break;

        // default:
        //   break;
    }
  },

  maintabsMarkup() {

    console.log(this);
    this.sectionRef = document.querySelector('#profile')


    refs.sections.innerHTML = "";
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
      
      
      
                <div class="profile__buttons-wrapper tabs__nav" id="parent" >
                  <button class="profile__button contacts" type="button" title="contacts">Контакты</button>
                  <button class="profile__button password" type="button" title="password">Изменить пароль</button>
                  <button class="profile__button address" type="button" title="address">Мой Адрес</button>
                  <button class="profile__button favorites" type="button" title="favorites">Избранное</button>
                  <button class="profile__button advertisement" type="button" title="advertisement">Создать
                    объявление</button>
                </div>
      
              </div>
            </div>
            </section>
          `;

    }


    refs.sections.insertAdjacentHTML("beforeend", accountTabsMarkup());
    const mainTabsNav = document.querySelector('#parent')
    mainTabsNav.addEventListener('click', this.getMarkup)


  },
  userInfoMarkup() {
    const infoMarkup = () => {


      return `
      <form method="post" action="/" id="form" class="active-form js-active-tab tabs__panel">
                <div class="form-group">
                  <label id="name-label" for="name"><em> * </em>Имя, Отчество</label>
                  <input type="text" name="name" id="name" class="form-control" placeholder="Username" required />
  
                  <label id="name-label" for="name"><em> * </em>Фамилия</label>
                  <input type="text" name="name" id="name" class="form-control" placeholder="Username2" required />
  
  
                  <label id="email-label" for="email"><em> * </em>Email</label>
                  <input type="email" name="email" id="email" class="form-control" placeholder="user@mail.com" required />
                  <label id="phone-number" for="phone-number"><em> * </em>Телефон</label>
                  <input type="phone-number" name="phone-number" id="phone-number" class="form-control"
                    placeholder="+38 (093) 333 99 99" required />
  
                    
                    </div>
                    <button type="submit" id="submit" class="save-button">
                      Сохранить
                    </button>
              </form>
        `
    }
    const contactsBtn = document.querySelector('.contacts');
    contactsBtn.insertAdjacentHTML("afterend", infoMarkup());
    setActive();

  },
  passwordMarkup() {
    const passwordFormMarkup = () => {
      return `
          <form method="post" action="/" id="form" class="active-form js-active-tab tabs__panel">
                <div class="form-group">
                  <label id="name-label" for="password"><em> * </em>Пароль</label>
                  <input type="password" name="password" id="password" class="form-control" placeholder="******"
                    required />
  
                  <label id="name-label" for="password"><em> * </em>Подтвердите пароль</label>
                  <input type="password" name="password" id="passwordConfirm" class="form-control" placeholder="******"
                    required />
  
                    
                    </div>
                    <button type="submit" id="submit" class="save-button">
                      Сохранить
                    </button>
              </form>
          `;
    }
    const changePasswordBtn = document.querySelector('.password');
    changePasswordBtn.insertAdjacentHTML('afterend', passwordFormMarkup());
    setActive();
  },
  addressFormMarkup() {
    const formMarkup = () => {
      return `
          <form method = "post"
          action = "/"
          id="form"
          class="  active-form js-active-tab tabs__panel" >
                <div class="address-form-group">
                <div class="section-one">
  
                  <label id="name-label" for="name"><em> * </em>Имя, Отчество</label>
                  <input type="text" name="name" id="name" class="form-control" placeholder="Username" required />
  
                  <label id="name-label" for="name"><em> * </em>Фамилия</label>
                  <input type="text" name="name" id="name" class="form-control" placeholder="Username2" required />
  
                  <label id="name-label" for="name"><em> * </em>Страна</label>
                  <input type="text" name="name" id="name" class="form-control" placeholder="Украина" required />
  
                  <label id="name-label" for="name"><em> * </em>Регион/Область</label>
                  <input type="text" name="name" id="name" class="form-control" placeholder="Киевская" required />
  </div>
  <div class="section-two" >
                  <label id="name-label" for="name"><em> * </em>Город</label>
                  <input type="text" name="name" id="name" class="form-control form-control__address" placeholder="Город"
                    required />
  
                  <label id="name-label" for="name"><em> * </em>Адрес 1</label>
                  <input type="text" name="name" id="name" class="form-control  form-control__address"
                    placeholder="Улица, дом, квартира" required />
  
                  <label id="name-label" for="name"><em> * </em>Адрес 2</label>
                  <input type="text" name="name" id="name" class="form-control  form-control__address"
                    placeholder="Улица, дом, квартира" required />
  
                  <label id="name-label" for="name"><em> * </em>Почтовый индекс</label>
                  <input type="text" name="name" id="name" class="form-control  form-control__address" placeholder="00000"
                    required />
                    </div>
  
  
  
                  
  
                </div>
                <button type="submit" id="submit" class="save-button">
                    Сохранить
                  </button>
              </form>
          `
    }
    const myAddressBtn = document.querySelector('.address');
    myAddressBtn.insertAdjacentHTML('afterend', formMarkup());
    setActive();

  },
  favoritesFormMarkup() {
    const favoritesMarkup = () => {

      return `
        <div class="favorites-wrapper tabs__panel" id="form">
        <div class="favorites-wrapper__position">
  
              <ul class="favorites-list ">
                <li class="favorites-list__items">
                  <button class="favorites-list__favorite-button">
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
                  <button class="favorites-list__favorite-button">
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
        `
    }
    const favoritesBtn = document.querySelector('.favorites');
    favoritesBtn.insertAdjacentHTML('afterend', favoritesMarkup());
    setActive();
  },
  advertisementFormMarkup() {
    const advertisementMarkup = () => {
      return `
      
      
      
        <form method="post" action="/" id="form" class="active-form-advertisement js-active-tab-advertisement">
          <div class="form-group">
  
            <label  class="adv-label" for="name">Название товара</label>
            <input type="text" name="name" id="name" class="advertisement-inputs form-control-advertisement" placeholder="Название"
              required />
  
            <label class="adv-label"  for="name">Фото</label>
            <input type="file" id="img" name="img" class="input-photo form-control " accept="image/*"
              class="form-control" required />
  
            <label  class="adv-label" for="name">Описание товара</label>
            <textarea disabled  name="text" id="comments" class="advertisement-inputs form-control-advertisement  input-textarea " name="comment"
              placeholder="Описание"></textarea>
  
            <label  class="adv-label" for="name">Категория товара</label>
            <select id="dropdown" name="role" class="advertisement-inputs form-control-advertisement" required>
              <option disabled selected value class="input-select">Выберите категорию</option>
              <option value="student">2</option>
              <option value="job">3</option>
              <option value="learner">4</option>
              <option value="preferNo">5</option>
              <option value="other">6</option>
            </select>
  
            <label class="adv-label"  id="name-label" for="name">Цена</label>
            <input type="text" name="text" class="form-control form-control__address" placeholder="0.000 &#x20b4;"
              required />
  
            <label class="adv-label" id="phone-number">Телефон</label>
            <input type="tel" name="phone-number" class="form-control form-control__address"
              placeholder="+38 (093) 333 99 99" required />
  
  
  
          </div>
          <button type="submit" id="submit" class="save-button">
            Создать
          </button>
        </form>
  `
    }
    const advertisementBtn = document.querySelector('.advertisement');
    advertisementBtn.insertAdjacentHTML('afterend', advertisementMarkup());
    setActive();
  },
}




//=================================
// export {
//   maintabsMarkup,
//   favoritesFormMarkup,
//   addressFormMarkup,
//   passwordMarkup,
//   userInfoMarkup,
//   advertisementFormMarkup,
// };

// export {

//   deleteActive
// };
