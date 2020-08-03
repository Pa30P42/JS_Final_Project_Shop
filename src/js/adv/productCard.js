import { modalModule } from '../components/modalModule/modalModule';
import markup from './markup';
import updateLastSeen from './lastSeen';
import addToFavourite from './favorite';
import buy from './buy';
import favoriteFill from '../../images/adv/icons/favorite_fill.svg';

const productCard = item => {
  const component = () => markup(item);
  updateLastSeen(item._id);
  modalModule(component, addListener);

  const btnFavourite = document.getElementById('btnFavourite');
  const btnBuy = document.getElementById('btnBuy');

  btnFavourite.addEventListener('click', async () => {
    if (item) {
      await addToFavourite(item._id);
      // const changeIconFavorite = document.querySelector('.adv__favorite');
      // changeIconFavorite.setAttribute('src', favoriteFill);
    }
  });

  function addListener(closeModal) {
    const btnBuy = document.getElementById('btnBuy');
    btnBuy.addEventListener('click', () => {
      if (item) {
        buy(item, closeModal);
      }
    });
  }
};

export default productCard;
