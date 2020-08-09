import vector_love from '../../images/sale/Vector_love.svg';
import vector from '../../images/sale/Vector.svg';
import { createSingleCardMarkup } from '../sale/cardModule';
import apiUsers from '../api/users/apiUsers';
import userData from '../userData';
import productCard from '../adv/productCard';

// /* <section class="card container"></section> *
const createListMarkup = array => {
  if (array.length < 1) {
    return `
<section class="search__card">
<h2 class="search__card_description">Ничего не найдено</h2>`;
  } else {
    return `
   <section class="search__card">
  <h2 class="search__card_description">Результат поиска </h2>
  <ul class="search__card_list">${array.reduce((acc, element) => {
    acc += createSingleCardMarkup(element);
    return acc;
  }, '')}</ul></section>`;
  }
};
const getItem = (event, products) => {
  if (event.target.closest('[data-id]') && event.target.nodeName === 'IMG') {
    const id = event.target.closest('[data-id]').dataset.id;
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

    const filteredproduct = products.find(item => item._id === id);
    productCard(filteredproduct);
    return id; // функция Ани(id)
  } else return;
};

export const createList = array => {
  const container = document.querySelector('.sections');
  container.innerHTML = createListMarkup(array);
  container.addEventListener('click', e => {
    getItem(e, array);
  });
};
