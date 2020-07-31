import { refs } from './refs';

import vodafone from '../../images/trigger/vodafone.png';
import life from '../../images/trigger/lifecell.png';
import kyivstar from '../../images/trigger/kyivstar.png';
import { modalModule } from './modalModule/modalModule';

export default {
  refs: {
    triggerHidden: '',
    triggerNotHidden: '',
    body: '',
    liRef: document.querySelectorAll('.header__nav__input_phone'),
  },

  triggerMarkup() {
    return `
          <div class="trigger-wrapper ">
             <ul class="trigger-list">
               <li class="trigger-list__item"><div class="img-icon-wrapper"><img src = ${vodafone} alt = "icon"  class= "imgIcon"></div><a href="tel:380503333796" class="trigger-list__item_vodafone">+38 (050)
                   333-37-96</a></li>
               <li class="trigger-list__item"><div class="img-icon-wrapper"><img src = "${life}" alt = "icon" width= "14" height ="14"></div><a href="tel:380738373737" class="trigger-list__item_lifecell">+38 (073)
                   837-37-37</a></li>
               <li class="trigger-list__item"><div class="img-icon-wrapper"><img src = "${kyivstar}" alt = "icon" width= "14" height ="14"></div><a href="tel:380688773737" class="trigger-list__item_kyivstar">+38 (068)
                   877-37-37</a></li>
             </ul>
            </div>
        `;
  },

  triggerMarkupListener() {
    refs.triggerNotHidden = document.querySelector('.trigger-wrapper');
    refs.triggerHidden = document.querySelectorAll('.ishiddenTrigger');
    refs.body = document.querySelector('body');
  },
  triggerFn() {
    modalModule(this.triggerMarkup, this.triggerMarkupListener);
    // this.refs.liRef[0].insertAdjacentHTML('afterbegin', this.triggerMarkup());
    // this.refs.liRef[1].insertAdjacentHTML('afterbegin', this.triggerMarkup());
    // this.refs.liRef[2].insertAdjacentHTML('afterbegin', this.triggerMarkup());
    // this.triggerMarkupListener();
  },
  openTrigger() {
    refs.triggerHidden[0].classList.toggle('ishiddenTrigger');
    refs.triggerHidden[1].classList.toggle('ishiddenTrigger');
    refs.triggerHidden[2].classList.toggle('ishiddenTrigger');

    refs.sections.addEventListener('click', e => {
      this.removeListenerFromTrigger(e);
      // if (e.target !== refs.triggerNotHidden) {
      //   refs.triggerHidden[0].classList.add('ishiddenTrigger');
      //   refs.triggerHidden[1].classList.add('ishiddenTrigger');
      //   refs.triggerHidden[2].classList.add('ishiddenTrigger');
      // }
      refs.sections.removeEventListener(
        'click',
        this.removeListenerFromTrigger(e),
      );
    });
  },
  removeListenerFromTrigger(e) {
    if (e.target !== refs.triggerNotHidden) {
      refs.triggerHidden[0].classList.add('ishiddenTrigger');
      refs.triggerHidden[1].classList.add('ishiddenTrigger');
      refs.triggerHidden[2].classList.add('ishiddenTrigger');
    }
  },
};
