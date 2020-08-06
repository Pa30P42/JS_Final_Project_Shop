// const INFO = 'info';
// const FAVORITES = 'favorites';
import apiUsers from '../api/users/apiUsers';
import userData from '../../js/userData';
import favorite from '../../images/adv/icons/favorite.svg';
import favoriteFill from '../../images/adv/icons/favorite_fill.svg';

function updateFavorites(id) {
  const refBtnFavourite = document.getElementById('btnFavourite');
  const refChangeTextFavorite = document.querySelector('.adv__in-favorite');

  const favoriteData = localStorage.getItem('favorites'); //array
  let favorites = JSON.parse(favoriteData);

  // if (!favorites) {
  // favorites = [];
  // refBtnFavourite.src = favorite;
  // refChangeTextFavorite.textContent = 'В избранное';
  // }
  // const elem = favorites.find(elem => elem === id);
  // console.log(elem);

  if (favorites.find(elem => elem === id)) {
    refBtnFavourite.src = favoriteFill;
    refChangeTextFavorite.textContent = 'Из избранного';
  }

  refBtnFavourite.addEventListener('click', async event => {
    // const favoriteData = localStorage.getItem(INFO);
    // let favorites = JSON.parse(favoriteData);

    if (event.target.src === favorite) {
      event.target.src = favoriteFill;
      refChangeTextFavorite.textContent = 'Из избранного';

      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));

      await apiUsers.addFavorite(id);
      userData.user.favorites = [...userData.user.favorites, id];
      console.log(userData.user.favorite);
    } else if (event.target.src === favoriteFill) {
      event.target.src = favorite;
      refChangeTextFavorite.textContent = 'В избранное';

      const indexFavorites = favorites.indexOf(id);
      favorites.splice(indexFavorites, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));

      await apiUsers.deleteFavorite(id);
      const result = userData.user.favorites.filter(elem => elem !== id);
      userData.user.favorites = [...result];
      console.log(userData.user.favorite);
    }
    // --------- проверка ---/
    // console.log('id ', id._id);
    // apiUsers.addFavorite(id._id).then(data => console.log('favorites ', data));
    // apiUsers.getCurrentUser().then(data => console.log('current ', data));
    // ----------------------/
    // }
  });
}

export default updateFavorites;

// const addToFavourite = async id => {
//   await apiUsers.addFavorite(id);
//   // apiUsers.addFavorite(id).then(data => console.log(data));
//   console.log('id ', id);
//   apiUsers.addFavorite(`${id}`).then(data => console.log('favorites ', data));
//   apiUsers.getCurrentUser().then(data => console.log('current ', data));

// userData.favorite = [...userData.favorite, id];
// console.log(userData.favorite);

// const favoriteData = localStorage.getItem(FAVORITES);
// let favorites = JSON.parse(favoriteData);
// if (!favorites) {
//   favorites = [];
// }
// const item = favorites.find(elem => elem.id === id);
// if (!item) {
//   favorites.push(id);
// }
// localStorage.setItem(FAVORITES, JSON.stringify(favorites));
// };

// const removeFavorite = async id => {
//   await apiUsers.deleteFavorite(id);
// const indexFavorites = favorites.indexOf(id);
// indexFavorites.splice(indexFavorites, 1);
// };
// export default (addToFavourite, removeFavorite);
