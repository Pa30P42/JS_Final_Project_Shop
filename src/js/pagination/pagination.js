import './pagination.scss';
import apiProducts from '../api/products/apiProducts';
import deviceWidth from '../setting';
import userData from '../userData';
import { createList } from '../sale/saleSection';
import { createSingleCardMarkup } from '../sale/cardModule';
import productCard from '../adv/productCard';
import products from '../components/products';
// import { onSelectCard } from '../components/new';
//
//
//
//
//
// =============== MARKUP ================= //
export const createPaginationMarkup = totalProducts => {
  userData.pagination.totalProducts = totalProducts;
  userData.pagination.maxPages = Math.ceil(userData.pagination.totalProducts / userData.pagination.perPage);
  let maxProd;
  if (userData.pagination.currentPage === userData.pagination.maxPages) {
    maxProd = userData.pagination.maxPages;
  } else maxProd = userData.pagination.perPage * userData.pagination.currentPage;
  let numberOfPages = userData.pagination.maxPages;
  let minProd = maxProd - userData.pagination.perPage + 1;
  // console.log('maxProd', maxProd);
  // console.log('minProd', minProd);

  if (
    (deviceWidth.isMobile || deviceWidth.isTablet || deviceWidth.isDesktop) &&
    userData.pagination.totalProducts > userData.pagination.perPage
  ) {
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

const createPaginationItemMarkup = number => {
  let markup = '';
  for (let i = 1; i <= number; i += 1) {
    markup += `<li class="products_pagination__item" data-pagenumber="${i}"><span class="products_pagination__item_number">${i}</span>
  </li>`;
  }
  return markup;
};


// ===================
export async function getPaginationPage(e, category) {

  // const pagination = await createPagination(userData.getValue(category), userData.pagination.currentPage);

  // const onSelectCard = (e, items) => {
  //   items = pagination.array;
  //   console.log('Marina', e.target);
  //   if (e.target.nodeName === 'UL') return;
  //   const id = e.target.closest('[data-id]').dataset.id;
  //   const product = items.find(item => item._id === id);
  //   productCard(product);
  // };

  // const cardList = document.querySelector('.card_list');
  // cardList.addEventListener('click', onSelectCard);

  // if (e.target.nodeName !== 'SPAN' || e.target.dataset.pagenumber === 'undefined') {
  //   return;
  // }
  if (
    (e.target.nodeName === 'SPAN' || (e.target.nodeName === "LI"))
    //  &&
    // e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'next' &&
    // e.target.closest('[data-pagenumber]').dataset.pagenumber !== 'end'
  ) {
    console.log('e.target', e.target)
    userData.pagination.currentPage = Number(e.target.closest('[data-pagenumber]').dataset.pagenumber);
  }
  if (e.target.closest('[data-pagenumber]')) {
    if (e.target.closest('[data-pagenumber]').dataset.pagenumber === 'next') {
      if (userData.pagination.currentPage < userData.pagination.maxPages) {
        userData.pagination.currentPage = Number(userData.pagination.currentPage) + 1;
      } else if (userData.pagination.currentPage >= userData.pagination.maxPages) {
        userData.pagination.currentPage = Number(userData.pagination.currentPage);
      }
    }
  }
  if (e.target.closest('[data-pagenumber]')) {
    if (e.target.closest('[data-pagenumber]').dataset.pagenumber === 'end') {
      userData.pagination.currentPage = userData.pagination.maxPages;
    }
  }

  const link = userData.getValue(category);
  const currentPage = userData.pagination.currentPage;
  const array = await apiProducts.getProductsWithPagination(link, currentPage)


  const cardList = document.querySelector('.card_list');
  const markup = array.reduce((acc, element) => {
    acc += createSingleCardMarkup(element, category);
    return acc;
  }, '');
  cardList.innerHTML = markup;
}







export async function createPagination(link, pagenumber = 1) {
  const response = await apiProducts.getProductsWithPagination(link, pagenumber).then(res => res.data);
  if (!userData.categories[link]) {
    userData.categories[link] = await apiProducts.getCountOfProducts(link);
  };

  return {
    array: response,
    paginationMarkup: createPaginationMarkup(userData.categories[link]),
  };
}

// const cardList = document.querySelector('.card_list');
// cardList.addEventListener('click', getPaginationPage);

export const createPaginationFunction = async (value, destination, listeners) => {
  const paginationConstructor = {
    destination: destination,
    search: false,
    cards: false,
    categoryItems: [],
    searchItems: [],
    countOfProducts: 0,
    currentPage: 1
  }
  if (value.constructor.name === "String") {
    await apiProducts.getCountOfProducts(value).then(data => {
      paginationConstructor.countOfProducts = data;
    })
    await apiProducts.getProductsWithPagination(value, paginationConstructor.currentPage, 6).then(data => console.log(data.data))
  }
}


