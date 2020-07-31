import modalWindow from '../components/modalModule/modalModule';
import markup from './markup';
import updateLastSeen from './lastSeen';
import addToFavourite from './favorite';
import buy from './buy';

const productCard = item => {
  const component = () => markup(item);
  updateLastSeen(item._id);
  modalWindow(component, addListener);

  const btnFavourite = document.getElementById('btnFavourite');
  const btnBuy = document.getElementById('btnBuy');

  btnFavourite.addEventListener('click', async () => {
    if (currentItem) {
      await addToFavourite(currentItem._id);
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
