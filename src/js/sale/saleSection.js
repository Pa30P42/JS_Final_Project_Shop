import vector_love from '../../images/sale/Vector_love.svg';
import vector from '../../images/sale/Vector.svg';
import {
  createSingleCardMarkup
} from './cardModule';
import apiUsers from '../api/users/apiUsers';
import userData from '../userData'

// /* <section class="card container"></section> *

const createListMarkup = array => {
  console.log(array)


  return `
   <section class="card">
  <h2 class="card_description">Акции</h2>
  <ul class="card_list">${array.reduce((acc, element) => {
    acc += createSingleCardMarkup(element, 'sale');
    return acc;
  }, '')}</ul></section>`;
};

const getItem = event => {
  if (event.target.closest('[data-id]') && event.target.nodeName === 'IMG') {
    const id = event.target.closest('[data-id]').dataset.id;
    if (event.target.src === vector) {
      event.target.src = vector_love;


      if (localStorage.getItem('info')) {
        const token = localStorage.getItem('info');
        const tokenParse = JSON.parse(token).token
        if (tokenParse) {
          apiUsers.addFavorite(id).then((data) => {
            apiUsers.getCurrentUser().then(response => {
              userData.user.favorites = response.data.favorites
            })
          });
        } else {
          localStorage.setItem('favorites', JSON.stringify(favoritesArr));
        }
      }




    } else if (event.target.src === vector_love) {
      event.target.src = vector;
      apiUsers.deleteFavorite(id)
      favoritesArr.find(elem => {
        elem !== id;
        favoritesArr.push(element)
      });


    }

    // productCard(id);
    return id; // функция Ани(id)
  } else return;
};




export const createList = array => {
  // const cardList = document.querySelector('.card_list');
  const container = document.querySelector('.container');
  container.innerHTML = createListMarkup(array);
  container.addEventListener('click', getItem);
  // cardList.addEventListener('click', getVector);

  // cardList.addEventListener('click', getVector);
};

// export const getVector = event => {
//   console.log(event.target)
//   if (
//     event.target.closest('[data-clickVector]') &&
//     event.target.nodeName === 'IMG'
//   ) {
//     const clickVector = event.target.closest('[data-clickVector]').dataset
//       .clickVector;

//     console.log('clickVector', clickVector);
//     return clickVector;
//   } else return;
// };
