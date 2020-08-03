import './pagination.scss';
import apiProducts from '../api/products/apiProducts';
import deviceWidth from '../setting';

const refs = {
  pagination: document.querySelector('.products_pagination'),
};

const userData = {
  pagination: {
    currentPage: 1,
    totalProducts: 0,
    perPage: 0,
    pagesCount: 0,
    category: '',
  },
};

function getPaginationPage(e, category) {
  if (
    (e.target.nodeName === 'LI' || e.target.nodeName === 'SPAN') &&
    e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'next' &&
    e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'end'
  ) {
    userData.pagination.currentPage = e.target.closest(
      '[data-pagenumber]',
    ).dataset.pagenumber;
  }

  if (e.target.closest('[data-pagenumber]').dataset.pagenumber === 'next') {
    userData.pagination.currentPage =
      Number(userData.pagination.currentPage) + 1;
    // console.log('userData.currentPage', userData.currentPage);
    // console.log('nextPage', userData.currentPage);
  }
  if (deviceWidth.isMobile) {
    userData.pagination.perPage = 6;
  } else if (deviceWidth.isTablet) {
    userData.pagination.perPage = 9;
  } else if (deviceWidth.isDesktop) {
    userData.pagination.perPage = 10;
  }

  //   console.log(userData.perPage);
  //   console.log(userData.currentPage);
  apiProducts
    .getProductsWithPagination(
      userData.pagination.perPage,
      userData.pagination.currentPage,
      'new',
    )
    // .then(res => console.log(res.config))
    .then(data => console.log(data.data));
  // .then(data => totalPaginationProducts(data.data));

  // apiProducts
  //   .searchProductsbyCategoryAndName()
  //   .then(data => createPagination(data.data.length));

  // function totalPaginationProducts(data) {
  //   console.log('data.length', data.length);
  // }
}

// apiProducts.getAllProducts().then(data => createPagination(data.data.length));

// Запрос на кол-вот товара в категории
// https://goit-store.herokuapp.com/products/getCategories?category=accessories_for_kitchen_appliances

refs.pagination.addEventListener('click', getPaginationPage);

// ==================== old method ============================

// const createPaginationPage = pageNumber => {
//   return `
//     <li class="products_pagination__item" data-pagenumber="pagenumber"><span class="products_pagination__item_number">${pageNumber}</span></li>
//     `;
// };

// const createPaginationMarkup = () => {
//   let markup = '';
//   for (let i = 1; i <= userData.pagination.pagesCount; i += 1) {
//     markup += createPaginationPage();
//   }
//   return markup;
// };

// const createPagination = arr => {
//   userData.pagination.totalProducts = arr;
//   //   console.log(userData.pagination.totalProducts);

//   userData.pagination.pagesCount = Math.ceil(
//     userData.pagination.totalProducts / userData.pagination.productsPerPage,
//   );
//   refs.pagination.innerHTML = createPaginationMarkup();
// };
