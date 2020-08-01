import apiProducts from '../api/products/apiProducts';
// import vector from '';
const userData = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
};

// apiProducts.searchProductsbyCategory('new').then(data => parsData(data.data));

// function parsData(products) {
//   const body = document.querySelector('body');
//   body.innerHTML = cardItemMarkup(products[0]);
//   console.log(products);
//   // cardItemMarkup(products[0]);
// }
export const createSingleCardMarkup = (element, sale) => {
  const rating = () => {
    let markup = '';
    let number = getRandomInt(1, 6);
    for (let i = 1; i <= number; i += 1) {
      markup += `<li class="card_rating"></li>`;
    }
    return markup;
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const cardItemMarkup = element => {
    return `<li class="card_item" data-id=${element._id}>
  <div class="card-image">
  ${
    userData.isMobile
      ? ` <img class="card_img" src="${element.images[0]}" alt="${element.name}" width="86"/>`
      : `<img class="card_img-tablet" src="${element.images[0]}" alt="${element.name}" width="149"/>`
  }
 
  </div>
  <img class="card_vector" src="./images/sale/Vector.svg" />
  <p class="card_name">${element.name}</p>
  <ul class="card_rating-list">${rating()}</ul>
  <div class="card_prise-block">
     ${
       sale
         ? `<p class="card_price">${
             element.price * 1.3
           }<span> &#8372;</span></p>
        <p class="card_price-sale">${element.price}<span> &#8372;</span></p>`
         : `<p class="card_price-sale">${element.price}<span> &#8372;</span></p>`
     }

  </div>
</li>`;
  };
  return cardItemMarkup(element);
};
// const createListMarkup = array => {
// return `<ul class="card_list">${array.reduce((acc, element) => {
//     acc += cardCartItem(element);
//     return acc;
//   }, '')}</ul>`;
// };

// const getItem = event => {
//   if (event.target !== current.target) {
//     const id = event.target.closest('[data-id]').dataset.id;
//     // функция Ани(id)
//   } else return id;
// };
// const createList = array => {
//   const container = document.querySelector('.container');
//   container.innerHTML = createListMarkup(array);
//   container.addEventListener('click', getItem);
// };
