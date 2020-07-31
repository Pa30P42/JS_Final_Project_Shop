import { refs } from './refs';
import userData from '../userData';
import settings from '../setting';
import cartItems from '../../templates/cart-items.hbs';
import { modalModule } from './modalModule/modalModule';

// const markup = cartItems(cart.order);
// const divRef = document.createElement('div');
// console.log(divRef);
// divRef.innerHTML = markup;
// divRef.style.display = 'none';
// refs.container.insertAdjacentElement('afterend', divRef);
const createCartMarkup = () => {
  return cartItems(userData.cart.cartItems);
};

const listeners = action => {
  const btnComponent = document.querySelector('.btn-close');
  btnComponent.addEventListener('click', action);
};

const inputQuantityHandler = ({ target }) => {
  if (target.name !== 'quantity') {
    return;
  }
  let newCount = Number(target.value);
  if (newCount <= 1) {
    newCount = 1;
  }
  if (newCount > 999) {
    newCount = 999;
  }
  target.value = newCount;
  const parent = target.closest('[data-id]');
  const id = parent.dataset.id;
  // changeCartCount(id, newCount);
  createCartMarkup();
};

const counterHandler = e => {
  const listItem = e.target.closest('[data-id]');
  const id = listItem.dataset.id;
  const element = userData.cart.cartItems.find(item => item.id === id);
  const buttonDecrement = listItem.querySelector('[data-button="decrement"]');
  const cartTotalPrice = document.querySelector('.cartTotalPrice');

  if (e.target.dataset.button === 'decrement') {
    if (element.quantity <= 1) {
      element.quantity = 1;
    } else element.quantity -= 1;

    if (element.quantity === 1) {
      buttonDecrement.disabled = true;
    }
  }
  if (e.target.dataset.button === 'increment') {
    element.quantity += 1;
    buttonDecrement.disabled = false;
  }
  const inputNumber = listItem.querySelector('[data-input="inputNumber"]');
  inputNumber.value = element.quantity;
  cartTotalPrice.textContent = this.getTotalPrice(
    this.userData[this.keys.cart],
  );
};

const showCart = () => {
  // alert('Корзина пуста');
  // console.log(container);
  modalModule(createCartMarkup, listeners);
  refs.cartList = document.querySelector('.cart');
  console.log(refs.cartList);
  refs.cartList.addEventListener('click', e => console.dir(e));
};

export { showCart };
