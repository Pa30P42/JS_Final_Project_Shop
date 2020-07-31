import {
  refs
} from "../components/refs";

import profile from './profileMarkups';

export const pseudoProfile = () => {
  const pseudoRef = document.querySelector('.check');
  pseudoRef.addEventListener('click', profile.maintabsMarkup.bind(profile));

}

































// import apiAuth from './api/users/apiUsers';
//===================

// apiAuth.getUserInfo()
//==================

// export const DOM = {
//   tabsNav: document.querySelector('.tabs__nav'),
// };
//=====
// const renderProfile = async () => {

//   const response = await pseudoRef.addEventListener('click', maintabsMarkup);

//   return response;
// }
// let mainTabsNav
// const chooseNavBtn = () => {
//   mainTabsNav = document.querySelector('#parent')
//   console.log(mainTabsNav);
// }
// renderProfile().then(chooseNavBtn())


//==========================

// async function () {
//   try {
//     await doManyThings();
//   } catch (err) {
//     console.error(err);
//   }
// })();
