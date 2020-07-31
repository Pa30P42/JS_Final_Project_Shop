// apiProducts.searchProductsbyCategory('new').then(data => console.log(data.data));

export const cardCartItem = element => {
  const rating = () => {
    let markup = '';
    let number = getRandomInt(1, 6);
    for (let i = 1; i <= number; i += 1) {
      markup += `<li class="card_rating">*</li>`;
    }
    return markup;
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return `<li class="card_item" data-id=${element._id}>
  <div class="card-image">
    <img class="card_img" src="./images/sale/image1.png" alt="img" width="86"/>
    <img class="card_img-tablet" src="./images/sale/image1_tb.png" alt="img" width="149"/>
  </div>
  <img class="card_vector" src="./images/sale/Vector.svg" />
  <p class="card_name">${element.name}</p>
  <ul class="card_rating-list">${rating()}</ul>
  <div class="card_prise-block">
    <p class="card_price">${element.price}<span> &#8372;</span></p>
    
  </div>
</li>`;
};

// const createListMarkup = array => {
//   return `<ul class="card_list">${array.reduce((acc, element) => {
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
