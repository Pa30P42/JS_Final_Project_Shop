import {
  modalModule
} from '../components/modalModule/modalModule';
import markup from './markup';
import updateLastSeen from './lastSeen';
import buy from './buy';
import vector_love from '../../images/sale/Vector_love.svg';
import vector from '../../images/sale/Vector.svg';
import userData from '../../js/userData';
import apiUsers from '../../js/api/users/apiUsers';

const productCard = async item => {
  const component = () => markup(item);
  updateLastSeen(item._id);
  modalModule(component, addListener);

  function selectImg(e) {
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

  const btnBuy = document.getElementById('btnBuy');

  function addListener(closeModal) {
    const btnBuy = document.getElementById('btnBuy');
    const btnClose = document.querySelector('.product__card-close');

    const refFavorites = document.querySelector('.adv__favorite');
    refFavorites.addEventListener('click', selectImg);

    btnBuy.addEventListener('click', () => {
      if (item) {
        buy(item, closeModal);
      }
    });
    btnClose.addEventListener('click', closeModal);
  }
};
export default productCard;
