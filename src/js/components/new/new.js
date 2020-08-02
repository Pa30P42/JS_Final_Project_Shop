import apiProducts from '../../api/products/apiProducts';
import { refs } from '../refs';
import SliderMultiItems from './SliderMultiItems';
// import axios from 'axios';

// apiProducts.getAllProducts().then(data => console.log(data.data));
// apiProducts.searchProductsbyCategory('new').then(data => console.log(data.data));
// const getProductsbyCategory = async category => {
//   try {
//     const dataCategory = await axios.get(
//       `https://goit-store.herokuapp.com/products?category=${category}`,
//     );
//     return dataCategory;
//   } catch (err) {
//     throw new Error(err);
//   }
// };

// const delay = ms => {
//   return new Promise(resolve => setTimeout(() => resolve(''), ms));
// };

let newProducts = [];

const createCardMarkup = product => {
  return `<li class="product-card" data-id="${product._id}">
    <img class="product-img" src="${product.images[0]}" alt="" width="150" height="140">
    <p class="product-name">${product.name}</p>
    <p class="product-price">${product.price}</p>
  </li>`;
};

const addNewProducts = () => {
  const divRef = refs.sections.querySelector('.new-products-wrapper');

  // divRef.innerHTML = getProductsbyCategory('new').then(createListCardsMarkup);

  divRef.insertAdjacentHTML(
    'beforebegin',
    `<h2 class="new-products__title">Новые поступления</h2>
      <div class="new-products__slider"></div>`,
  );

  const createListCardsMarkup = products => {
    return `<ul class="slider__list-cards">
    ${products.reduce((acc, product) => {
      acc += createCardMarkup(product);
      return acc;
    }, '')}
    </ul>`;
  };

  const getNewProducts = async () => {
    try {
      const response = await apiProducts.searchProductsbyCategory('new');
      // console.log('newProducts: ', response.data);
      // await delay(5000);
      divRef.innerHTML = createListCardsMarkup(response.data);
      return response.data;
    } catch (error) {
      console.log('Лог ошибки в getNewProducts ' + error);
    }
  };

  const onSelectCard = e => {
    console.log(e.target.nodeName);
    if (e.target.nodeName === 'UL') return;
    const parent = e.target.closest('[data-id]');
    const id = parent.dataset.id;
    const product = newProducts.find(item => item._id === id);
  };

  getNewProducts().then(data => {
    newProducts = [...data];
    new SliderMultiItems('.new-products-wrapper', {
      step: 1,
      isNavs: true,
      isPagination: true,
    });
    const listCards = document.querySelector('.slider__list-cards');
    listCards.addEventListener('click', onSelectCard);
  });
};

export { addNewProducts };

// const createSliderMarkup = products => {
//   return `<h2 class="new-products__title">Новые поступления</h2>
//   <div class="new-products__slider">
//     <div class="slider__body">
//       <button class="slider__controls-arrow slider__controls-arrow_left" type="button">
//         <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M9 1L1 8L9 15" stroke="black" stroke-linecap="round" stroke-linejoin="bevel"/>
//         </svg>
//       </button>
//       <div class="slider__holder">
//         <ul class="slider__list-cards">
//           ${products.reduce((acc, product) => {
//             acc += createCardMarkup(product);
//             return acc;
//           }, '')}
//         </ul>
//       </div>
//       <button class="slider__controls-arrow slider__controls-arrow_right" type="button">
//         <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M1 1L9 8L1 15" stroke="black" stroke-linecap="round" stroke-linejoin="bevel"/>
//         </svg>
//       </button>
//     </div>
//     <div class="slider__controls-dots">
//       ${products.reduce((acc, product, index) => {
//         acc += `<button class="slide-dot" type="button" data-index="${index}"></button>`;
//         return acc;
//       }, '')}
//     </div>
//   </div>`;
// };
