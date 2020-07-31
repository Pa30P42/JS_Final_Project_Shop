const createListMarkup = array => {
  return `<ul class="card_list">${array.reduce((acc, element) => {
    acc += cardCartItem(element);
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
