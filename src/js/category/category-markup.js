import './category.scss';
import categoriesList from '../userData';
import { modalModule } from '../components/modalModule/modalModule';
import apiProducts from '../api/products/apiProducts';
import { createList } from '../sale/saleSection';
// import { refsPagination } from '../pagination/pagination';

const refs = {
  modalCategory: document.querySelector('.modalModule'),
  categoriesListInsert: '',
  subcategoriesListInsert: '',
};

const globalCategoriesObjects = Object.values(categoriesList.appliances);

export function getLink(e) {
  //link можно добавить в хлебные крошки//
  if (
    e.target.nodeName === 'LI' ||
    e.target.nodeName === 'P' ||
    e.target.nodeName === 'IMG'
  ) {
    if (e.target.closest('[data-sublink]')) {
      const subLink = e.target.closest('[data-sublink]').dataset.sublink;
      // const subLinkName = e.target.closest('[data-sublink]').dataset
      //   .categoryname;
      // console.log(subLinkName);
      // createList(subLinkName);
      return subLink;
    } else return;
  }

  if (e.target.nodeName === 'BUTTON' && e.target.dataset.button) {
    const link = e.target.closest('[data-button]').dataset.button;

    return link;
  }
}

function getSubCategoryItemName() {
  refs.subcategoriesListInsert = document.querySelector('.subcategories__list');
  refs.subcategoriesListInsert.addEventListener('click', e => {
    console.log(e.target);
  });
}

export function categoriesListMarkup() {
  return `
            <ul class="categories__list">
            ${categoriesItemMarkup(globalCategoriesObjects)}
            </ul>
            `;
}

function getSubCategoryListMarkup(subCategory) {
  // console.log(subCategory);
  const result = categoriesList.appliances[subCategory].categories.reduce(
    (acc, subCategoryItem) => {
      acc += getSubCategoryListItemMarkup(subCategoryItem);
      return acc;
    },
    '',
  );
  return `
        <div class="modal_wrapper">
          <ul class="subcategories__list">${result}</ul>
        </div>`;
}

function getSubCategoryListItemMarkup(subCategoryItem) {
  // console.log(subCategoryItem);
  return `
          <li class="subcategories__item" data-categoryName="${subCategoryItem.name}" data-sublink="${subCategoryItem.value}"> 
<img class="subcategories__image" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTUxLjUzIDEwOS41aDcuOTd2Ny44NzVoLTcuOTd6IiBmaWxsPSIjZDhkOGQ4Ii8+PHBhdGggZD0ibTY4LjUgMTA5LjVoNy45N3Y3Ljg3NWgtNy45N3oiIGZpbGw9IiNkOGQ4ZDgiLz48cGF0aCBkPSJtMjQuMTkyIDExNS41aDc5LjYxNXY2aC03OS42MTV6IiBmaWxsPSIjZWFlYWYwIi8+PHBhdGggZD0ibTk5LjM1NSA2OC45OTNjMCAxOS4yMDctMTUuODQ0IDM0LjgxNy0zNS4zNTUgMzQuODE3cy0zNS4zNTUtMTUuNjEtMzUuMzU1LTM0LjgxN2MwLTE1LjI2NSA5LjU4My0yOC4zNDIgOS42MjgtNDEuNzUzYTYwLjk1OSA2MC45NTkgMCAwIDEgMTAuMTExIDEyLjUyM2M2LjAzMy0xNC4xMjggMTUuODktMTguNzkgMjMuMjMzLTMzLjI2M2E4MC42NDUgODAuNjQ1IDAgMCAxIDEzLjQ1OCAzOC42ODZzMy4zLTEwLjQ5MSAxMi40NDItMTQuMTE3Yy0xLjkxIDE0Ljg3OSAxLjgzOCAyNy4wMzYgMS44MzggMzcuOTI0eiIgZmlsbD0iI2Y3NTAyZiIvPjxwYXRoIGQ9Im0zNC43IDY4Ljk4aC0uMWExLjc1MiAxLjc1MiAwIDAgMSAtMS42NTEtMS44NDUgNDIuMTQ3IDQyLjE0NyAwIDAgMSAxLjE1MS03LjUzIDEuNzUgMS43NSAwIDEgMSAzLjQuODE0IDM4LjgzNyAzOC44MzcgMCAwIDAgLTEuMDY0IDYuOTA4IDEuNzQ5IDEuNzQ5IDAgMCAxIC0xLjczNiAxLjY1M3oiIGZpbGw9IiNkOTM5MjIiLz48cGF0aCBkPSJtODAuNjU3IDg3LjQwNmExNi42NTkgMTYuNjU5IDAgMCAxIC0zMy4zMTQgMGMwLTcuMTkyIDQuMTY2LTE0LjQ2MiA0LjE4Ny0yMC43ODEgMi43MiAxIDQuNjU2IDMuOTQxIDYuNzIgNy42MjUgMi4wNjItOC44NzUgNi4wNjItOC44MTIgOS4zMzktMTYuMjg3YTMzLjg1NyAzMy44NTcgMCAwIDEgNS42IDE4LjcyNXMyLjIzLTUuNTIxIDcuNDctNy43NzFjLTEuMDc2IDktLjAwMiAxMy4zNi0uMDAyIDE4LjQ4OXoiIGZpbGw9IiNmZGQ4MmUiLz48L2c+PC9zdmc+" width="50" height="50"/>          <p>${subCategoryItem.name}</p>
          </li>
    `;
}

function categoriesItemMarkup(globalCategoriesObjects) {
  return globalCategoriesObjects.reduce((acc, globalCategory) => {
    acc += `
                <li class="categories__item" data-link="global_category_item">
                    <div class="category__img_wrapper">
                        <img src=${globalCategory.image} alt="${globalCategory.value}" class="category__img" width="280" height="144">
                    </div>
                    <p class="category__title">${globalCategory.name}</p>
                    <button type="button" class="btn btn_gradient js-category-buy-btn" data-button="${globalCategory.value}">Купить</button>
                </li>`;
    return acc;
  }, '');
}

export function categoriesListMarkupAddListeners() {
  refs.categoriesListInsert = document.querySelector('.categories__list');
  refs.categoriesListInsert.addEventListener('click', showModal);
}

function listeners(action) {
  const getSubCategoryLink = e => {
    const link = getLink(e);
    // console.log(e.target.textContent);
    const sublinkName = e.target.textContent;
    apiProducts
      .searchProductsbyCategory(`${link}`)
      // .then(data => console.log(data.data));
      .then(data => createList(data.data, sublinkName));
    // console.log(link);

    // вместо console.log(data.data) вставляем функцию Ани //
    if (link) {
      action();
    }
  };

  const subCategoryList = document.querySelector('.subcategories__list');
  subCategoryList.addEventListener('click', getSubCategoryLink);
}

// function incomingData(e) {
//   if (
//     (e.target.nodeName === 'LI' || e.target.nodeName === 'P') &&
//     e.target.closest('[data-categoryName]')
//   ) {
//     const categoryNameLink = e.target.dataset.categoryname;
//     console.log('categoryNameLink', categoryNameLink);
//     //! ==============================================================================
//     //? вместо console.log вставляем функцию Ани которая принимает массив продуктов для открисовки категории по клику
//     // apiProducts.searchProductsbyCategory(`${categoryNameLink}`).then(data => console.log(data.data));
//   }
// }

function showModal(e) {
  const newLink = getLink(e);
  // const markup = getSubCategoryListMarkup(newLink);
  if (newLink) {
    modalModule(() => getSubCategoryListMarkup(newLink), listeners);
  }
}
