import './catalog.scss';
import catalogList from '../userData'
import subItem from '../api/products/services';
import apiProducts from '../api/products/apiProducts';




export default {
  

    refs: {
      catalogList: '',
    },

    categories: Object.values(catalogList.appliances),
    
    getLink(e) {
      console.log("nodeName", e.target.nodeName);
      // console.log(e.target.dataset.link);
      if (e.target.nodeName === "H2" && e.target.dataset.title) {
        // console.log(e.target.dataset.link);
        const link = e.target.closest('[data-title]').dataset.title;
        console.log(link);
      } else return;
    },

    catalogListMarkup() {
      return `
                <ul class="catalog__list">
                ${this.catalogItemMarkup(this.categories)}
                </ul>
                `;
    },

    getCategories (category) {
      const markup = category.categories.reduce((acc, category) => {
        acc+= `
        <li class="sub__catalog__item" data-link="${category.value}">
        <p class="sub__catalog__text">${category.name}</p>
        </li>
        `
        return acc
      }, '')
      // console.log(markup);
      return markup
    },

    catalogItemMarkup(categories) {
      return categories.reduce((acc, category) => {
        // console.log(category);
        acc += `
        <li class="catalog__item" data-link="${category.value}">
        <img src="${category.image}" alt="${category.value}" class="catalog__img" width="247" height="127">
        <h2 class="catalog__title" data-title="${category.value}">${category.name}</h2>
        <ul class="sub__catalog__list hidden">
        ${this.getCategories(category)}
        </ul>
      </li>`;
        return acc;
      }, '');
    },

   catalogListMarkupAddListeners() {
      const li = document.querySelector('.catalog__item');
      console.log(li);
    
      this.refs.catalogList = document.querySelector('.catalog__list');
      this.refs.catalogList.addEventListener('click', this.getLink);
    },
    
    
    catalogListMarkupRemoveListeners() {
      this.refs.catalogList.removeEventListener('click', this.getLink);
    },

}


// let clickLi = document.querySelector('.catalog__item');


// clickLi.addEventListener('click', () => {
//   showMenu()
// });

// function showMenu() {
//   const links =   document.querySelector('.sub__catalog__list');
//   if(links.classList.contains('hidden')) {
//     links.classList.remove('hidden');
//   }
//   else {
//     console.log('add hidden');
//     links.classList.add('hidden')
//   }
// }





// const markap = document.querySelector('#root')
// markap.insertAdjacentHTML('afterbegin', catalogListMarkup(categories))




