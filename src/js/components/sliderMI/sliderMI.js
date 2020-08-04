export default class SliderMultiItems {
  constructor(selector, options) {
    this.wrapper = document.querySelector(selector);
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
    this.isStart = true;
    this.isEnd = false;
    this.itemIndex = 0;
    this.slideIndex = 0;
    this.dotIndex = 0;
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
    this.items = Array.from(this.track.children);
    if (!this.items.length) return false;
    const style = window.getComputedStyle(this.items[0]);
    const itemMarginRight = parseInt(style.marginRight);
    this.itemWidth = this.items[0].clientWidth + itemMarginRight;
    this.countItems = Math.round(this.wrapper.clientWidth / this.itemWidth);
    // console.log(this.wrapper.clientWidth, this.itemWidth, this.countItems);
    this.trackWidth = this.itemWidth * this.items.length;
    this.track.style.width = this.trackWidth + 'px';
    const holderRef = document.createElement('div');
    const bodySlider = document.createElement('div');
    bodySlider.classList.add('slider__body');
    holderRef.classList.add('slider__holder');
    holderRef.style.width = this.itemWidth * this.countItems - itemMarginRight + 20 + 'px';
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
    prevNav.classList.add('slider__controls-arrow_hidden');
    prevNav.innerHTML = `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L1 8L9 15" stroke="black" stroke-linecap="round" stroke-linejoin="bevel"/>
      </svg>`;
    nextNav.classList.add('slider__controls-arrow', 'slider__controls-arrow_right');
    if (this.items.length <= this.countItems) {
      nextNav.classList.add('slider__controls-arrow_hidden');
    }
    nextNav.innerHTML = `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9 8L1 15" stroke="black" stroke-linecap="round" stroke-linejoin="bevel"/>
      </svg>`;
    const bodySlider = this.slider.querySelector('.slider__body');
    bodySlider.prepend(prevNav);
    bodySlider.append(nextNav);
    prevNav.addEventListener('click', this.goToPrevSlide.bind(this));
    nextNav.addEventListener('click', this.goToNextSlide.bind(this));
  }

  createPagination() {
    if (this.items.length <= this.countItems) return;
    const paginationWrapper = document.createElement('div');
    paginationWrapper.classList.add('slider__controls-dots');
    const dotsLength = Math.ceil(this.items.length / this.countItems);
    for (let i = 0; i < dotsLength; i++) {
      const dotRef = document.createElement('button');
      dotRef.classList.add('slide-dot');
      dotRef.type = 'button';
      dotRef.dataset.index = i;
      paginationWrapper.appendChild(dotRef);
    }
    paginationWrapper.children[0].classList.add('slide-dot_active');
    this.dotIndex = 0;
    this.slider.appendChild(paginationWrapper);
    const handlerClickDot = e => {
      if (e.target.nodeName !== 'BUTTON') return;
      if (this.dotIndex === 0) this.showPrevNav();
      if (this.dotIndex === paginationWrapper.children.length - 1) this.showNextNav();
      const currentDot = paginationWrapper.querySelector('.slide-dot_active');
      currentDot.classList.remove('slide-dot_active');
      e.target.classList.add('slide-dot_active');
      const index = Number(e.target.dataset.index);
      if (index === 0) {
        this.isStart = true;
        this.hidePrevNav();
      } else this.isStart = false;
      if (index === paginationWrapper.children.length - 1) {
        this.isEnd = true;
        this.hideNextNav();
      } else this.isEnd = false;
      this.dotIndex = index;
      this.slideIndex = index;
      this.goToSlideOfDot();
    };
    paginationWrapper.addEventListener('click', handlerClickDot);
  }

  setupEvents() {
    window.addEventListener('resize', this.updateUI.bind(this));
  }

  updateUI() {
    const style = window.getComputedStyle(this.items[0]);
    const itemMarginRight = parseInt(style.marginRight);
    this.itemWidth = this.items[0].clientWidth + itemMarginRight;
    this.countItems = Math.round(this.wrapper.clientWidth / this.itemWidth);
    // console.log(this.wrapper.clientWidth, this.itemWidth, this.countItems);
    this.trackWidth = this.itemWidth * this.items.length;
    this.track.style.width = this.trackWidth + 'px';
    const holderRef = this.wrapper.querySelector('.slider__holder');
    holderRef.style.width = this.itemWidth * this.countItems - itemMarginRight + 20 + 'px';
    this.isEnd = this.itemIndex > this.items.length - 1 - this.countItems ? true : false;
    if (this.isEnd) this.itemIndex = this.items.length - this.countItems;
    this.slideIndex = this.isEnd
      ? Math.ceil(this.items.length / this.countItems) - 1
      : parseInt(this.itemIndex / this.countItems);
    this.trackPosition = -(this.itemIndex * this.itemWidth);
    this.track.style.transform = `translate3d(${this.trackPosition}px,0,0)`;
    if (this.isNavs) this.updateNavs();
    if (this.isPagination) this.updatePagination();
  }

  updateNavs() {
    this.isEnd ? this.hideNextNav() : this.showNextNav();
  }

  updatePagination() {
    const paginationWrapper = this.wrapper.querySelector('.slider__controls-dots');
    const dotsRefsCount = paginationWrapper.children.length;
    const dotsLength = Math.ceil(this.items.length / this.countItems);
    if (dotsRefsCount < dotsLength) {
      for (let i = 0; i < dotsLength - dotsRefsCount; i++) {
        const dotRef = document.createElement('button');
        dotRef.classList.add('slide-dot');
        dotRef.type = 'button';
        dotRef.dataset.index = i + dotsRefsCount;
        paginationWrapper.appendChild(dotRef);
      }
    } else if (dotsRefsCount > dotsLength) {
      const dotRefs = Array.from(paginationWrapper.children);
      for (let i = dotsLength; i < dotsRefsCount; i++) {
        paginationWrapper.removeChild(dotRefs[i]);
      }
    }
    if (this.dotIndex < dotsLength) {
      paginationWrapper.children[this.dotIndex].classList.remove('slide-dot_active');
    }
    this.dotIndex = this.isEnd
      ? paginationWrapper.children.length - 1
      : parseInt(this.itemIndex / this.countItems);
    paginationWrapper.children[this.dotIndex].classList.add('slide-dot_active');
  }

  goToSlideOfDot() {
    if (this.isEnd) {
      this.trackPosition = -(this.trackWidth - this.itemWidth * this.countItems);
      this.itemIndex = this.items.length - this.countItems;
    } else if (this.isStart) {
      this.trackPosition = 0;
      this.itemIndex = 0;
    } else {
      this.trackPosition = -(this.dotIndex * this.itemWidth * this.countItems);
      this.itemIndex = this.dotIndex * this.countItems;
    }
    this.moveSlider();
  }

  moveSlider() {
    this.track.style.transform = `translate3d(${this.trackPosition}px,0,0)`;
  }

  goToPrevSlide(e, step = 1) {
    if (this.isEnd || (this.itemIndex < this.countItems && this.slideIndex !== 0)) {
      this.slideIndex -= 1;
      if (this.isPagination) {
        this.toggleActiveDot(false);
      }
    }
    if (this.isEnd) {
      this.isEnd = false;
      this.showNextNav();
    }
    this.trackPosition += this.itemWidth * step;
    this.moveSlider();
    this.itemIndex -= 1;
    if (this.itemIndex === 0) {
      this.isStart = true;
      this.hidePrevNav();
    } else this.isStart = false;
    const slideIndex = parseInt((this.itemIndex + 1) / this.countItems);
    if (this.slideIndex > slideIndex) {
      this.slideIndex -= 1;
      if (this.isPagination) {
        this.toggleActiveDot(false);
      }
    }
  }

  goToNextSlide(e, step = 1) {
    if (
      this.isStart ||
      (this.itemIndex + this.countItems > this.items.length - this.countItems &&
        this.slideIndex !== Math.ceil(this.items.length / this.countItems) - 1)
    ) {
      this.slideIndex += 1;
      if (this.isPagination) {
        this.toggleActiveDot(true);
      }
    }
    if (this.isStart) {
      this.isStart = false;
      this.showPrevNav();
    }
    if (this.itemIndex + this.countItems === this.items.length - 1) {
      this.isEnd = true;
      this.hideNextNav();
    }
    this.itemIndex += 1;
    this.trackPosition -= this.itemWidth * step;
    this.moveSlider();
    const slideIndex = parseInt((this.itemIndex + 1) / this.countItems);
    if (slideIndex > this.slideIndex) {
      this.slideIndex += 1;
      if (this.isPagination) {
        this.toggleActiveDot(true);
      }
    }
  }

  toggleActiveDot(isNext) {
    const paginationWrapper = this.wrapper.querySelector('.slider__controls-dots');
    paginationWrapper.children[this.dotIndex].classList.remove('slide-dot_active');
    this.dotIndex = isNext ? this.dotIndex + 1 : this.dotIndex - 1;
    paginationWrapper.children[this.dotIndex].classList.add('slide-dot_active');
  }

  showNextNav() {
    const nextNav = this.wrapper.querySelector('.slider__controls-arrow_right');
    nextNav.classList.remove('slider__controls-arrow_hidden');
  }

  hideNextNav() {
    const nextNav = this.wrapper.querySelector('.slider__controls-arrow_right');
    nextNav.classList.add('slider__controls-arrow_hidden');
  }

  showPrevNav() {
    const prevNav = this.wrapper.querySelector('.slider__controls-arrow_left');
    prevNav.classList.remove('slider__controls-arrow_hidden');
  }

  hidePrevNav() {
    const prevNav = this.wrapper.querySelector('.slider__controls-arrow_left');
    prevNav.classList.add('slider__controls-arrow_hidden');
  }
}
