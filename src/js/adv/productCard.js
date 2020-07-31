import modalWindow from '../components/modalModule/modalModule';
import markup from './markup';
import updateLastSeen from './lastSeen';
import addToFavourite from './favorite';
import buy from './buy';

const productCard = item => {
  const component = () => markup(item);
  updateLastSeen(item._id);
  modalWindow(component, () => {});

  const btnFavourite = document.getElementById('btnFavourite');
  const btnBuy = document.getElementById('btnBuy');

  btnFavourite.addEventListener('click', async () => {
    if (currentItem) {
      await addToFavourite(currentItem._id);
    }
  });

  btnBuy.addEventListener('click', () => {
    if (currentItem) {
      buy(currentItem._id);
    }
  });
};

export default productCard;
