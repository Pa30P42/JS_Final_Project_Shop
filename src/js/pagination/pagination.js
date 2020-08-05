import './pagination.scss';
import apiProducts from '../api/products/apiProducts';
import deviceWidth from '../setting';
import userData from '../userData';
import { createList } from '../sale/saleSection';

// export const refsPagination = {
//   pagination: document.querySelector('.products_pagination'),
// };

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

export const createPaginationMarkup = totalProducts => {
  // console.log('DATA', totalProducts);
  userData.pagination.totalProducts = totalProducts;

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
          class="products_pagination__item_next">&#62
</span>
        </li>
        <li class="products_pagination__item" data-pagenumber="end"><span class="products_pagination__item_end">	
&#8811</span>
        </li>
      </ul>
  
        <p class="products_pagination__description">Показано с ${minProd} по ${maxProd} из ${totalProducts}</p>`;

    return markup;
  } else return '';
};

// ===================

export async function createPagination(link, pagenumber = 1) {
  // console.log('CRpageLINK', link);
  userData.pagination.category = link;
  const response = await apiProducts
    .getProductsWithPagination(link, pagenumber)
    .then(res => res.data);
  const arrayLength = await apiProducts.getCountOfProducts(link);
  // .then(res => console.log('res.data', res.data));
  // console.log('arrayLength', arrayLength);

  // console.log(createPaginationMarkup(arrayLength));

  return {
    array: response,
    paginationMarkup: createPaginationMarkup(arrayLength),
    getPaginationPage,
  };
}
//
//
//
//
//
// =============== LOGIC ================= //

export async function getPaginationPage(e, category) {
  // userData.pagination.currentPage = 1;
  // console.log('Hoooray', e.target);
  // userData.pagination.maxPages = Math.ceil(
  //   userData.pagination.totalProducts / userData.pagination.perPage,
  // );

  const container = document.querySelector('.container');
  container.removeEventListener('click', e => getPaginationPage(e, link));

  if (
    (e.target.nodeName === 'SPAN' || e.target.dataset.pagenumber) &&
    e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'next' &&
    e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'end'
  ) {
    userData.pagination.currentPage = Number(
      e.target.closest('[data-pagenumber]').dataset.pagenumber,
    );
  } else if (e.target.closest('[data-pagenumber]').dataset.pagenumber === 'next') {
    if (userData.pagination.currentPage < userData.pagination.maxPages) {
      // console.log('userDataALL', userData);
      userData.pagination.currentPage = Number(userData.pagination.currentPage) + 1;
      console.log('userData.currentPage', userData.pagination.currentPage);
      console.log('nextPage', userData.pagination.currentPage);
    } else if (userData.pagination.currentPage >= userData.pagination.maxPages) {
      userData.pagination.currentPage = Number(userData.pagination.currentPage);
    }
  } else if (e.target.closest('[data-pagenumber]').dataset.pagenumber === 'end') {
    userData.pagination.currentPage = userData.pagination.maxPages;
  }
  // else return;

  //   console.log(userData.perPage);
  //   console.log(userData.currentPage);

  const pagination = await createPagination(
    userData.getValue(category),
    userData.pagination.currentPage,
  );
  console.log('category', category);
  console.log('pagination', pagination);

  // console.log('UserData!!!', userData);

  // const response = await apiProducts
  //   .getProductsWithPagination(userData.getValue(category), userData.pagination.currentPage)
  //   .then(res => console.log('RESPONSE', res));

  createList(pagination.array, pagination.paginationMarkup, category);

  // createList(response)

  // =====================================
  // apiProducts
  //   .getProductsWithPagination('ref', userData.pagination.currentPage, userData.pagination.perPage)
  //   .then(res => console.log('RESPONSE', res.config.url));
  // // .then(data => console.log('getProductsWithPagination', data.data));
  // // .then(data => createList(data.data));
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
