import './pagination.scss';
import apiProducts from '../api/products/apiProducts';
import userData from '../userData';
import productCard from '../adv/productCard';

export const createNewPagination = async (searchValue, innerMarkup, search) => {
  const constructor = {
    searchValue,
    products: [],
    countOfProducts: 0,
    currentPage: 1,
    minProd: 0,
    maxProd: 0,
    countOfPages: 0,
    product: {},
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
      await apiProducts
        .getSearchWithPagination(searchValue, constructor.currentPage, userData.pagination.perPage)
        .then(res => (constructor.products = res.data));
    } else
      await apiProducts
        .getProductsWithPagination(searchValue, constructor.currentPage, userData.pagination.perPage)
        .then(res => (constructor.products = res.data));

    getMinMax();

    cardsMarkups();
  };

  const getCardItem = async e => {
    if (e.target.dataset.favorite) {
      return;
    }

    if (e.target.closest('[data-id]') && e.target.nodeName !== 'UL') {
      const productElement = e.target.closest('[data-elementname]').dataset.elementname;

      constructor.product = await apiProducts
        .searchProductsbyName(productElement)
        .then(res => res.data[0])
        .then(res => (constructor.product = { ...res }));
    }

    return constructor.product;
  };

  const paginationTabsListener = () => {
    const paginationWrapper = document.querySelector('.pagination_wrapper');
    paginationWrapper.addEventListener('click', getTab);

    paginationWrapper.querySelector(`[data-pagenumber="${constructor.currentPage}"]`) &&
      paginationWrapper
        .querySelector(`[data-pagenumber="${constructor.currentPage}"]`)
        .classList.add('active_pagination_tab');

    // =================================================================================

    const cardsWrapper = document.querySelector('.card_list');

    cardsWrapper.addEventListener('click', async e => {
      productCard(await getCardItem(e));
    });
  };

  const getCategory = async () => {
    await apiProducts.getCountOfProducts(searchValue).then(res => (constructor.countOfProducts = res));
    await apiProducts
      .getProductsWithPagination(searchValue, constructor.currentPage, userData.pagination.perPage)
      .then(res => (constructor.products = res.data));
    constructor.countOfPages = Math.ceil(constructor.countOfProducts / userData.pagination.perPage);
  };

  const getSearch = async () => {
    await apiProducts.searchProductsbyName(searchValue).then(res => (constructor.countOfProducts = res.data.length));
    constructor.countOfPages = Math.ceil(constructor.countOfProducts / userData.pagination.perPage);
    await apiProducts.getSearchWithPagination(searchValue).then(res => (constructor.products = res.data));
  };

  const cardsMarkups = () => {
    innerMarkup(
      constructor.products,
      createPaginationTabs(),
      search ? constructor.searchValue : userData.getName(constructor.searchValue),
    );
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
