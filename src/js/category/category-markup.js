import './category.scss';
import categoriesList from '../userData';
import apiProducts from '../api/products/apiProducts';
import getAppliances from '../api/products/services';
import userData from '../../js/userData';

export const categories = Object.values(categoriesList.appliances);
// console.log(categories);

export function categoriesListMarkup(categories) {
  return `
            <ul class="categories__list">
            ${categoriesItemMarkup(categories)}
            </ul>
            `;
}

function categoriesItemMarkup(categories) {
  return categories.reduce((acc, category) => {
    acc += `
                <li class="categories__item">
                    <div class="category__img_wrapper">
                        <img src=${category.image} alt="${category.value}" class="category__img" width="280" height="144">
                    </div>
                    <p class="category__title">${category.name}</p>
                    <button type="button" class="btn btn_gradient">Купить</button>
                </li>`;
    console.log(category.filter);
    return acc;
  }, '');
}

// const markup = document.querySelector('#root');
// markup.insertAdjacentHTML('afterbegin', categoriesListMarkup(categories));

// apiProducts.getCategories().then(data => console.log(userData.appliances));
apiProducts.getCategories().then(data => console.log(userData));

function bigCategory() {
  const keys = Object.keys(userData.appliances);
  console.log(keys);

  const values = Object.values(userData.appliances);

  for (let key of keys) {
    subCategories(key);
  }
}

function subCategories(key) {
  console.log('KEY', key);

  const result = Object.keys(userData.appliances).filter(data => {
    console.log('result', data);
  });

  if (key === Object.keys(userData.appliances)) {
  }
  apiProducts.getCategories().then(data => {
    const arrayCategory = [];
    const values = Object.values(userData.appliances);

    const subCategories = userData.categoriesItems;

    for (let value of values) {
      const filterCategory = value.filter.map(category => {
        for (let subCategory of subCategories) {
          if (subCategory.value === category) {
            // console.log('subCategory.name', subCategory.name);
            // console.log('subCategory.value', subCategory.value);
            arrayCategory.push(subCategory.name);
          }
        }
      });
    }
    // console.log(arrayCategory);
  });
}

bigCategory();
