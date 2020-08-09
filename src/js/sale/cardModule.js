import vector_love from '../../images/sale/Vector_love.svg';
import vector from '../../images/sale/Vector.svg';

import { getElementsForFavorites } from './saleSection';
import { getImg } from './saleSection';
import apiProducts from '../api/products/apiProducts';
import getVector from './saleSection';
import userData from '../userData';

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
    
    return `<li class="card_item-sale" data-id=${element._id} data-elementname="${element.name}">
  <div class="card-image">
  ${
    userData.settings.isMobile
      ? ` <img class="card_img" src="${element.images[0]}" alt="${element.name}" width="86"/>`
      : `<img class="card_img-tablet" src="${element.images[0]}" alt="${element.name}" width="149" />`
  }

  </div>
  <div class="card-vector">

${`<img class="card_vector-notActiv"
      src="${getImg(element._id)}"
      data-favorite="${getElementsForFavorites(element)}"
      data-id="${element._id}"/>`}
  </div>


  <p class="card_name">${element.name}</p>
  <ul class="card_rating-list">${rating()}</ul>
  <div class="card_prise-block">
     ${
       sale
         ? `<p class="card_price">${Math.round(element.price * 1.3)}<span> &#8372;</span></p>
        <p class="card_price-sale">${element.price}<span> &#8372;</span></p>`
         : `<p class="card_price-sale">${element.price}<span> &#8372;</span></p>`
     }

  </div>
</li>`;
  };
  return cardItemMarkup(element);
};
