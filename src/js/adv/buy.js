import { addToCart, showCart, setCartCounter } from '../components/cart/cart';

const buy = (id, closeModal) => {
  const item = {
    name: id.name,
    id: id._id,
    price: id.price,
    images: id.images,
  };
  console.log(item);

  addToCart(item);
  closeModal();
  showCart();
};

export default buy;
