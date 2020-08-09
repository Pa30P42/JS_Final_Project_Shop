import { refs } from './refs';
import showLastSeen from './lastSeenOutput';
import { createSingleCardMarkup } from '../sale/cardModule';
import productCard from '../adv/productCard';
import SliderMI from './sliderMI/sliderMI';
import products from './products.json';
import { selectImg } from '../sale/saleSection';

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

const onSelectCard = (e, products) => {
  if (e.target.className === 'slider__list-cards') {
    return;
  }
  const id = e.target.closest('[data-id]').dataset.id;
  if (!e.target.dataset.favorite) {
    const product = products.find(item => item._id === id);
    productCard(product);
  }
};

let sliderInstances = [];

const addNewAndLastSeen = () => {
  if (sliderInstances.length) {
    sliderInstances.forEach(instance => instance.removeListeners());
  }
  sliderInstances = [];
  const newProducts = products.filter(item => item.category === 'new');
  const lastSeenProducts = showLastSeen(products);

  const newRef = refs.sections.querySelector('.new-products-wrapper');
  if (newProducts) {
    newRef.insertAdjacentHTML('afterbegin', createCardsListMarkup(newProducts));
    newRef.insertAdjacentHTML('afterbegin', newHeadMarkup());

    const newSlider = new SliderMI('.new-products-wrapper', {
      step: 1,
      isNavs: true,
      isPagination: true,
    });
    sliderInstances.push(newSlider);

    const newListCards = newRef.querySelector('.slider__list-cards');
    newListCards.addEventListener('click', selectImg);
    newListCards.addEventListener('click', e => {
      onSelectCard(e, newProducts);
    });
  }

  if (lastSeenProducts.length) {
    const lastSeenRef = refs.sections.querySelector('.last-seen-wrapper');
    lastSeenRef.insertAdjacentHTML('afterbegin', lastSeenHeadMarkup());
    lastSeenRef.insertAdjacentHTML('afterbegin', createCardsListMarkup(lastSeenProducts));

    const lastSlider = new SliderMI('.last-seen-wrapper', {
      step: 1,
      isNavs: true,
      isPagination: true,
    });
    sliderInstances.push(lastSlider);
    const lastSeenList = lastSeenRef.querySelector('.slider__list-cards');
    lastSeenList.addEventListener('click', selectImg);
    lastSeenList.addEventListener('click', e => {
      onSelectCard(e, lastSeenProducts);
    });
  }
};

export { addNewAndLastSeen, onSelectCard };
