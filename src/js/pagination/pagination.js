import './pagination.scss';
import apiProducts from '../api/products/apiProducts';
import deviceWidth from '../setting';

// export const refsPagination = {
//   pagination: document.querySelector('.products_pagination'),
// };

export const userData = {
  pagination: {
    currentPage: 1,
    maxPages: 0,
    totalProducts: 0,
    perPage: 0,
    pagesCount: 0,
    category: '',
  },
};

const paginationPerPage = () => {
  // console.log('outside if', deviceWidth.isMobile, userData.pagination.perPage);
  if (deviceWidth.isMobile) {
    userData.pagination.perPage = 6;
    // console.log('in if', deviceWidth.isMobile, userData.pagination.perPage);
  } else if (deviceWidth.isTablet) {
    userData.pagination.perPage = 9;
    // console.log('in if', deviceWidth.isTablet, userData.pagination.perPage);
  } else if (deviceWidth.isDesktop) {
    userData.pagination.perPage = 10;
    // console.log('in if', deviceWidth.isDesktop, userData.pagination.perPage);
  }
  // console.log('after if', deviceWidth, userData.pagination.perPage);
};

console.log(paginationPerPage);
//
//
//
//
//
// =============== MARKUP ================= //

const createPaginationItemMarkup = number => {
  // console.log('number', number);
  let markup = '';
  for (let i = 1; i <= number; i += 1) {
    markup += `<li class="products_pagination__item" data-pagenumber="${i}"><span class="products_pagination__item_number">${i}</span>
  </li>`;
  }
  return markup;
};

//
//
//
//
//

export const createPaginationMarkup = totalProducts => {
  // console.log('DATA', totalProducts);
  userData.pagination.totalProducts = totalProducts.length;

  // console.log('outside if', deviceWidth.isMobile, userData.pagination.perPage);
  if (deviceWidth.isMobile) {
    userData.pagination.perPage = 6;
    // console.log('in if', deviceWidth.isMobile, userData.pagination.perPage);
  } else if (deviceWidth.isTablet) {
    userData.pagination.perPage = 9;
    // console.log('in if', deviceWidth.isTablet, userData.pagination.perPage);
  } else if (deviceWidth.isDesktop) {
    userData.pagination.perPage = 10;
    // console.log('in if', deviceWidth.isDesktop, userData.pagination.perPage);
  }
  // console.log('after if', deviceWidth, userData.pagination.perPage);

  userData.pagination.maxPages = Math.ceil(
    userData.pagination.totalProducts / userData.pagination.perPage,
  );

  let numberOfPages = userData.pagination.maxPages;

  // console.log('userData.pagination.maxPages', userData.pagination.maxPages);
  // console.log('userData', userData);

  let maxProd = userData.pagination.perPage * userData.pagination.currentPage;
  let minProd = maxProd - userData.pagination.perPage + 1;
  // console.log('maxProd', maxProd);
  // console.log('minProd', minProd);

  if (
    (deviceWidth.isMobile || deviceWidth.isTablet || deviceWidth.isDesktop) &&
    userData.pagination.totalProducts > userData.pagination.perPage
  ) {
    // console.log('numberOfPagesIF', numberOfPages);
    // console.log(
    //   'userData.pagination.totalProducts',
    //   userData.pagination.totalProducts,
    // );

    let markup = `
      <ul class="products_pagination">
        ${createPaginationItemMarkup(numberOfPages)}
        <li class="products_pagination__item" data-pagenumber="next"><span
          class="products_pagination__item_next">next</span>
        </li>
        <li class="products_pagination__item" data-pagenumber="end"><span class="products_pagination__item_end">end</span>
        </li>
      </ul>
  
        <p class="products_pagination__description">Показано с ${minProd} по ${maxProd} из ${
      totalProducts.length
    }</p>`;

    return markup;
  } else return '';
};

//
//
//
//
//
// =============== LOGIC ================= //

export function getPaginationPage(e, category) {
  // console.log('Hello Pagination', e.target.dataset.pagenumber);
  userData.pagination.currentPage = 1;

  if (
    (e.target.nodeName === 'SPAN' || e.target.dataset.pagenumber) &&
    e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'next' &&
    e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'end'
  ) {
    // console.log('Hoooray', e.target);
    userData.pagination.currentPage = Number(
      e.target.closest('[data-pagenumber]').dataset.pagenumber,
    );
  } else if (
    e.target.closest('[data-pagenumber]').dataset.pagenumber === 'next'
  ) {
    if (userData.pagination.currentPage < userData.pagination.maxPages) {
      // console.log('userDataALL', userData);
      userData.pagination.currentPage =
        Number(userData.pagination.currentPage) + 1;
      console.log('userData.currentPage', userData.pagination.currentPage);
      console.log('nextPage', userData.pagination.currentPage);
    } else if (
      userData.pagination.currentPage >= userData.pagination.maxPages
    ) {
      userData.pagination.currentPage = Number(userData.pagination.currentPage);
    }
  } else if (
    e.target.closest('[data-pagenumber]').dataset.pagenumber === 'end'
  ) {
    userData.pagination.currentPage = userData.pagination.maxPages;
  } else return;

  //   console.log(userData.perPage);
  //   console.log(userData.currentPage);

  apiProducts
    .getProductsWithPagination(
      userData.pagination.perPage,
      userData.pagination.currentPage,
      'new',
    )
    .then(res => console.log('RESPONSE', res.config.url));
  // .then(data => console.log('getProductsWithPagination', data.data));
  // .then(data => createList(data.data));
}

//
//
//
//
//
//
//
// =============Запрос на кол-вот товара в категории=======================
// https://goit-store.herokuapp.com/products/getCategories?category=accessories_for_kitchen_appliances
// ========================================================================

// refsPagination.pagination.addEventListener('click', getPaginationPage);
