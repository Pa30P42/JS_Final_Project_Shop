import apiUsers from '../api/users/apiUsers';

const addToFavourite = async id => {
  await apiUsers.addFavorite(id);
  // TODO: local storage
};

export default addToFavourite;
