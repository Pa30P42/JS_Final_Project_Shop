import { addToCart, showCart } from '../../js/components/cart';

const buy = (item, closeModal) => {
  addToCart(item);
  closeModal();
  showCart();
};

export default buy;
