import { modalModule } from '../components/modalModule/modalModule';
import markup from './markup';
import updateLastSeen from './lastSeen';
// import updateFavorites from './favorite';
import buy from './buy';
import favoriteFill from '../../images/adv/icons/favorite_fill.svg';
import favorite from '../../images/adv/icons/favorite.svg';
import allProducts from '../api/products/apiProducts';
import userData from '../../js/userData';
import apiUsers from '../../js/api/users/apiUsers';
import { selectImg, getImg } from '../../js/sale/saleSection';

const productCard = async item => {
  const component = () => markup(item);
  updateLastSeen(item._id);
  modalModule(component, addListener);
  // updateFavorites(item);

  const refChangeTextFavorite = document.querySelector('.adv__in-favorite');
  // console.log('btn', refBtnFavourite);
  console.log(userData);
  // if (favorites.find(elem => elem === id._id)) {
  //   refBtnFavourite.src = favoriteFill;
  //   refChangeTextFavorite.textContent = 'Из избранного';
  // }

  const refSection = document.querySelector('.product__card');
  refSection.addEventListener('click', selectImg);
  // function test(e) {
  //   selectImg(e);
  //   console.log(e.target);
  // }

  const btnBuy = document.getElementById('btnBuy');

  function addListener(closeModal) {
    const btnBuy = document.getElementById('btnBuy');
    const btnClose = document.querySelector('.product__card-close');
    const refBtnFavourite = document.getElementById('btnFavourite');
    refBtnFavourite.addEventListener('click', selectImg);

    btnBuy.addEventListener('click', () => {
      if (item) {
        buy(item, closeModal);
      }
    });
    btnClose.addEventListener('click', closeModal);
  }
};
export default productCard;
