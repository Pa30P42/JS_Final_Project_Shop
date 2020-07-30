const container = document.querySelector('.modalModule');
// const btnTest = document.querySelector('.test'); // test button

// // === Hot to send data in modal module ===
// // ===  через component должна заходить Ваша динамицеская разметка ===

// const component = () => {
//   return `<div class="component">
//   <button class="btn_component"> action</button>
//   </div>`;
// };

// // ===  через listeners должны заходить Ваши слушатели ===

// const listeners = action => {
//   const btnComponent = document.querySelector('.btn_component');
//   btnComponent.addEventListener('click', action);
// };

//  === Module ===

const modalModule = (component, listeners) => {
  const closeModalComponent = () => {
    console.log('click');
    container.innerHTML = '';
  };

  const closeModalWindow = e => {
    console.log(e);
    if (
      e.target.classList.contains('modalOverlay') ||
      e.target.dataset.action === 'btn__closeModal' ||
      e.key === 'Escape'
    ) {
      container.innerHTML = '';
    }
  };

  const markup = `
    <div class="modalOverlay">
  
    <div class="modalComponent"></div>
  
    <button
        type="button"
        class="btn__closeModal"
        data-action="btn__closeModal"
    ></button>
    </div>
    `;

  container.innerHTML = markup;

  const modalComponent = document.querySelector('.modalComponent');
  modalComponent.innerHTML = component();
  listeners(closeModalComponent);
  const modalOverlay = document.querySelector('.modalOverlay');
  modalOverlay.addEventListener('click', closeModalWindow);
  window.addEventListener('keydown', closeModalWindow);
};

// === Пример ===
// btnTest.addEventListener('click', () => modalModule(component, listeners)); // test button
