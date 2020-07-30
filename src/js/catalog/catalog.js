import './catalog.scss';
import catalogList from '../userData'
import subItem from '../api/products/services';
import apiProducts from '../api/products/apiProducts';


const isMobile = true;
const isTablet = false;
const isDesktop = false;

export default {
  

    refs: {
      catalogList: '',
    },

    // if (isMobile){
    //   const subCatalogList =  this.refs.catalogList.querySelectorAll('.sub__catalog__list')
    //   for (const subCatalog of subCatalogList) {
    //     subCatalog.classList.add('hidden')
    //   }

    categories: Object.values(catalogList.appliances),
    
    getLink(e) {

      // console.log("nodeName", e.target.nodeName);
// console.log(e.target);
      // if (e.target.dataset.sublink) {
      //   console.log(e.target.dataset.sublink);
      // }
// console.log(e.target);
      if ((e.target.nodeName === "LI" || e.target.nodeName === "P")  && e.target.closest('[data-sublink]')) {
        const subLink = e.target.closest('[data-sublink]').dataset.sublink
        console.log(subLink);
      }

      if (e.target.nodeName === "H2" && e.target.dataset.title) {

        if (isMobile || isTablet) {
        const activeSubCatalog = this.refs.catalogList.querySelector('.active') 

        

        if (activeSubCatalog) {
          activeSubCatalog.classList.remove('active')
          activeSubCatalog.classList.add('hidden')
        } 


        console.log(activeSubCatalog);
        console.log(e.target);

        // if (activeSubCatalog.closest('[data-title]') === e.target) {
        //   e.target.classList.remove('active')
        //   e.target.classList.add('hidden')
        // }

        const catalog = e.target.closest('[data-link]')
        const subCatalog = catalog.querySelector('.sub__catalog__list')

        subCatalog.classList.add('active')
        

      }
      }
    },

    getVisibilitySubCatalog() {
      if (isMobile || isTablet) {
        return 'hidden'
      } else return 'active'
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
        <li class="sub__catalog__item" data-sublink="${category.value}">
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
        <ul class="sub__catalog__list ${this.getVisibilitySubCatalog()}">
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
      this.refs.catalogList.addEventListener('click', this.getLink.bind(this));
    },
    
    
    catalogListMarkupRemoveListeners() {
      this.refs.catalogList.removeEventListener('click', this.getLink);
    },

}


// let clickLi = document.querySelector('.catalog__item');


// clickLi.addEventListener('click', showMenu)


// function showMenu() {
//   const links = document.querySelector('.sub__catalog__list');
//   if(links.classList.contains('hidden')) {
//     links.classList.remove('hidden');
//   }
//   else {
//     links.classList.add('hidden')
//   }
// }





// const markap = document.querySelector('#root')
// markap.insertAdjacentHTML('afterbegin', catalogListMarkup(categories))




