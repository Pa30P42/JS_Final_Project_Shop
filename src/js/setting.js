import apiUsers from './api/users/apiUsers';
import userData from './userData';
import {
  refFavourites,
} from './sale/saleSection'

export default {
  isMobile: false,
  isTablet: false,
  isDesktop: false,

  getDevice(width) {
    if (width < 768) {
      this.isMobile = true;
      this.isTablet = false;
      this.isDesktop = false;
    }
    if (width >= 768 && width < 1200) {
      this.isTablet = true;
      this.isMobile = false;
      this.isDesktop = false;
    }
    if (width >= 1200) {
      this.isDesktop = true;
      this.isMobile = false;
      this.isTablet = false;
    }
  },
};

export const userDataFn = async () => {
  if (localStorage.getItem('info')) {
    const userToken = JSON.parse(localStorage.getItem('info')).token;
    if (userToken) {
      const response = await apiUsers.getCurrentUser();

      userData.user = {
        ...userData.user,
        ...response.data,

      };

      // userData.user.favorites = [...refFavourites.favoritesLocal];
      // console.log('userData.user', userData.user)

    }
    delete userData.user.password;
  }
  localStorage.setItem(
    'favorites',
    JSON.stringify([]),
  )
  if (localStorage.getItem('info')) {
    const favorites = JSON.parse(localStorage.getItem('info')).favorites;
    if (favorites) {
      return
    } else {

      localStorage.setItem(
        'favorites',
        JSON.stringify([]),
      )
    }

  }
};
