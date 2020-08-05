import { addToCart, showCart, setCartCounter } from '../components/cart/cart';

const buy = (item, closeModal) => {
  addToCart(item);
  closeModal();
  showCart();
};

export default buy;
