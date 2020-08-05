import vector_love from '../../images/sale/Vector_love.svg';
import vector from '../../images/sale/Vector.svg';
import {
  createSingleCardMarkup
} from './cardModule';
import apiUsers from '../api/users/apiUsers';
import userData from '../userData'
import {
  addLocale
} from 'core-js';

// /* <section class="card container"></section> *

const createListMarkup = array => {
  // console.log(array)


  return `
   <section class="card">
  <h2 class="card_description">Акции</h2>
  <ul class="card_list">${array.reduce((acc, element) => {
    acc += createSingleCardMarkup(element, 'sale');
    return acc;
  }, '')}</ul></section>`;
};
let favoritesArr = [];


const getItem = event => {


  if (event.target.closest('[data-id]') && event.target.nodeName === 'IMG') {
    let id = event.target.closest('[data-id]').dataset.id;
    if (localStorage.getItem('info')) {
      if (event.target.src === vector) {
        event.target.src = vector_love;
        console.log("Если токен есть", localStorage.getItem('info'))
        console.log("Если токен есть ИД", id)
        console.log('userData.user Если токен есть', userData.user)
        console.log('tokenParse Если токен есть ИД', tokenParse)
        apiUsers.addFavorite(id).then((data) => {
          apiUsers.getCurrentUser().then(response => {
            userData.user.favorites = response.data.favorites
            console.log('Если токен есть : добавить фейвт ИД userData.user', userData.user)
          })
        });


      } else if (event.target.src === vector_love) {
        console.log('Если токен есть ИД, УДАЛИТЬ сердечко')
        apiUsers.deleteFavorite(id).then((data) => {
          apiUsers.getCurrentUser().then(response => {
            userData.user.favorites = response.data.favorites
            console.log('Если токен НЕТ: УБРАТЬ фейвт ИД userData.user', userData.user)
          })
        });
        console.log('userData.user(delleyt)', userData.user)
      }



    } else if (localStorage.getItem('info') === null) {

      if (event.target.src === vector) {
        console.log("Если токен пустой", localStorage.getItem('info'))
        event.target.src = vector_love;
        if (!favoritesArr.includes(id)) {
          favoritesArr.push(id)
          localStorage.setItem('FAVOURITES', JSON.stringify(favoritesArr));
        } else return
        console.log("не добавляй, такий є", favoritesArr)


      } else if (event.target.src === vector_love) {
        event.target.src = vector;
        console.log('Если токен пустой, УДАЛИТЬ сердечко')
        favoritesArr = favoritesArr.filter(elem => elem !== id);
        localStorage.setItem('FAVOURITES', JSON.stringify(favoritesArr));
        // let localFavorites = JSON.parse(localStorage.getItem('FAVOURITES'));
        // localFavorites.filter(elem => elem !== id)
        
        console.log(favoritesArr)




      }



    }







    // productCard(id);
    return id; // функция Ани(id)
  } else return;
};




export const createList = array => {

  const container = document.querySelector('.container');
  container.innerHTML = createListMarkup(array);
  container.addEventListener('click', getItem);

};
