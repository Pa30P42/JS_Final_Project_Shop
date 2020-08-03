import { modalModule } from '../components/modalModule/modalModule';
import markup from './markup';
import updateLastSeen from './lastSeen';
import addToFavourite from './favorite';
import buy from './buy';
import favoriteFill from '../../images/adv/icons/favorite_fill.svg';
import allProducts from '../api/products/apiProducts';

const productCard = async id => {
  const items = await allProducts.getAllProducts();
  const item = items.find(i => i._id === id);
  console.log(items);
  console.log(id);

  const component = () => markup(id);
  // console.log(item);
  updateLastSeen(id._id);
  modalModule(component, addListener);

  const btnFavourite = document.getElementById('btnFavourite');
  const btnBuy = document.getElementById('btnBuy');

  btnFavourite.addEventListener('click', async () => {
    if (id) {
      await addToFavourite(id._id);
      const changeIconFavorite = document.querySelector('.adv__favorite');
      changeIconFavorite.setAttribute('src', favoriteFill);
    }
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
