import vector_love from '../../images/sale/Vector_love.svg';
import vector from '../../images/sale/Vector.svg';
import apiUsers from '../api/users/apiUsers';
import userData from '../userData';
import {
  createSingleCardMarkup
} from '../sale/cardModule';
import productCard from '../adv/productCard';


const createListMarkup = (array, paginationMarkup, link) => {
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

export function getElementsForFavorites(element, reset) {
  reset && (userData.currentPrintElements = []);
  userData.currentPrintElements = [...userData.currentPrintElements, element];
  return 'favorite_product';
}

export function selectImg(e) {
  const favorites = {
    user: [],
    local: [],
    id: '',
    isAuth: false,
    element: {},
  };

  function isAuth() {
    if (localStorage.getItem('info')) {
      favorites.isAuth = true;
    } else return false;
  }

  function getObject() {
    favorites.element = userData.currentPrintElements.find(element => element._id === favorites.id);
  }

  function getId() {
    favorites.id = e.target.dataset.id;
  }

  function isExistUserData() {
    if (localStorage.getItem('user-data')) {
      userData.user.favorites = [...JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites];
      favorites.user = [...JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites];
      return favorites.user.some(product => product._id === favorites.id);
    }
    return false;
  }

  function isExistLocalData() {
    if (localStorage.getItem('favorites__')) {
      favorites.local = [...JSON.parse(localStorage.getItem('favorites__'))];
    } else localStorage.setItem('favorites__', JSON.stringify([]));
  }

  function isExistElementLocally() {
    return favorites.local.some(id => id === favorites.id);
  }

  if (e.target.dataset) {
    if (e.target.nodeName === 'IMG' && e.target.dataset.favorite) {
      isAuth();
      getId();
      getObject();
      isExistLocalData();
      if (favorites.isAuth) {
        if (isExistUserData()) {
          userData.user.favorites = [...userData.user.favorites.filter(product => product._id !== favorites.id)];
          favorites.user = [...favorites.user.filter(product => product._id !== favorites.id)];
          const localUserFavorites = JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites;
          const localeData = {
            ...JSON.parse(localStorage.getItem('user-data')),
          };
          localeData.response_data_user[0].favorites = [
            ...localUserFavorites.filter(item => item._id !== favorites.id),
          ];
          localStorage.setItem('user-data', JSON.stringify(localeData));
          apiUsers.deleteFavorite(favorites.id);
          e.target.src = vector;
        } else {
          userData.user.favorites = [...userData.user.favorites, favorites.element];
          const localUserFavorites = JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites;
          const localeData = {
            ...JSON.parse(localStorage.getItem('user-data')),
          };
          localeData.response_data_user[0].favorites = [...localUserFavorites, favorites.element];
          localStorage.setItem('user-data', JSON.stringify(localeData));
          apiUsers.addFavorite(favorites.id);
          e.target.src = vector_love;
        }
      }

      if (!favorites.isAuth) {
        if (isExistElementLocally()) {
    
          favorites.local = [...favorites.local.filter(id => id !== favorites.id)];
          localStorage.setItem('favorites__', JSON.stringify(favorites.local));
          e.target.src = vector;
        } else {
          favorites.local = [...favorites.local, favorites.id];
          localStorage.setItem('favorites__', JSON.stringify(favorites.local));
          e.target.src = vector_love;
        }
      }
    } else return;
  }
}

export function getImg(id) {
  const favoritesItems = {
    user: [],
    local: [],
  };
  if (localStorage.getItem('info')) {
    let result = false;
    if (localStorage.getItem('user-data')) {
      userData.user.favorites = [...JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites];
      const data = [...JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites];
      result = data.some(product => product._id === id);
    }
    if (result) {
      return vector_love;
    } else {
      return vector;
    }
  } else {
    if (localStorage.getItem('favorites__')) {
      favoritesItems.local = localStorage.getItem('favorites__') ?
        [...JSON.parse(localStorage.getItem('favorites__'))] :
        [];
      if (favoritesItems.local.includes(id)) {
        return vector_love;
      } else {
        return vector;
      }
    } else {
      return vector;
    }
  }
}

export const createList = (array, paginationMarkup, link) => {
  const container = document.querySelector('.sections');
  container.innerHTML = createListMarkup(array, paginationMarkup, link);
  container.addEventListener('click', selectImg);
  // const filteredproduct = products.find(item => item._id === id);
  // productCard(filteredproduct);
};
