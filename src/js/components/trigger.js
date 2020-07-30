import { refs } from './refs';

export default {
  refs: {
    triggerHidden: '',
  },

  triggerMarkup() {
    return `
          <div class="trigger-wrapper ishiddenTrigger">
             <ul class="trigger-list">
               <li class="trigger-list__item"><a href="tel:380503333796" class="trigger-list__item_vodafone">+38 (050)
                   333-37-96</a></li>
               <li class="trigger-list__item"><a href="tel:380738373737" class="trigger-list__item_lifecell">+38 (073)
                   837-37-37</a></li>
               <li class="trigger-list__item"><a href="tel:380688773737" class="trigger-list__item_kyivstar">+38 (068)
                   877-37-37</a></li>
             </ul>
            </div>
        `;
  },

  triggerMarkupListener() {
    const triigerWrapper = document.querySelector('.trigger-wrapper');
    refs.triggerHidden = document.querySelector('.ishiddenTrigger');
  },
  triggerFn() {
    refs.sections.insertAdjacentHTML('afterbegin', this.triggerMarkup());
    this.triggerMarkupListener();
  },
  openTrigger() {
    console.log(refs.triggerHidden);
    if (refs.triggerHidden.classList.contains('ishiddenTrigger')) {
      refs.triggerHidden.classList.remove('ishiddenTrigger');
    }
  },
};
