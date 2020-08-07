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

  return `
   <section class="card">
  <h2 class="card_description">Акции</h2>
  <ul class="card_list">${array.reduce((acc, element) => {
    acc += createSingleCardMarkup(element, 'sale');
    return acc;
  }, '')}</ul></section>`;
};




function favouritesIntoBackeEnd(array) {
  for (let arr of array) {
    // arr.map(element => {
    //   if (element._id === arr) {
    //     arrayFavoritesProduct.push(element)
    //   }

    // })
  }
  // console.log("масив продуктов", arrayFavoritesProduct)

}



// ?




function selectImg(className){
const favorites ={
  user:[],
  local:[],
  
}

}

export function getImg(id){
  const favoritesItems ={
user:[],
local:[]
  }

  if(localStorage.getItem('info')){

    favoritesItems.user = [...userData.user.favorites]
    if(favoritesItems.user.some(item => item._id === id)){
return vector_love
    } else{
      return vector
    }



  } else{

    favoritesItems.local = JSON.parse(localStorage.getItem('favorites').favorites)

    if(favoritesItems.local.includes(id)){
return vector_love
    } else{
      return vector
    }

  }






}








    // if (event.target.closest('[data-id]') && event.target.nodeName === 'IMG') {
    //   let id = event.target.closest('[data-id]').dataset.id;
    //   if (localStorage.getItem('info')) {
    //     console.log('Если токен есть')

    //     if (event.target.src === vector) {
    //       event.target.src = vector_love;
    //       const data = userData.user


    //       apiUsers.addFavorite(id).then((data) => {
    //         apiUsers.getCurrentUser().then(response => {
    //           const userDataFavorites = userData.user.favorites
    //           const responseData = response.data.favorites;
    //           const responseUnic = Array.from(new Set(responseData.map(item => item.trim())));

    //           console.log('responseUnic', responseUnic)
    //           console.log('userData.user.favorite', userData.user.favorites)
    //           console.log('userData', userData)

    //           if (userDataFavorites.length === 0) {
    //             userData.user.favorites = [...responseUnic]
    //           } else {
    //             userData.user.favorites = [...responseUnic]
    //             userData.user.favorites = [...userData.user.favorite]
    //             console.log('Если токен есть : добавить фейвт ИД userData.user', userData.user.favorites)
    //           }
    //         })
    //       });

    //     } else if (event.target.src === vector_love) {
    //       event.target.src = vector;
    //       apiUsers.deleteFavorite(id).then((data) => {
    //         apiUsers.getCurrentUser().then(response => {
    //           console.log(' response.data.favorites', response.data.favorites)

    //           userData.user.favorites = userData.user.favorites.filter(elem => elem !== id);
    //           userData.user.favorites = response.data.favorites
    //           console.log('Если токен НЕТ: УБРАТЬ фейвт ИД userData.user', userData.user.favorites)
    //         })
    //       });
    //     }




    //   } else if (localStorage.getItem('info') === null) {
    //     if (event.target.src === vector) {
    //       event.target.src = vector_love;
    //       favoritesArr.push(id)
    //       localStorage.setItem('favorites', JSON.stringify(favoritesArr));
    //       console.log("Если токен пустой", favoritesArr)
    //     } else if (event.target.src === vector_love) {
    //       event.target.src = vector;
    //       favoritesArr = favoritesArr.filter(elem => elem !== id);
    //       localStorage.setItem('favorites', JSON.stringify(favoritesArr));
    //       console.log("Если токен пустой", favoritesArr)
    //     }
    //   }


    //   // !===// productCard(id);не записывает масив продуктов
    //   return id; // функция Ани(id)
    //




//   } else return
// }


export const createList = array => {
  const container = document.querySelector('.container');
  container.innerHTML = createListMarkup(array);
  container.addEventListener('click', getItem);
  favouritesIntoBackeEnd(array)
};
