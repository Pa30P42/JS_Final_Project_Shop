import './catalog.scss';
import catalogList from '../userData'
import subItem from '../api/products/services';
import apiProducts from '../api/products/apiProducts';
import {modalModule} from '../components/modalModule/modalModule'
import {closeHeaderMenu} from '../sideBar/headerSideBar'



const isMobile = true;
const isTablet = false;
const isDesktop = false;


  

   const refs =  {
      catalogList: '',
      subCatalogList: '',
    };



    const categories = Object.values(catalogList.appliances);
    
    function getLink(e) {


      if ((e.target.nodeName === "LI" || e.target.nodeName === "P")  && e.target.closest('[data-sublink]')) {
        const subLink = e.target.closest('[data-sublink]').dataset.sublink
        closeHeaderMenu()
        return subLink
      } 

      if (e.target.nodeName === "H2" && e.target.dataset.title) {

        if (isMobile || isTablet) {
        const activeSubCatalog = refs.catalogList.querySelector('.catalog__active') 

        const catalog = e.target.closest('[data-link]')       
        const subCatalog = catalog.querySelector('.sub__catalog__list')

        subCatalog.classList.toggle('catalog__active')


        if (activeSubCatalog) {
          activeSubCatalog.classList.remove('catalog__active')
          activeSubCatalog.classList.add('catalog__hidden')
        } 
      
        const catalogLink = e.target.closest('[data-sublink]')
      }
      }

    }


    function incomingData (e) {
      if ((e.target.nodeName === "LI" || e.target.nodeName === "P")  && e.target.closest('[data-categoryName]')) {
        const categoryNameLink = e.target.dataset.categoryname
        console.log("categoryNameLink", categoryNameLink);


        //! ==============================================================================
        //? вместо console.log вставляем функцию Ани которая принимает массив продуктов для открисовки категории по клику

        // apiProducts.searchProductsbyCategory(`${categoryNameLink}`).then(data => createList(data.data));
        
      } 
    }

    function getVisibilitySubCatalog() {
      if (isMobile || isTablet) {
        return 'catalog__hidden'
      } else return 'catalog__active'
    }

   export function catalogListMarkup() {
      return `
                <ul class="catalog__list">
                ${catalogItemMarkup(categories)}
                </ul>
                `;

    }

    

    function getCategories (category) {
      const markup = category.categories.reduce((acc, category) => {
        acc+= `
        <li class="sub__catalog__item" data-sublink="${category.value}">
        <p class="sub__catalog__text" data-categoryName="${category.value}">${category.name}</p>
        </li>
        `
        return acc
      }, '')
      // console.log(markup);
      return markup
    }

    function catalogItemMarkup(categories) {
      return categories.reduce((acc, category) => {
        // console.log(category);
        acc += `
        <li class="catalog__item" data-link="${category.value}">
        <img src="${category.image}" alt="${category.value}" class="catalog__img" width="247" height="127">
        <h2 class="catalog__title" data-title="${category.value}">${category.name}</h2>
        <ul class="sub__catalog__list ${getVisibilitySubCatalog()}">
        ${getCategories(category)}
        </ul>
      </li>`;
        return acc;
      }, '');
    }

    export function catalogListMarkupAddListeners() {
      const li = document.querySelector('.catalog__item');
    
      refs.catalogList = document.querySelector('.catalog__list');
      refs.catalogList.addEventListener('click', getLink);
      refs.catalogList.addEventListener('click', incomingData)
      // refs.subCatalogList = document.querySelector('.sub__catalog__list')
    }
    
    
    function catalogListMarkupRemoveListeners() {
      refs.catalogList.removeEventListener('click', getLink);
    }

    export function listeners  (action) {

      const getSubCatalogLink = (e) => {
        const link = getLink(e)
        // console.log(link);
        if (link) {         
          action()
        }
      }
      const catalogList = document.querySelector('.catalog__list');
      catalogList.addEventListener('click', getSubCatalogLink);

    }







