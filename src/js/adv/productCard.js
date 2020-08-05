import { modalModule } from '../components/modalModule/modalModule';
import markup from './markup';
import updateLastSeen from './lastSeen';
import addToFavourite from './favorite';
import buy from './buy';
import favoriteFill from '../../images/adv/icons/favorite_fill.svg';
import favorite from '../../images/adv/icons/favorite.svg';
import allProducts from '../api/products/apiProducts';
import userData from '../../js/userData';
import apiUsers from '../../js/api/users/apiUsers';

const productCard = async item => {
  // const items = await allProducts.getAllProducts();
  // const item = items.find(i => i._id === id);
  // console.log('items ', items);
  // console.log('item ', item);
  // console.log('id ', id);

  const component = () => markup(item);
  // console.log(item);
  updateLastSeen(item._id);
  modalModule(component, addListener);

  const btnBuy = document.getElementById('btnBuy');
  const btnFavourite = document.getElementById('btnFavourite');
  const changeTextFavorite = document.querySelector('.adv__in-favorite');
  const FAVORITES = 'favorites';

  btnFavourite.addEventListener('click', async event => {
    const favoriteToLocalStorage = localStorage.getItem(FAVORITES);
    let favorites = JSON.parse(favoriteToLocalStorage);

    if (event.target.src === favorite) {
      event.target.src = favoriteFill;
      changeTextFavorite.textContent = 'Из избранного';

      favorites.push(item);
      localStorage.setItem(FAVORITES, JSON.stringify(favorites));

      await apiUsers.addFavorite(item);
      // userData.favorite = [...userData.favorite, item];
      // console.log(userData.favorite);
    } else if (event.target.src === favoriteFill) {
      event.target.src = favorite;
      changeTextFavorite.textContent = 'В избранное';

      const indexFavorites = favorites.indexOf(item);
      favorites.splice(indexFavorites, 1);
      localStorage.setItem(FAVORITES, JSON.stringify(favorites));

      await apiUsers.deleteFavorite(item);
    }
    // --------- проверка ---/
    // console.log('id ', id._id);
    // apiUsers.addFavorite(id._id).then(data => console.log('favorites ', data));
    // apiUsers.getCurrentUser().then(data => console.log('current ', data));
    // ----------------------/
    // }
  });

  function addListener(closeModal) {
    const btnBuy = document.getElementById('btnBuy');
    const btnClose = document.querySelector('.product__card-close');
    btnBuy.addEventListener('click', () => {
      if (item) {
        buy(item, closeModal);
      }
    });
    btnClose.addEventListener('click', closeModal);
  }
};
export default productCard;
