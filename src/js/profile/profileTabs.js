import {
  refs
} from "../components/refs";
import './profileMarkups';
import {
  maintabsMarkup,
  favoritesFormMarkup,
  addressFormMarkup,
  passwordMarkup,
  userInfoMarkup,
  advertisementFormMarkup,
}
from './profileMarkups';
import {

  deleteActive
} from './profileMarkups';

// import apiAuth from './api/users/apiUsers';
//===================

// apiAuth.getUserInfo()
//==================

// export const DOM = {
//   tabsNav: document.querySelector('.tabs__nav'),
// };

//=====
const renderProfile = async () => {
  const pseudoRef = document.querySelector('.check');
  const response = await pseudoRef.addEventListener('click', maintabsMarkup);

  return response;
}
let mainTabsNav
const chooseNavBtn = () => {
  mainTabsNav = document.querySelector('#parent')
  console.log(mainTabsNav);
}
renderProfile().then(chooseNavBtn())


//==========================

// async function () {
//   try {
//     await doManyThings();
//   } catch (err) {
//     console.error(err);
//   }
// })();
