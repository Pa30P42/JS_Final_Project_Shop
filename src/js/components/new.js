// import apiProducts from '../api/products/apiProducts';
import { refs } from './refs';
import showLastSeen from './lastSeenOutput';
import { createSingleCardMarkup } from '../sale/cardModule';
import productCard from '../adv/productCard';
import SliderMI from './sliderMI/sliderMI';
import axios from 'axios';
import userData from '../userData';
import products from './products';

const delay = ms => {
  return new Promise(resolve => setTimeout(() => resolve(''), ms));
};

const newHeadMarkup = () => {
  return `
  <h2 class="new-products__title">Новые поступления</h2>`;
};

const lastSeenHeadMarkup = () => {
  return `
  <h2 class="last-seen__title">Недавно просматривали</h2>`;
};

const createCardsListMarkup = products => {
  return `<ul class="slider__list-cards">
    ${products.reduce((acc, product) => {
      if (product) {
        acc += createSingleCardMarkup(product, false);
      }
      return acc;
    }, '')}
    </ul>`;
};

const addNewAndLastSeen = () => {
  // const products = userData.allProducts;
  const newProducts = products.filter(item => item.category === 'new');
  const lastSeenProducts = showLastSeen(products);

  const onSelectCard = (e, products) => {
    if (e.target.nodeName === 'UL') return;
    const id = e.target.closest('[data-id]').dataset.id;
    const product = products.find(item => item._id === id);
    productCard(product);
    const imgMain = document.querySelector('.product__image img');
    imgMain.src = product.images[0];
  };

  const newRef = refs.sections.querySelector('.new-products-wrapper');
  if (newProducts) {
    newRef.insertAdjacentHTML('afterbegin', createCardsListMarkup(newProducts));
    newRef.insertAdjacentHTML('afterbegin', newHeadMarkup());

    new SliderMI('.new-products-wrapper', {
      step: 1,
      isNavs: true,
      isPagination: true,
    });

    const newListCards = newRef.querySelector('.slider__list-cards');
    newListCards.addEventListener('click', e => {
      onSelectCard(e, newProducts);
    });
  }

  if (lastSeenProducts.length) {
    const lastSeenRef = refs.sections.querySelector('.last-seen-wrapper');
    lastSeenRef.insertAdjacentHTML('afterbegin', lastSeenHeadMarkup());
    lastSeenRef.insertAdjacentHTML('afterbegin', createCardsListMarkup(lastSeenProducts));

    new SliderMI('.last-seen-wrapper', {
      step: 1,
      isNavs: true,
      isPagination: true,
    });

    const lastSeenList = lastSeenRef.querySelector('.slider__list-cards');
    lastSeenList.addEventListener('click', e => {
      onSelectCard(e, lastSeenProducts);
    });
  }
};
export { addNewAndLastSeen };
