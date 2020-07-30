import { refs } from './refs';
import cartItems from '../../templates/cart-items.hbs';

const bodyRef = document.querySelector('body');
const cart = {
  order: [],
  totalAmount: 0,
};
const markup = cartItems(cart.order);
const divRef = document.createElement('div');
console.log(divRef);
divRef.innerHTML = markup;
// divRef.style.display = 'none';
// refs.container.insertAdjacentElement('afterend', divRef);

const showCart = () => {
  // alert('Корзина пуста');
  return cartItems(cart.order);
};
