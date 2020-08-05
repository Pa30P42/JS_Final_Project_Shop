import './contact.scss';
import { refs } from '../components/refs.js';
import anastasia_dmv from './image/anastasia_dmv.jpg';
import Ann from './image/Ann.jpg';
import Anna from './image/Anna.jpg';
import Ismail from './image/Ismail.jpg';
import Kostya from './image/Kostya.jpg';
import Kristi from './image/Kristi.jpeg';
import Marina from './image/Marina.jpg';
import marinamel from './image/marinamel.jpg';
import Oleg from './image/Oleg.jpeg';
import Olga from './image/Olga.jpg';

export const contactMarkUp = () => {
  refs.sections.innerHTML = developersProject;
};

const developersProject = `<p data-name="name_logo" class="contactsBack" >Главная / Koнтакты</p>
<p class="title_contacts" > Koнтакты </p>

<ul class="team__list container_contact">

    <li class="team__item">
      <div class="team__item__person">
        <img
        src=${Ismail}
          alt="partner"
          width="121"
          height="121"
          class="team__item__photo"
        />
      </div>
      <div class="team__item__info">
        <p class="team__item__title">Исмаил</p>
        <p class ="contacts_name"> Гаджибейли</p>
        <p class="team__item__text">
          Team Lead, Container, Telephone triggers, Services
        </p>
      </div>
    </li>
    <li class="team__item">
      <div class="team__item__person">
        <img
        src=${Marina}
          alt="partner"
          width="121"
          height="121"
          class="team__item__photo"
        />
      </div>
      <div class="team__item__info">
        <p class="team__item__title">Марина Сергеева</p>
        <p class="team__item__text">
          Scrum master, Category, Pagination Module, Bread crumbs
        </p>
      </div>
    </li>
    <li class="team__item">
      <div class="team__item__person">
        <img
          src=${Kristi}
          alt="partner"
          width="121"
          height="121"
          class="team__item__photo"
        />
      </div>
      <div class="team__item__info">
        <p class="team__item__title">Кристина Лобанец</p>
        <p class="team__item__text">Header, Search, Developers</p>
      </div>
    </li>
    <li class="team__item">
      <div class="team__item__person">
        <img
        src=${Olga}
          alt="partner"
          width="121"
          height="121"
          class="team__item__photo"
        />
      </div>
      <div class="team__item__info">
        <p class="team__item__title">Ольга Грымчак</p>
        <p class="team__item__text">Services, Footer</p>
      </div>
    </li>
    <li class="team__item">
      <div class="team__item__person">
        <img
        src=${Kostya}
          alt="partner"
          width="121"
          height="121"
          class="team__item__photo"
        />
      </div>
      <div class="team__item__info">
        <p class="team__item__title"> Полишко</p>
        <p class ="contacts_name">Константин</p>
        <p class="team__item__text">NewADV, Catalog</p>
      </div>
    </li>
    <li class="team__item">
      <div class="team__item__person">
        <img
        src=${Anna}
          alt="partner"
          width="121"
          height="121"
          class="team__item__photo"
        />
      </div>
      <div class="team__item__info">
        <p class="team__item__title">Анна Виговская</p>
        <p class="team__item__text">Adv, Infotmation</p>
      </div>
    </li>
    <li class="team__item">
      <div class="team__item__person">
        <img
        src=${Ann}
          alt="partner"
          width="121"
          height="121"
          class="team__item__photo"
        />
      </div>
      <div class="team__item__info">
        <p class="team__item__title">Анна Горянина</p>
        <p class="team__item__text">Sale, Slider</p>
      </div>
    </li>
    <li class="team__item">
      <div class="team__item__person">
        <img
        src=${Oleg}
          alt="partner"
          width="121"
          height="121"
          class="team__item__photo"
        />
      </div>
      <div class="team__item__info">
        <p class="team__item__title">Олег Ходаковский</p>
        <p class="team__item__text">
          Modal Module, Authorization Menu, Authorization Form
        </p>
      </div>
    </li>
    <li class="team__item">
      <div class="team__item__person">
        <img
        src=${anastasia_dmv}
          alt="partner"
          width="121"
          height="121"
          class="team__item__photo"
        />
      </div>
      <div class="team__item__info">
        <p class="team__item__title">Анастасия Дмитриева</p>
        <p class="team__item__text">
          Profile, Contacts, Address, Favorites
        </p>
      </div>
    </li>
    <li class="team__item">
      <div class="team__item__person">
        <img
        src=${marinamel}
          alt="partner"
          width="121"
          height="121"
          class="team__item__photo"
        />
      </div>
      <div class="team__item__info">
        <p class="team__item__title">Марина Мелихова</p>
        <p class="team__item__text">New, Last Seen, Cart</p>
      </div>
    </li>
    </ul>`;
