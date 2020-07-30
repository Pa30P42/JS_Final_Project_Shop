import apiProducts from '../api/products/apiProducts';
import { refs } from './refs';
import axios from 'axios';

// apiProducts.getAllProducts().then(data => console.log(data.data));
// apiProducts.searchProductsbyCategory('new').then(data => console.log(data.data));
const getProductsbyCategory = async category => {
  try {
    const dataCategory = await axios.get(
      `https://goit-store.herokuapp.com/products?category=${category}`,
    );
    // console.log(dataCategory);
    return dataCategory;
  } catch (err) {
    throw new Error(err);
  }
};

const testProducts = [
  {
    img: 'https://i2.rozetka.ua/goods/11051965/gorenje_k_5341_xf_images_11051965719.jpg',
    name: 'Плита комбинированная',
    price: 9599,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/appliance-2255_150.jpg',
    name: 'Бойлер ATLANTIC',
    price: 2199,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/appliance-2255_150.jpg',
    name: 'Робот-пылесос Xiaomi',
    price: 13999,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/appliance-2255_150.jpg',
    name: 'Пылесос BOSCH',
    price: 3299,
  },
  {
    img: 'https://i2.rozetka.ua/goods/11051965/gorenje_k_5341_xf_images_11051965719.jpg',
    name: 'Плита комбинированная',
    price: 9599,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/appliance-2255_150.jpg',
    name: 'Бойлер ATLANTIC',
    price: 2199,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/appliance-2255_150.jpg',
    name: 'Робот-пылесос Xiaomi',
    price: 13999,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/appliance-2255_150.jpg',
    name: 'Пылесос BOSCH',
    price: 3299,
  },
];

const createCardMarkup = product => {
  return `<li class="product-card">
    <img class="product-img" src="${product.images[0]}" alt="" width="150" height="140">
    <p class="product-name">${product.name}</p>
    <p class="product-price">${product.price}</p>
  </li>`;
};

const addNewProducts = () => {
  // console.log(refs.sections);
  const divRef = refs.sections.querySelector('.new-products-wrapper');

  divRef.insertAdjacentHTML(
    'beforebegin',
    `<h2 class="new-products__title">Новые поступления</h2>
      <div class="new-products__slider"></div>`,
  );
  const sliderRef = document.querySelector('.new-products__slider');

  const createListCardsMarkup = products => {
    // return `<ul class="slider__list-cards"></ul>`;

    return `<ul class="slider__list-cards">
    ${products.reduce((acc, product) => {
      console.log(product);
      acc += createCardMarkup(product);
      return acc;
    }, '')}
    </ul>`;
  };

  const createCardsMarkup = products => {
    return products.reduce((acc, product) => {
      // acc += createCardMarkup(product);
      return acc;
    }, '');
  };

  const listCardsMarkup = createCardsMarkup(testProducts);

  const createSliderMarkup = products => {
    return `<h2 class="new-products__title">Новые поступления</h2>
    <div class="new-products__slider">
      <div class="slider__body">
        <button class="slider__controls-arrow slider__controls-arrow_left" type="button">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1 8L9 15" stroke="black" stroke-linecap="round" stroke-linejoin="bevel"/>
          </svg>
        </button>
        <div class="slider__holder">      
          <ul class="slider__list-cards">
            ${products.reduce((acc, product) => {
              acc += createCardMarkup(product);
              return acc;
            }, '')}
          </ul>
        </div>
        <button class="slider__controls-arrow slider__controls-arrow_right" type="button">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 8L1 15" stroke="black" stroke-linecap="round" stroke-linejoin="bevel"/>
          </svg>
        </button>
      </div>
      <div class="slider__controls-dots">
        ${products.reduce((acc, product, index) => {
          acc += `<button class="slide-dot" type="button" data-index="${index}"></button>`;
          return acc;
        }, '')}
      </div>
    </div>`;
  };

  // const markup = createSliderMarkup(newProducts);
  // console.log(markup);
  // divRef.innerHTML = createListCardsMarkup(testProducts);

  // let newProducts = [];
  const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(''), ms));
  };

  const getNewProducts = async () => {
    try {
      const response = await apiProducts.searchProductsbyCategory('new');
      console.log('newProducts: ', response.data);
      // await delay(5000);
      divRef.innerHTML = createListCardsMarkup(response.data);
      return divRef;
    } catch (error) {
      console.log('Лог ошибки в getNewProducts ' + error);
    }
  };

  // console.log(newProducts);
  // divRef.innerHTML = getProductsbyCategory('new').then(createListCardsMarkup);
  class Slider {
    constructor(selector, options) {
      this.wrapper = document.querySelector(selector);
      // this.listMarkup = options.list ? options.list : '';
      this.step = options.step ? options.step : 1;
      this.isNavs = options.isNavs ? options.isNavs : false;
      this.isPagination = options.isPagination ? options.isPagination : false;
      this.countItems = options.countItems ? options.countItems : 1;
      this.slider = document.createDocumentFragment();
      this.trackPosition = 0;
      this.items = null;
      this.track = null;
      this.trackWidth = 0;
      this.itemWidth = 0;
      // this.isStart = true;
      // this.isEnd = false;
      this.startItemNum = 1;
      this.lastItemNum = this.countItems;
      this.setup();
    }
    setup() {
      if (!this.buildUI()) return;
      if (this.isNavs) this.createNavs();
      if (this.isPagination) this.createPagination();
      this.wrapper.appendChild(this.slider);
      this.setupEvents();
    }
    buildUI() {
      if (!this.wrapper) return false;
      this.track = this.wrapper.querySelector('ul');
      console.log(this.track);
      this.items = Array.from(this.track.children);
      if (!this.items.length) return false;
      const style = window.getComputedStyle(this.items[0]);
      const itemMarginRight = parseInt(style.marginRight);
      // getPropertyValue('margin-right'));
      this.itemWidth = this.items[0].clientWidth + itemMarginRight;
      this.trackWidth = this.itemWidth * this.items.length;
      this.track.style.width = this.trackWidth + 'px';
      const holderRef = document.createElement('div');
      const bodySlider = document.createElement('div');
      bodySlider.classList.add('slider__body');
      holderRef.classList.add('slider__holder');
      holderRef.appendChild(this.track);
      bodySlider.appendChild(holderRef);
      this.slider.appendChild(bodySlider);
      return true;
    }
    createNavs() {
      const prevNav = document.createElement('button');
      const nextNav = document.createElement('button');
      prevNav.type = nextNav.type = 'button';
      prevNav.classList.add('slider__controls-arrow', 'slider__controls-arrow_left');
      prevNav.style.display = 'none';
      prevNav.innerHTML = `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L1 8L9 15" stroke="black" stroke-linecap="round" stroke-linejoin="bevel"/>
      </svg>`;
      nextNav.classList.add('slider__controls-arrow', 'slider__controls-arrow_right');
      nextNav.innerHTML = `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9 8L1 15" stroke="black" stroke-linecap="round" stroke-linejoin="bevel"/>
      </svg>`;
      // const listClone = holder.cloneNode(true);
      // this.slider.removeChild(holder);
      const bodySlider = this.slider.querySelector('.slider__body');
      bodySlider.prepend(prevNav);
      bodySlider.append(nextNav);
      prevNav.addEventListener('click', e => this.goToPrevSlide(e));
      nextNav.addEventListener('click', e => this.goToNextSlide(e));
    }
    createPagination() {
      const paginationWrapper = document.createElement('div');
      paginationWrapper.classList.add('slider__controls-dots');
      const dotsLength = Math.ceil(this.items.length / this.countItems);
      for (let i = 0; i < dotsLength; i++) {
        const dotRef = document.createElement('button');
        dotRef.classList.add('slide-dot');
        dotRef.type = 'button';
        dotRef.dataset.index = i;
        // dotRef.addEventListener('click', () => this.goToSlide(i));
        paginationWrapper.appendChild(dotRef);
      }
      paginationWrapper.addEventListener('click', e => {
        if (e.target.nodeName !== 'BUTTON') return;
        const index = Number(e.target.dataset.index);
        this.goToSlide(index);
      });
      this.slider.appendChild(paginationWrapper);
    }
    setupEvents() {
      window.addEventListener('resize', () => {
        // return this.updateUI();
      });
    }
    goToSlide(index) {
      this.trackPosition = -(index * this.itemWidth * this.countItems);
      this.moveSlider();
    }
    moveSlider() {
      this.track.style.transform = `translate3d(${this.trackPosition}px,0,0)`;
    }
    goToPrevSlide(e, step = 1) {
      this.trackPosition += this.itemWidth * step;
      this.moveSlider();
      this.startItemNum -= 1;
      this.lastItemNum -= 1;
      if (this.lastItemNum === this.items.length - 1) this.showNextNav();
      if (this.startItemNum === 1) this.hidePrevNav();
    }
    goToNextSlide(e, step = 1) {
      this.trackPosition -= this.itemWidth * step;
      this.moveSlider();
      this.startItemNum += 1;
      this.lastItemNum += 1;
      if (this.lastItemNum === this.items.length) this.hideNextNav();
      if (this.startItemNum === 2) this.showPrevNav();
    }
    hideNextNav() {
      const nextNav = this.wrapper.querySelector('.slider__controls-arrow_right');
      nextNav.style.display = 'none';
    }
    showNextNav() {
      const nextNav = this.wrapper.querySelector('.slider__controls-arrow_right');
      nextNav.style.display = 'block';
    }
    showPrevNav() {
      const prevNav = this.wrapper.querySelector('.slider__controls-arrow_left');
      prevNav.style.display = 'block';
    }
    hidePrevNav() {
      const prevNav = this.wrapper.querySelector('.slider__controls-arrow_left');
      prevNav.style.display = 'none';
    }
  }
  getNewProducts().then(data => {
    console.log(data);
    new Slider('.new-products-wrapper', {
      step: 1,
      isNavs: true,
      isPagination: true,
      countItems: 5,
    });
  });
  /*
  const sliderFromNewProducts = new Slider('.new-products-wrapper', {
    step: 1,
    isNavs: true,
    isPagination: true,
    countItems: 5,
  });
  */
};

export { addNewProducts };
