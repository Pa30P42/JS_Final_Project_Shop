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

const createListMarkup = array => {
  return `
   <section class="card">
  <h2 class="card_description">Акции</h2>
  <ul class="card_list">${array.reduce((acc, element) => {
    acc += createSingleCardMarkup(element, 'sale');
    return acc;
  }, '')}</ul></section>`;
};







export function getElementsForFavorites(element, reset) {
  reset && (userData.currentPrintElements = []);
  userData.currentPrintElements = [...userData.currentPrintElements, element];
  return "favorite_product";
}


function selectImg(e) {
  const favorites = {
    user: [],
    local: [],
    id: "",
    isAuth: false,
    element: {},

  }

  function isAuth() {
    if (localStorage.getItem('info')) {
      favorites.isAuth = true;
    } else return false
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
      favorites.user = [...JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites]
      return favorites.user.some(product => product._id === favorites.id)
    }
    return false
  }

  function isExistLocalData() {
    if (localStorage.getItem("favorites__")) {
      favorites.local = [...JSON.parse(localStorage.getItem("favorites__"))]
    } else localStorage.setItem("favorites__", JSON.stringify([]))
  }

  function isExistElementLocally() {
    return favorites.local.some(id => id === favorites.id)
  }

  if (e.target.dataset) {
    if (e.target.nodeName === "IMG" && e.target.dataset.favorite) {
      isAuth();
      getId();
      getObject();
      isExistLocalData();
      if (favorites.isAuth) {
        if (isExistUserData()) {
          userData.user.favorites = [...userData.user.favorites.filter(product => product._id !== favorites.id)];
          favorites.user = [...favorites.user.filter(product => product._id !== favorites.id)];
          const localUserFavorites = JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites;
          const localeData = { ...JSON.parse(localStorage.getItem('user-data')) };
          localeData.response_data_user[0].favorites = [...localUserFavorites.filter(item => item._id !== favorites.id)];
          localStorage.setItem('user-data', JSON.stringify(localeData));
          apiUsers.deleteFavorite(favorites.id);
          e.target.src = vector;

        } else {
          userData.user.favorites = [...userData.user.favorites, favorites.element];
          const localUserFavorites = JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites;
          const localeData = { ...JSON.parse(localStorage.getItem('user-data')) };
          localeData.response_data_user[0].favorites = [...localUserFavorites, favorites.element];
          localStorage.setItem('user-data', JSON.stringify(localeData));
          apiUsers.addFavorite(favorites.id);
          e.target.src = vector_love;
        }
      }

      if (!favorites.isAuth) {
        if (isExistElementLocally()) {
          console.log('favorites.local', favorites.local)
          favorites.local = [...favorites.local.filter(id => id !== favorites.id)];
          localStorage.setItem('favorites__', JSON.stringify(favorites.local))
          e.target.src = vector;
        } else {
          favorites.local = [...favorites.local, favorites.id]
          localStorage.setItem('favorites__', JSON.stringify(favorites.local))
          e.target.src = vector_love;
        }
      }
    } else return
  }
}

export function getImg(id) {
  const favoritesItems = {
    user: [],
    local: []
  }
  if (localStorage.getItem('info')) {
    let result = false
    if (localStorage.getItem('user-data')) {
      userData.user.favorites = [...JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites];
      const data = [...JSON.parse(localStorage.getItem('user-data')).response_data_user[0].favorites]
      result = data.some(product => product._id === id)
    }
    if (result) {
      return vector_love
    } else {
      return vector
    }
  } else {
    if (localStorage.getItem('favorites__')) {
      favoritesItems.local = localStorage.getItem('favorites__')
        ? [...JSON.parse(localStorage.getItem('favorites__'))]
        : [];
      if (favoritesItems.local.includes(id)) {
        return vector_love
      } else {
        return vector
      }
    } else {
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
  container.addEventListener('click', selectImg);

};
