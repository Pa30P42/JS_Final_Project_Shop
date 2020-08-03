import './pagination.scss';
import apiProducts from '../api/products/apiProducts';
import deviceWidth from '../setting';

// export const refsPagination = {
//   pagination: document.querySelector('.products_pagination'),
// };

const userData = {
  pagination: {
    currentPage: 1,
    totalProducts: 0,
    perPage: 0,
    pagesCount: 0,
    category: '',
  },
};

export const createPaginationMarkup = totalProducts => {
  console.log('DATA', totalProducts);
  userData.pagination.totalProducts = totalProducts.length;

  if (deviceWidth.isMobile) {
    userData.pagination.perPage = 6;
  } else if (deviceWidth.isTablet) {
    userData.pagination.perPage = 9;
  } else if (deviceWidth.isDesktop) {
    userData.pagination.perPage = 10;
  }

  if (
    (deviceWidth.isMobile || deviceWidth.isTablet || deviceWidth.isDesktop) &&
    userData.pagination.totalProducts > userData.pagination.perPage
  ) {
    console.log(
      'userData.pagination.totalProducts',
      userData.pagination.totalProducts,
    );

    const markup = `
      <ul class="products_pagination">
        <li class="products_pagination__item" data-pagenumber="1"><span class="products_pagination__item_number">1</span>
        </li>
        <li class="products_pagination__item" data-pagenumber="2"><span class="products_pagination__item_number">2</span>
        </li>
        <li class="products_pagination__item" data-pagenumber="3"><span class="products_pagination__item_number">3</span>
        </li>
        <li class="products_pagination__item" data-pagenumber="next"><span
          class="products_pagination__item_next">next</span>
        </li>
        <li class="products_pagination__item" data-pagenumber="end"><span class="products_pagination__item_end">end</span>
        </li>
      </ul>
  
        <p class="products_pagination__description">Показано с 1 по 20 из ${totalProducts.length}</p>`;
    return markup;
  } else return '';
};

export function getPaginationPage(e, category) {
  // console.log('Hello Pagination', e.target.dataset.pagenumber);

  if (deviceWidth.isMobile) {
    userData.pagination.perPage = 6;
  } else if (deviceWidth.isTablet) {
    userData.pagination.perPage = 9;
  } else if (deviceWidth.isDesktop) {
    userData.pagination.perPage = 10;
  }

  if (
    e.target.dataset.pagenumber &&
    e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'next' &&
    e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'end'
  ) {
    console.log('Hoooray');
    userData.pagination.currentPage = Number(
      e.target.closest('[data-pagenumber]').dataset.pagenumber,
    );
  } else return;

  if (e.target.closest('[data-pagenumber]').dataset.pagenumber === 'next') {
    userData.pagination.currentPage =
      Number(userData.pagination.currentPage) + 1;
    console.log('userData.currentPage', userData.currentPage);
    console.log('nextPage', userData.currentPage);
  } else return;

  //   console.log(userData.perPage);
  //   console.log(userData.currentPage);

  apiProducts
    .getProductsWithPagination(
      userData.pagination.perPage,
      userData.pagination.currentPage,
      'refrigerators',
    )
    // .then(res => console.log(res.config));
    .then(data => console.log('getProductsWithPagination', data.data));
}

// =============Запрос на кол-вот товара в категории=======================
// https://goit-store.herokuapp.com/products/getCategories?category=accessories_for_kitchen_appliances
// ========================================================================

// refsPagination.pagination.addEventListener('click', getPaginationPage);

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
