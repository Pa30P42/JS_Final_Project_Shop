import cartItems from '../templates/cart-items.hbs';
// import '../sass/components/cart.scss';

const rootRef = document.querySelector('#root');
const cart = {
  order: [],
  totalAmount: 0,
};
rootRef.innerHTML = cartItems(cart.order);
