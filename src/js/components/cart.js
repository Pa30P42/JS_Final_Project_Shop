import { refs } from './refs';
import cartItems from '../../templates/cart-items.hbs';
import './js/components/modalModule/modalModule';

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
const createCartMarkup = () => {
  return cartItems(cart.order);
};
const listeners = action => {
  const btnComponent = document.querySelector('.btn-close');
  btnComponent.addEventListener('click', action);
};
const showCart = () => {
  // alert('Корзина пуста');
  modalModule(createCartMarkup, listeners);
};
