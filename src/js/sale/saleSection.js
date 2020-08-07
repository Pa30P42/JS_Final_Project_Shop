// import vector_love from '../../images/sale/Vector_love.svg';
// import vector from '../../images/sale/Vector.svg';
// import { createSingleCardMarkup } from './cardModule';
// import apiUsers from '../api/users/apiUsers';

// // /* <section class="card container"></section> *

// const createListMarkup = array => {
//   return `
//    <section class="card">
//   <h2 class="card_description">Акции</h2>
//   <ul class="card_list">${array.reduce((acc, element) => {
//     acc += createSingleCardMarkup(element, 'sale');
//     return acc;
//   }, '')}</ul></section>`;
// };
// const favoritesArr = [];
// const getItem = event => {
//   if (event.target.closest('[data-id]') && event.target.nodeName === 'IMG') {
//     const id = event.target.closest('[data-id]').dataset.id;
//     console.log('id', id);
//     if (event.target.src === vector) {
//       event.target.src = vector_love;
//       favoritesArr.push(id);
//       apiUsers.addFavorite(id);

//       localStorage.setItem('favorites', JSON.stringify(favoritesArr));
//     } else if (event.target.src === vector_love) {
//       event.target.src = vector;
//       apiUsers.deleteFavorite(id);
//       console.log(favoritesArr);
//       const itemFavoriteID = favoritesArr.find(element => {
//         element === id;

//         console.log(id);
//       });
//       //   for (let arr of favoritesArr) {
//       //     if (arr !== id) {
//       //       favoritesArr = [];
//       //       favoritesArr.push(arr);
//       //     }
//       //   }
//       console.log('itemFavoriteID', itemFavoriteID);
//     }

//     // productCard(id);
//     return id; // функция Ани(id)
//   } else return;
// };

// ///

// // apiUsers.getCurrentUser();
// // apiUsers.getCurrentUser().then(data => console.log(data));

// // const cardList = document.querySelector('.card_list');
// export const createList = array => {
//   const container = document.querySelector('.sections');
//   container.innerHTML = createListMarkup(array);
//   container.addEventListener('click', getItem);
//   // cardList.addEventListener('click', getVector);

//   // cardList.addEventListener('click', getVector);
// };

// // export const getVector = event => {
// //   if (event.target.closest('[data-clickVector]') && event.target.nodeName === 'IMG') {
// //     const clickVector = event.target.closest('[data-clickVector]').dataset.clickVector;
// //     console.log('clickVector', clickVector);
// //     return clickVector;
// //   } else return;
// // };
import vector_love from '../../images/sale/Vector_love.svg';
import vector from '../../images/sale/Vector.svg';
import { createSingleCardMarkup } from '../sale/cardModule';
import apiUsers from '../api/users/apiUsers';
import userData from '../userData';

import { createPaginationMarkup } from '../pagination/pagination';
// import { refsPagination } from '../pagination/pagination';
// import { getPaginationPage } from '../pagination/pagination';
// import { getPaginationPage } from '../pagination/pagination';
import productCard from '../adv/productCard';

// /* <section class="card container"></section> *
const createListMarkup = (array, paginationMarkup, link) => {
  // console.log('array', array);
  // console.log('link', link);

  // /* <section class="card container"></section> *

  return `
   <section class="card">
  <h2 class="card_description">${link}</h2>
  <ul class="card_list">${array.reduce((acc, element) => {
    acc += createSingleCardMarkup(element, 'sale');
    return acc;
  }, '')}</ul>
  <div class="pagination_wrapper">
  ${paginationMarkup}
  </div>
  </section>`;
};

export const createList = (array, paginationMarkup, link) => {
  // const container = document.querySelector('.container');
  const container = document.querySelector('.sections');

  container.innerHTML = createListMarkup(array, paginationMarkup, link);
  container.addEventListener('click', getItem);
  // container.addEventListener('click', e => getPaginationPage(e, link));
};

// export const createList = array => {
//   const container = document.querySelector('.sections');
//   container.innerHTML = createListMarkup(array);
//   container.addEventListener('click', e => {
//     getItem(e, array);
//   });
// };

const getItem = (event, products) => {
  if (event.target.closest('[data-id]') && event.target.nodeName === 'IMG') {
    const id = event.target.closest('[data-id]').dataset.id;
    // console.log('id', id);
    if (event.target.src === vector) {
      event.target.src = vector_love;
      if (localStorage.getItem('info')) {
        const token = localStorage.getItem('info');
        const tokenParse = JSON.parse(token).token;
        if (tokenParse) {
          apiUsers.addFavorite(id).then(data => {
            apiUsers.getCurrentUser().then(response => {
              userData.user.favorites = response.data.favorites;
            });
          });
        } else {
          localStorage.setItem('favorites', JSON.stringify(favoritesArr));
        }
      }
    } else if (event.target.src === vector_love) {
      event.target.src = vector;
      apiUsers.deleteFavorite(id);
      favoritesArr.find(elem => {
        elem !== id;
        favoritesArr.push(element);
      });
    }
    // console.log(products);
    // console.log(id);
    const filteredproduct = products.find(item => item._id === id);
    // console.log(filteredproduct);
    productCard(filteredproduct);
    return id; // функция Ани(id)
  } else return;
};
