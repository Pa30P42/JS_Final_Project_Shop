import {
  refs
} from "../components/refs";
import './profileMarkups';
import {
  favoritesFormMarkup,
  addressFormMarkup,
  passwordMarkup,
  userInfoMarkup
}
from './profileMarkups';
import {

  deleteActive
} from './profileMarkups';



// const name = () => {
//   console.log('name');
// }
// name();
// export default name;

export const DOM = {
  tabsNav: document.querySelector('.tabs__nav'),
  //   tabsNavItem: document.querySelector('#tabs-1 .profile__button'),
  //   panels: document.querySelector('.tabs__panel'),
  //   section: document.querySelector('section'),

};
console.log(DOM.tabsNav);
//console.log(DOM.section);
//const formRef = DOM.section.querySelector('form');
//formRef.setAttribute('data-active', 'true');
console.log(DOM);

DOM.tabsNav.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') {
    console.log('Not a button');
    return;
  }
  const currentActiveBtn = DOM.tabsNav.querySelector('.active');
  console.log(currentActiveBtn);

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('active');
    deleteActive();
    //deleteActive();
  }
  const controlItem = event.target;
  controlItem.classList.add('active');

  //panelsTitle = controlItem.title;
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
      // case "advertisement":
      //   break;

    default:
      break;
  }


})
