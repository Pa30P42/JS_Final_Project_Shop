import { createSingleCardMarkup } from './cardModule';

const createListMarkup = array => {
  return `
  <section class="card container">
  <h2 class="card_description">Акции</h2>
  <ul class="card_list">${array.reduce((acc, element) => {
    acc += createSingleCardMarkup(element, 'sale');
    return acc;
  }, '')}</ul></section>`;
};

const getItem = event => {
  if (event.target !== current.target) {
    const id = event.target.closest('[data-id]').dataset.id;
    // функция Ани(id)
  } else return id;
};
export const createList = array => {
  const container = document.querySelector('.container');
  container.innerHTML = createListMarkup(array);
  container.addEventListener('click', getItem);
};