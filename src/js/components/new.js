// import apiProducts from '../api/products/apiProducts';
import { refs } from './refs';
import showLastSeen from './lastSeenOutput';
import { createSingleCardMarkup } from '../sale/cardModule';
import productCard from '../adv/productCard';
import SliderMI from './sliderMI/sliderMI';
import axios from 'axios';

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

let newProducts = [];
let products = [];

// divRef.innerHTML = getProductsbyCategory('new').then(createListCardsMarkup);

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
      acc += createSingleCardMarkup(product, false);
      return acc;
    }, '')}
    </ul>`;
};

const addNewAndLastSeen = () => {
  const getAllProducts = async () => {
    try {
      const response = await axios.get('https://goit-store.herokuapp.com/products');
      return response.data;
    } catch (error) {
      console.log('Лог ошибки в getAllProducts ' + error);
    }
  };

  getAllProducts().then(data => {
    const products = [...data];
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

    // console.log(newProducts);
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
    // console.log(lastSeenProducts);
    if (lastSeenProducts) {
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
  });
  // const onSelectCard = e => {
  //   // console.log(e.target.nodeName);
  //   if (e.target.nodeName === 'UL') return;
  //   const parent = e.target.closest('[data-id]');
  //   const id = parent.dataset.id;
  //   const product = newProducts.find(item => item._id === id);
  //   // console.log(product);
  //   productCard(product);
  //   /*--------- temporary: ---------*/
  //   const imgMain = document.querySelector('.product__image img');
  //   imgMain.src = product.images[0];
  //   /*------------------------------*/
  // };

  /*
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
*/

  // getNewProducts().then(data => {
  //   newProducts = [...data];
  //   new SliderMultiItems('.new-products-wrapper', {
  //     step: 1,
  //     isNavs: true,
  //     isPagination: true,
  //   });
  //   const listCards = document.querySelector('.slider__list-cards');
  //   listCards.addEventListener('click', onSelectCard);
  // });
};
export { addNewAndLastSeen };
// export { createNewListMarkup, onSelectCard, newHeadMarkup };

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
