export const saleCartItem = element => {
  return `<li class="sale_item" data-id=${element._id}>
  <div class="sale-image">
    <img class="sale_img" src="./images/sale/image1.png" alt="img" width="86"/>
    <img class="sale_img-tablet" src="./images/sale/image1_tb.png" alt="img" width="149"/>
  </div>
  <img class="sale_vector" src="./images/sale/Vector.svg" />
  <p class="sale_name">${element.name}</p>
  <ul class="sale_rating-list">${rating()}</ul>
  <div class="sale_prise-block">
    <p class="sale_price">${element.price}<span> &#8372;</span></p>
  </div>
</li>`;
};
const createListMarkup = array => {
  return `<ul class="sale_list">${array.reduce((acc, element) => {
    acc += saleCartItem(element);
    return acc;
  }, '')}</ul>`;
};
const getItem = event => {
  if (event.target !== current.target) {
    const id = event.target.closest('[data-id]').dataset.id;
    // функция Ани(id)
  } else return id;
};
const createList = array => {
  const container = document.querySelector('.container');
  container.innerHTML = createListMarkup(array);
  container.addEventListener('click', getItem);
};
