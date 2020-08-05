// import apiUsers from '../api/users/apiUsers';
// import userData from '../../js/userData';
// import favoriteFill from '../../images/adv/icons/favorite_fill.svg';
// import favorite from '../../images/adv/icons/favorite.svg';

// const FAVORITES = 'favorites';

// const addToFavourite = async id => {
//   await apiUsers.addFavorite(id);
//   // apiUsers.addFavorite(id).then(data => console.log(data));
//   console.log('id ', id);
//   apiUsers.addFavorite(`${id}`).then(data => console.log('favorites ', data));
//   apiUsers.getCurrentUser().then(data => console.log('current ', data));

//   // userData.favorite = [...userData.favorite, id];
//   // console.log(userData.favorite);

//   // const favoriteToLocalStorage = localStorage.getItem(FAVORITES);
//   // let favorites = JSON.parse(favoriteToLocalStorage);
//   // if (!favorites) {
//   //   favorites = [];
//   // }
//   // const item = favorites.find(elem => elem.id === id);
//   // if (!item) {
//   //   favorites.push(id);
//   // }
//   // localStorage.setItem(FAVORITES, JSON.stringify(favorites));
// };

// const removeFavorite = async id => {
//   await apiUsers.deleteFavorite(id);
// const indexFavorites = favorites.indexOf(id);
// indexFavorites.splice(indexFavorites, 1);
// };
// export default (addToFavourite, removeFavorite);
