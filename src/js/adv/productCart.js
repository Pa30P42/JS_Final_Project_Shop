import modalWindow from '../../js/components/modalModule/modalModule';
import markup from './markup';
import updateLastSeen from './lastSeen';

const productCard = item => {
  const component = () => markup(item);
  updateLastSeen(item._id);
  modalWindow(component, () => {});
};

export default productCard;
