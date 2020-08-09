import userData from '../../userData';
import { modalModule } from '../modalModule/modalModule';
import apiOrders from '../../api/orders/apiOrders';
import apiUsers from '../../api/users/apiUsers';
import setting from '../../setting';

const getTotalAmount = cartItems => {
  const total = cartItems.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);
  return total;
};

const getTotalQuantity = cartItems => {
  const total = cartItems.reduce((acc, item) => {
    acc += item.quantity;
    return acc;
  }, 0);
  return total;
};

const setCartCounter = () => {
  const headerNavCarts = document.querySelectorAll('header .counter_cart-items');
  const cartCounters = Array.from(headerNavCarts);
  const totalCount = getTotalQuantity(userData.user.cart.cartItems);
  cartCounters.forEach(counter => {
    counter.textContent = totalCount;
  });
};

const createHeaderCartMarkup = () => {
  return `
    <div class="cart">
    <div class="modal__heading">
    <h3>Корзина</h3>
    <button class="btn-close" type="button">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 13.3135L13.3137 1.99977" stroke-width="2" stroke-linecap="round"/>
        <path d="M2 2L13.3137 13.3137" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    </div>
    <div class="cart__body">`;
};

const createFooterCartMarkup = () => {
  return `
    </div>
    <div class="cart__buttons-wrap">
      <button type="button" class="cart__button cart__button_confirm" data-button="confirmOrder">Оформить заказ</button>
      <button type="button" class="cart__button cart__button_back" data-button="backToProducts">
        <svg width="27" height="16" viewBox="0 0 27 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 7C26.5523 7 27 7.44772 27 8C27 8.55228 26.5523 9 26 9V7ZM0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM26 9H1V7H26V9Z"/>
        </svg>
        К покупкам</button>
    </div>
  </div>`;
};

const setHeightList = () => {
  const heightList = document.documentElement.clientHeight - 300;
  return setting.isMobile ? heightList - 60 : heightList;
};

const createBodyCartMarkup = () => {
  const cartItems = userData.user.cart.cartItems;
  const totalAmount = getTotalAmount(cartItems);
  const heightList = setHeightList();
  let bodyCart = `
      <div class="cart__list-wrap">
        <div class="cart__list" style="text-align: center">Корзина пуста</div>
      </div>`;
  if (cartItems.length)
    bodyCart = `
    <div class="cart__list-wrap">
      <ul class="cart__list" style="max-height: ${heightList}px">
        ${cartItems.reduce((acc, cartItem) => {
          acc += createCartItemMarkup(cartItem);
          return acc;
        }, '')}
      </ul>
    </div>
    <div class="cart__total"><span class="cart__total-label">Итого</span><span class="cart__total-amount">${new Intl.NumberFormat(
      'ua-UA',
    ).format(totalAmount)} ₴</span></div>`;

  return bodyCart;
};

const createCartItemMarkup = item => {
  return `
  <li class="cart__item" data-id="${item.id}">
    <img class="cart__item-image" src=${item.image} alt="${item.name}" width="85" height="80" />
    <div class="cart__item-props">
      <p class="cart__item-name">${item.name}</p>
      <p class="cart__item-price">${new Intl.NumberFormat('ua-UA').format(item.price)} ₴</p>
    </div>
    <button class="cart__btn-delete" data-button="delete">
      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33481 1.20728H11.6774V1.76971H12.8845V1.12854C12.8847 0.506287 12.3787 0 11.7567 0H8.25546C7.63351 0 7.12753 0.506287 7.12753 1.12854V1.76971H8.33481V1.20728Z"/>
        <path d="M15.6723 6.55273H4.33993C4.02941 6.55273 3.78497 6.81763 3.80999 7.12723L4.75741 18.8423C4.81021 19.4963 5.35571 20 6.01107 20H14.001C14.6564 20 15.2019 19.4963 15.2547 18.8422L16.2021 7.12723C16.2273 6.81763 15.9828 6.55273 15.6723 6.55273ZM7.08392 18.7505C7.07125 18.7512 7.05859 18.7517 7.04608 18.7517C6.72961 18.7517 6.46395 18.5052 6.44427 18.1851L5.85055 8.56766C5.8301 8.23486 6.08325 7.94846 6.41589 7.92801C6.74746 7.90787 7.03509 8.1604 7.05554 8.49335L7.6491 18.1108C7.6697 18.4436 7.41656 18.7299 7.08392 18.7505ZM10.6165 18.148C10.6165 18.4813 10.3462 18.7515 10.0128 18.7515C9.67944 18.7515 9.4092 18.4813 9.4092 18.148V8.53043C9.4092 8.19702 9.67944 7.92679 10.0128 7.92679C10.3461 7.92679 10.6165 8.19702 10.6165 8.53043V18.148ZM14.1617 8.56598L13.5948 18.1834C13.5761 18.5042 13.31 18.7515 12.9929 18.7515C12.981 18.7515 12.9689 18.7512 12.9569 18.7506C12.6241 18.7309 12.3702 18.4453 12.3899 18.1125L12.9566 8.49487C12.9761 8.16208 13.2608 7.90817 13.5945 7.92786C13.9273 7.94739 14.1812 8.23318 14.1617 8.56598Z"/>
        <path d="M17.7597 4.69L17.3633 3.50165C17.2587 3.18839 16.9655 2.97705 16.6351 2.97705H3.3769C3.0467 2.97705 2.75328 3.18839 2.64891 3.50165L2.25248 4.69C2.17604 4.91919 2.27552 5.15295 2.46122 5.26953C2.53691 5.31699 2.62647 5.34552 2.72489 5.34552H17.2873C17.3857 5.34552 17.4754 5.31699 17.5509 5.26938C17.7366 5.1528 17.8361 4.91904 17.7597 4.69Z"/>
      </svg>
    </button>
    <div class="cart__item-summary">
      <div class="cart__item-counter">
        <button type="button" data-button="decrement">
          <svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H17" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <input name="quantity" type="number" data-input="inputNumber" value="${item.quantity}" />
        <button type="button" data-button="increment">
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17V1" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M1 9H17" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <p class="cart__item-amount">${new Intl.NumberFormat('ua-UA').format(item.price * item.quantity)} ₴</p>
    </div>
  </li>`;
};

const createCartMarkup = () => {
  const headerCart = createHeaderCartMarkup();
  const footerCart = createFooterCartMarkup();
  const bodyCart = createBodyCartMarkup();
  return headerCart + bodyCart + footerCart;
};

const addToCart = (product, single = true) => {
  const existProduct = userData.user.cart.cartItems.find(item => item.id === product._id);
  if (existProduct) {
    existProduct.quantity += 1;
  } else {
    const newProduct = {
      id: product._id,
      price: product.price,
      image: product.images[0],
      name: product.name,
      quantity: 1,
    };
    userData.user.cart.cartItems = [newProduct, ...userData.user.cart.cartItems];
  }
  single && setCartCounter();
};

const addProductsToCart = products => {
  products.forEach(product => addToCart(product, false));
  setCartCounter();
};

const inputQuantityHandler = ({ target }) => {
  if (target.dataset.input !== 'inputNumber') {
    return;
  }
  const listItem = target.closest('[data-id]');
  const cartItemAmount = listItem.querySelector('.cart__item-amount');
  const cartTotalAmount = document.querySelector('.cart__total-amount');
  let newCount = Number(target.value);
  if (newCount < 1) {
    newCount = 1;
  }
  if (newCount > 999) {
    newCount = 999;
  }
  target.value = newCount;
  const id = listItem.dataset.id;
  const element = userData.user.cart.cartItems.find(item => item.id === id);
  element.quantity = newCount;
  setCartCounter();
  cartItemAmount.textContent = new Intl.NumberFormat('ua-UA').format(element.quantity * element.price) + ' ₴';
  const totalAmount = getTotalAmount(userData.user.cart.cartItems);
  cartTotalAmount.textContent = new Intl.NumberFormat('ua-UA').format(totalAmount) + ' ₴';
  userData.user.cart.totalAmount = totalAmount;
  userData.user.cart.totalQuantity = getTotalQuantity(userData.user.cart.cartItems);
};

const counterHandler = e => {
  const counterBtn = e.target.closest('[data-button]');
  if (!counterBtn || (counterBtn.dataset.button !== 'decrement' && counterBtn.dataset.button !== 'increment')) return;
  const listItem = counterBtn.closest('[data-id]');
  const buttonDecrement = listItem.querySelector('[data-button="decrement"]');
  const inputNumber = listItem.querySelector('[data-input="inputNumber"]');
  const cartItemAmount = listItem.querySelector('.cart__item-amount');
  const cartTotalAmount = document.querySelector('.cart__total-amount');
  const id = listItem.dataset.id;
  const element = userData.user.cart.cartItems.find(item => item.id === id);
  if (counterBtn.dataset.button === 'decrement') {
    if (element.quantity <= 1) {
      element.quantity = 1;
    } else element.quantity -= 1;
    if (element.quantity === 1) {
      buttonDecrement.disabled = true;
    }
  }
  if (counterBtn.dataset.button === 'increment') {
    if (element.quantity >= 999) {
      element.quantity = 999;
    } else element.quantity += 1;
    buttonDecrement.disabled = false;
  }
  inputNumber.value = element.quantity;
  setCartCounter();
  cartItemAmount.textContent = new Intl.NumberFormat('ua-UA').format(element.quantity * element.price) + ' ₴';
  const totalAmount = getTotalAmount(userData.user.cart.cartItems);
  cartTotalAmount.textContent = new Intl.NumberFormat('ua-UA').format(totalAmount) + ' ₴';
  userData.user.cart.totalAmount = totalAmount;
  userData.user.cart.totalQuantity = getTotalQuantity(userData.user.cart.cartItems);
};

const removeCartItem = e => {
  const deleteBtn = e.target.closest('[data-button]');
  if (!deleteBtn) return;
  if (deleteBtn.dataset.button !== 'delete') {
    return;
  }
  const listItem = e.target.closest('[data-id]');
  const id = listItem.dataset.id;
  userData.user.cart.cartItems = [...userData.user.cart.cartItems.filter(item => item.id !== id)];
  document.querySelector('.cart__body').innerHTML = createBodyCartMarkup();
  const cartList = document.querySelector('.cart__list');
  cartList.addEventListener('click', counterHandler);
  cartList.addEventListener('click', removeCartItem);
  cartList.addEventListener('change', inputQuantityHandler);
  setCartCounter();
};

const addListener = callbackClose => {
  const buttonRef = document.createElement('button');
  buttonRef.addEventListener('click', callbackClose);
};

const createMsgMarkup = msg => {
  return `
    <div style="padding: 40px; text-align: center; font-size: 26px; font-weight: bold;">
      ${msg}
    </div>`;
};

const createOrder = closeModal => {
  closeModal();
  let token;
  if (localStorage.getItem('info')) {
    token = JSON.parse(localStorage.getItem('info')).token;
  }
  if (token) {
    userData.user.address = {};
    const productIds = userData.user.cart.cartItems.map(({ id }) => id);
    apiUsers
      .getCurrentUser()
      .then(response => {
        userData.user.address = response.data.address;
        delete userData.user.address._id;
        /*
         * Временно для тестирования заполняем все поля, иначе сервер не примет запрос
         * должна быть валидация в форме авторизации при заполнении адреса, чтобы не было пустых полей
         * (успели до того наши создать учетные записи с кое-где пустыми полями)
         */
        const keys = Object.keys(userData.user.address);
        for (const key of keys) {
          if (userData.user.address[key]) {
            continue;
          }
          userData.user.address[key] = 'x';
        }

        const order = {
          address: userData.user.address,
          productList: productIds,
        };
        return order;
      })
      .then(order => apiOrders.createNewOrder(order)) // sendOrder(JSON.stringify
      .then(response => {
     
        const msg = `<div class="cart">Ваш заказ был успешно отправлен!
          Номер вашего заказа: ${response.data.id}.
          Благодарим за выбор нашего магазина,
          надеемся, что Вы к нам заглянете ещё не раз!</div>`;
        modalModule(() => createMsgMarkup(msg), addListener);
        userData.user.cart.cartItems = [];
        userData.user.cart.totalAmount = 0;
        setCartCounter();
      })
      .catch(error => {
        const msg = `<div class="cart">Извините, сервер временно недоступен!
          Просим прощения за временные неудобства при оформлении заказов.
          Чуть попозже попробуйте ещё раз отправить Ваш заказ, пожалуйста.</div>`;
        modalModule(() => createMsgMarkup(msg), addListener);
     
      });
  } else {
    const msg = 'Зарегистрируйтесь, пожалуйста, для оформления заказа';
    modalModule(() => createMsgMarkup(msg), addListener);
  }
};

const listeners = closeModal => {
  const btnClose = document.querySelector('.btn-close');
  const btnBackToProducts = document.querySelector('.cart__button_back');
  const btnConfirm = document.querySelector('.cart__button_confirm');
  btnClose.addEventListener('click', closeModal);
  btnBackToProducts.addEventListener('click', closeModal);
  btnConfirm.addEventListener('click', () => createOrder(closeModal));
};
document.body.style.overflow = 'auto';
const showCart = () => {
  modalModule(createCartMarkup, listeners);
  const cartList = document.querySelector('.cart__list');
  cartList.addEventListener('click', counterHandler);
  cartList.addEventListener('change', inputQuantityHandler);
  cartList.addEventListener('click', removeCartItem);
};

export { addToCart, addProductsToCart, showCart };
