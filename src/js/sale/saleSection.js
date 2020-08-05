import vector_love from '../../images/sale/Vector_love.svg';
import vector from '../../images/sale/Vector.svg';
import {
  createSingleCardMarkup
} from './cardModule';
import apiUsers from '../api/users/apiUsers';
import userData from '../userData';

import { createPaginationMarkup } from '../pagination/pagination';
// import { refsPagination } from '../pagination/pagination';
// import { getPaginationPage } from '../pagination/pagination';
import { getPaginationPage } from '../pagination/pagination';
import productCard from '../adv/productCard';
import {
  addLocale
} from 'core-js';
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

// export const createList = (array, paginationMarkup, link) => {
//   const container = document.querySelector('.container');
//   // const container = document.querySelector('.sections');
//   //

//   container.innerHTML = createListMarkup(array, paginationMarkup, link);
//   container.addEventListener('click', getItem);
//   container.addEventListener('click', e => getPaginationPage(e, link));
// };




export const refFavourites = {
  favoritesLocal: JSON.parse(localStorage.getItem('favorites')),

}


console.log("refFavourites.favoritesLocal", refFavourites.favoritesLocal)
let arrayFavoritesProduct = [];

function favouritesIntoBackeEnd(array) {
  for (let arr of array) {

  }


}


export let favoritesArr = [];
export const getItem = (event) => {
  if (event.target.closest('[data-id]') && event.target.nodeName === 'IMG') {
    let id = event.target.closest('[data-id]').dataset.id;
    if (localStorage.getItem('info')) {
      console.log('Если токен есть')

      if (event.target.src === vector) {
        event.target.src = vector_love;
        const data = userData.user


        apiUsers.addFavorite(id).then((data) => {
          apiUsers.getCurrentUser().then(response => {
            const userDataFavorites = userData.user.favorites
            const responseData = response.data.favorites;
            const responseUnic = Array.from(new Set(responseData.map(item => item.trim())));

            console.log('responseUnic', responseUnic)
            console.log('userData.user.favorite', userData.user.favorites)
            console.log('userData', userData)

            if (userDataFavorites.length === 0) {
              userData.user.favorites = [...responseUnic]
            } else {
              userData.user.favorites = [...responseUnic]
              userData.user.favorites = [...userData.user.favorite]
              console.log('Если токен есть : добавить фейвт ИД userData.user', userData.user.favorites)
            }
          })
        });

      } else if (event.target.src === vector_love) {
        event.target.src = vector;
        apiUsers.deleteFavorite(id).then((data) => {
          apiUsers.getCurrentUser().then(response => {
            console.log(' response.data.favorites', response.data.favorites)

            userData.user.favorites = userData.user.favorites.filter(elem => elem !== id);
            userData.user.favorites = response.data.favorites
            console.log('Если токен НЕТ: УБРАТЬ фейвт ИД userData.user', userData.user.favorites)
          })
        });
      }



    } else if (localStorage.getItem('info') === null) {
      if (event.target.src === vector) {
        event.target.src = vector_love;
        favoritesArr.push(id)
        localStorage.setItem('favorites', JSON.stringify(favoritesArr));
        console.log("Если токен пустой", favoritesArr)
      } else if (event.target.src === vector_love) {
        event.target.src = vector;
        favoritesArr = favoritesArr.filter(elem => elem !== id);
        localStorage.setItem('favorites', JSON.stringify(favoritesArr));
        console.log("Если токен пустой", favoritesArr)
      }
    }


    // !===// productCard(id);не записывает масив продуктов
    return id; // функция Ани(id)
  } else return;
};


export const createList = array => {
  const container = document.querySelector('.container');
  container.innerHTML = createListMarkup(array);
  container.addEventListener('click', getItem);
  favouritesIntoBackeEnd(array)
};

//     // console.log(products);
//     // console.log(id);
//     const filteredproduct = products.find(item => item._id === id);
//     // console.log(filteredproduct);
//     productCard(filteredproduct);
//     return id; // функция Ани(id)
//   } else return;
// };
// >>>>>>> 0cf0722f2e0f5466b60a39e825e64a17e4a56342
