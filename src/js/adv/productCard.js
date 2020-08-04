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

const productCard = async id => {
  const items = await allProducts.getAllProducts();
  const item = items.find(i => i._id === id);
  // console.log(items);
  console.log(id);

  const component = () => markup(id);
  // console.log(item);
  updateLastSeen(id._id);
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

      favorites.push(id);
      localStorage.setItem(FAVORITES, JSON.stringify(favorites));

      await apiUsers.addFavorite(id._id);
      // userData.favorite = [...userData.favorite, id];
      // console.log(userData.favorite);
    } else if (event.target.src === favoriteFill) {
      event.target.src = favorite;
      changeTextFavorite.textContent = 'В избранное';

      const indexFavorites = favorites.indexOf(id);
      favorites.splice(indexFavorites, 1);
      localStorage.setItem(FAVORITES, JSON.stringify(favorites));

      await apiUsers.deleteFavorite(id._id);
    }
    // --------- проверка ---/
    // console.log('id ', id._id);
    // apiUsers.addFavorite(id._id).then(data => console.log('favorites ', data));
    apiUsers.getCurrentUser().then(data => console.log('current ', data));
    // ----------------------/
    // }
  });

  function addListener(closeModal) {
    const btnBuy = document.getElementById('btnBuy');
    btnBuy.addEventListener('click', () => {
      if (id) {
        buy(id, closeModal);
      }
    });
  }
};
export default productCard;
