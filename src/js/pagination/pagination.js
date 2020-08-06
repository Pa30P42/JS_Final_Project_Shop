import './pagination.scss';
import apiProducts from '../api/products/apiProducts';
// import deviceWidth from '../setting';
import userData from '../userData';
// import { createList } from '../sale/saleSection';
// import { createSingleCardMarkup } from '../sale/cardModule';
// import productCard from '../adv/productCard';
// import products from '../components/products';
// // import { onSelectCard } from '../components/new';
// //
// //
// //
// //
// //
// // =============== MARKUP ================= //

// const createPaginationItemMarkup = number => {
//   let markup = '';

//   for (let i = 1; i <= number; i += 1) {
//     markup += `<li class="products_pagination__item" data-pagenumber="${i}"><span class="products_pagination__item_number">${i}</span>
//   </li>`;
//   }

//   return markup;
// };

// export const createPaginationMarkup = totalProducts => {
//   // console.log('totalProducts', totalProducts);
//   // console.log('userData.pagination.perPage', userData.pagination.perPage);
//   // console.log('userData.pagination.currentPage', userData.pagination.currentPage);
//   userData.pagination.totalProducts = totalProducts;

//   c

//   let maxProd;
//   if (userData.pagination.currentPage === userData.pagination.maxPages) {
//     maxProd = userData.pagination.maxPages;
//   } else maxProd = userData.pagination.perPage * userData.pagination.currentPage;
//   let numberOfPages = userData.pagination.maxPages;
//   let minProd = maxProd - userData.pagination.perPage + 1;
//   // console.log('maxProd', maxProd);
//   // console.log('minProd', minProd);

//   if (
//     (deviceWidth.isMobile || deviceWidth.isTablet || deviceWidth.isDesktop) &&
//     userData.pagination.totalProducts > userData.pagination.perPage
//   ) {
//     let markup = `
//       <ul class="products_pagination">
//         ${createPaginationItemMarkup(numberOfPages)}
//         <li class="products_pagination__item" data-pagenumber="next"><span
//           class="products_pagination__item_next">&#62
// </span>
//         </li>
//         <li class="products_pagination__item" data-pagenumber="end"><span class="products_pagination__item_end">
// &#8811</span>
//         </li>
//       </ul>

//         <p class="products_pagination__description">Показано с ${minProd} по ${maxProd} из ${totalProducts}</p>`;

//     return markup;
//   } else return '';
// };

// // ===================

// export async function createPagination(link, pagenumber = 1) {
//   // console.log('CRpageLINK', link);

//   const response = await apiProducts.getProductsWithPagination(link, pagenumber).then(res => res.data);

//   if (!userData.categories[link]) {
//     userData.categories[link] = await apiProducts.getCountOfProducts(link);
//   }
//   console.log(userData.categories);
//   return {
//     array: response,
//     paginationMarkup: createPaginationMarkup(userData.categories[link]),
//     getPaginationPage,
//   };
// }
// //
// //
// //
// //
// //
// // =============== LOGIC ================= //

// export async function getPaginationPage(e, category) {
//   // console.log('Hoooray', e.target);
//   // console.log('e.target', e.target);
//   const pagination = await createPagination(userData.getValue(category), userData.pagination.currentPage);

//   const onSelectCard = (e, items) => {
//     items = pagination.array;
//     console.log('Marina', e.target);
//     if (e.target.nodeName === 'UL') return;
//     const id = e.target.closest('[data-id]').dataset.id;
//     const product = items.find(item => item._id === id);
//     productCard(product);
//     // const imgMain = document.querySelector('.product__image img');
//     // imgMain.src = product.images[0];
//   };

//   const cardList = document.querySelector('.card_list');
//   cardList.addEventListener('click', onSelectCard);
//   // userData.pagination.maxPages = Math.ceil(
//   //   userData.pagination.totalProducts / userData.pagination.perPage,
//   // );

//   // if (e.target.closest('[data-id]')) {
//   // }

//   if (e.target.nodeName !== 'SPAN' || e.target.dataset.pagenumber === 'undefined') {
//     return;
//   }
//   if (
//     (e.target.nodeName === 'SPAN' || e.target.dataset.pagenumber) &&
//     e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'next' &&
//     e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'end'
//   ) {
//     userData.pagination.currentPage = Number(e.target.closest('[data-pagenumber]').dataset.pagenumber);
//   }
//   if (e.target.closest('[data-pagenumber]')) {
//     if (e.target.closest('[data-pagenumber]').dataset.pagenumber === 'next') {
//       if (userData.pagination.currentPage < userData.pagination.maxPages) {
//         userData.pagination.currentPage = Number(userData.pagination.currentPage) + 1;
//       } else if (userData.pagination.currentPage >= userData.pagination.maxPages) {
//         userData.pagination.currentPage = Number(userData.pagination.currentPage);
//       }
//     }
//   }
//   if (e.target.closest('[data-pagenumber]')) {
//     if (e.target.closest('[data-pagenumber]').dataset.pagenumber === 'end') {
//       userData.pagination.currentPage = userData.pagination.maxPages;
//     }
//   }

//   //   console.log(userData.perPage);
//   //   console.log(userData.currentPage);

//   const markup = pagination.array.reduce((acc, element) => {
//     acc += createSingleCardMarkup(element, category);

//     return acc;
//   }, '');
//   cardList.innerHTML = markup;
// }

// //
// //
// //
// //
// //
// // ============== Get Item For Card ===============

// ========================================================
// ========================================================

export const createNewPagination = async (searchValue, destination, innerMarkup, search) => {
  const constructor = {
    searchValue,
    destination,
    products: [],
    countOfProducts: 0,
    currentPage: 1,
    minProd: 0,
    maxProd: 0,
    countOfPages: 0,
  };

  const createPaginationTabs = () => {
    const createLiMarkup = () => {
      let markup = '';
      for (let i = 1; i <= constructor.countOfPages; i += 1) {
        markup += `<li class="products_pagination__item" data-pagenumber="${i}">
                <span class="products_pagination__item_number" data-pagenumber="${i}">${i}</span>
              </li>`;
      }
      return markup;
    };

    const createUlMarkup = () => {
      return `<ul class="products_pagination">
      ${constructor.countOfProducts <= userData.pagination.perPage ? '' : createLiMarkup()}
      ${
        constructor.countOfProducts <= userData.pagination.perPage
          ? ''
          : `<li class="products_pagination__item" data-pagenumber="${
              constructor.currentPage >= constructor.countOfPages
                ? constructor.countOfPages
                : constructor.currentPage + 1
            }"><span
      class="products_pagination__item_next" data-pagenumber="${
        constructor.currentPage >= constructor.countOfPages ? constructor.countOfPages : constructor.currentPage + 1
      }">&#62
      </span>
      </li>
      <li class="products_pagination__item" data-pagenumber="${
        constructor.countOfPages
      }"><span class="products_pagination__item_end" data-pagenumber="${constructor.countOfPages}">
      &#8811</span>
      </li>

      </ul>
      
      <p class="products_pagination__description">Показано с ${constructor.minProd} по ${constructor.maxProd} из ${
              constructor.countOfProducts
            }</p>`
      }`;
    };
    return createUlMarkup();
  };

  const getMinMax = () => {
    constructor.minProd = constructor.currentPage * userData.pagination.perPage - userData.pagination.perPage + 1;
    constructor.maxProd =
      constructor.currentPage * userData.pagination.perPage > constructor.countOfProducts
        ? constructor.countOfProducts
        : constructor.currentPage * userData.pagination.perPage;
  };

  const getTab = async e => {
    if (e.target === e.currentTarget) {
      return;
    }

    constructor.currentPage = Number(e.target.dataset.pagenumber);

    if (search) {
      await await apiProducts.getSearchWithPagination(searchValue).then(res => (constructor.products = res.data));
    } else
      await apiProducts
        .getProductsWithPagination(searchValue, constructor.currentPage, userData.pagination.perPage)
        .then(res => (constructor.products = res.data));

    getMinMax();

    cardsMarkups();
  };

  const paginationTabsListener = () => {
    const paginationWrapper = document.querySelector('.pagination_wrapper');
    paginationWrapper.addEventListener('click', getTab);

    paginationWrapper.querySelector(`[data-pagenumber="${constructor.currentPage}"]`) &&
      paginationWrapper
        .querySelector(`[data-pagenumber="${constructor.currentPage}"]`)
        .classList.add('active_pagination_tab');
  };

  const getCategory = async () => {
    const reqParamName = userData.getName(searchValue);

    const reqParamValue = userData.getValue(searchValue);

    await apiProducts
      .getCountOfProducts(reqParamValue ? reqParamValue : reqParamName)
      .then(res => (constructor.countOfProducts = res));
    await apiProducts
      .getProductsWithPagination(
        reqParamValue ? reqParamValue : reqParamName,
        constructor.currentPage,
        userData.pagination.perPage,
      )
      .then(res => (constructor.products = res.data));
    constructor.countOfPages = Math.ceil(constructor.countOfProducts / userData.pagination.perPage);
  };

  const getSearch = async () => {
    await apiProducts.getSearchWithPagination(searchValue).then(res => (constructor.products = res.data));

    await apiProducts.searchProductsbyName(searchValue).then(res => (constructor.countOfProducts = res.data.length));
    constructor.countOfPages = Math.ceil(constructor.countOfProducts / userData.pagination.perPage);
  };

  const cardsMarkups = () => {
    innerMarkup(constructor.products, createPaginationTabs(), constructor.searchValue);
    paginationTabsListener();
  };

  if (searchValue.constructor.name === 'String') {
    if (search) {
      await getSearch();
    } else await getCategory();

    getMinMax();

    createPaginationTabs();
    cardsMarkups();
  }
};

// ==================================== SEARCH =================================================================
// const getRequest = async () => {
//   if (
//     userData.categoriesItems.some(category => category.value.toLowerCase().includes(searchValue.toLowerCase())) ||
//     userData.categoriesItems.some(category => category.name.toLowerCase().includes(searchValue.toLowerCase()))
//   ) {
//     await apiProducts
//       .getProductsWithPagination(searchValue, constructor.currentPage, userData.pagination.perPage)
//       .then(res => (constructor.products = res.data));
//     // constructor.countOfPages = Math.ceil(constructor.countOfProducts / userData.pagination.perPage);
//   } else {
//     await apiProducts.getSearchWithPagination(searchValue).then(res => (constructor.products = res.data));
//   }
// };

// const getCount = async () => {
//   if (
//     userData.categoriesItems.some(category => category.value.toLowerCase().includes(searchValue.toLowerCase())) ||
//     userData.categoriesItems.some(category => category.name.toLowerCase().includes(searchValue.toLowerCase()))
//   ) {
//     await apiProducts.getCountOfProducts(searchValue).then(res => (constructor.countOfProducts = res));
//     constructor.countOfPages = Math.ceil(constructor.countOfProducts / userData.pagination.perPage);
//   } else {
//     await apiProducts.searchProductsbyName(searchValue).then(res => (constructor.countOfProducts = res.data.length));
//     constructor.countOfPages = Math.ceil(constructor.countOfProducts / userData.pagination.perPage);
//   }
// };
