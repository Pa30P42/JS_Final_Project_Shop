import apiUsers from '../api/users/apiUsers';

const addToFavourite = async id => {
  await apiUsers.addFavorite(id);
};

export default addToFavourite;
