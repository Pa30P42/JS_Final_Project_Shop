import { refs } from '../components/refs.js';

export const headerMenu = () => {
  refs.sidebar.classList.remove('ishidden');
};

export const closeHeaderMenu = () => {
  refs.sidebar.classList.add('ishidden');
};
