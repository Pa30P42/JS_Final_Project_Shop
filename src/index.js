import './sass/main.scss';
import { containerHandler } from './js/container/container';
import './js/servicesTest/servicesTest';
import { cardCartItem } from './js/sale/cardModule';
import { refs } from './js/components/refs';
//containerHandler();

console.log('hi');
refs.container.insertAdjacentHTML('afterbegin', cardCartItem);
console.log(refs);
