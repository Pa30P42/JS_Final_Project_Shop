// import { addToCart, showCart } from '../../js/components/cart';

const buy = (id, closeModal) => {
  const item = {
    name: id.name,
    id: id._id,
    price: id.price,
    images: id.images[0],
  };
  console.log(item);

  // addToCart(item);
  closeModal();
  // showCart();
};

export default buy;
