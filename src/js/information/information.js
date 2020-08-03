import { modalModule } from '../components/modalModule/modalModule';
import markupInformation from './markup_info';

const listeners = action => {
  const btnComponent = document.querySelector('.information__close');
  btnComponent.addEventListener('click', action);
};

const information = () => {
  modalModule(markupInformation, listeners);
};

export default information;
