import vector_love from '../../images/sale/Vector_love.svg';
import vector from '../../images/sale/Vector.svg';
import { createSingleCardMarkup } from './cardModule';
import apiUsers from '../api/users/apiUsers';

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
const favoritesArr = [];
const getItem = event => {
  if (event.target.closest('[data-id]') && event.target.nodeName === 'IMG') {
    const id = event.target.closest('[data-id]').dataset.id;
    console.log('id', id);
    if (event.target.src === vector) {
      event.target.src = vector_love;
      favoritesArr.push(id);
      apiUsers.addFavorite(id);

      localStorage.setItem('favorites', JSON.stringify(favoritesArr));
    } else if (event.target.src === vector_love) {
      event.target.src = vector;
      apiUsers.deleteFavorite(id);
      console.log(favoritesArr);
      const itemFavoriteID = favoritesArr.find(element => {
        element === id;

        console.log(id);
      });
      //   for (let arr of favoritesArr) {
      //     if (arr !== id) {
      //       favoritesArr = [];
      //       favoritesArr.push(arr);
      //     }
      //   }
      console.log('itemFavoriteID', itemFavoriteID);
    }

    // productCard(id);
    return id; // функция Ани(id)
  } else return;
};

///

apiUsers.getCurrentUser();
// apiUsers.getCurrentUser().then(data => console.log(data));

const cardList = document.querySelector('.card_list');
export const createList = array => {
  const container = document.querySelector('.container');
  container.innerHTML = createListMarkup(array);
  container.addEventListener('click', getItem);
  cardList.addEventListener('click', getVector);

  // cardList.addEventListener('click', getVector);
};

export const getVector = event => {
  if (
    event.target.closest('[data-clickVector]') &&
    event.target.nodeName === 'IMG'
  ) {
    const clickVector = event.target.closest('[data-clickVector]').dataset
      .clickVector;
    console.log('clickVector', clickVector);
    return clickVector;
  } else return;
};
