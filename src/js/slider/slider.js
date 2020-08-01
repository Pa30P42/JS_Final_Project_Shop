import screen from '';
// ./images/slider/slider_mb/new/img2.jpg
export function Sim(sldrId) {
  let id = document.getElementById(sldrId);
  if (id) {
    this.sldrRoot = id;
  } else {
    this.sldrRoot = document.querySelector('.sim-slider');
  }

  // Carousel objects
  this.sldrList = this.sldrRoot.querySelector('.sim-slider-list');
  this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element');
  this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');
  this.leftArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-left');
  this.rightArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-right');
  this.indicatorDots = this.sldrRoot.querySelector('div.sim-slider-dots');

  // Initialization
  this.options = Sim.defaults;
  Sim.initialize(this);

  const sliderItemMarkup = element => {
    return `<div class="sim-slider">
  <ul class="sim-slider-list">
    <li><img
    src="${screen}"
    alt="screen"
    class="sim-slider-list-image"
  />
</li>
<img
              src="${screen}"
              alt="0"
              class="sim-slider-list-image"
            />
          </li>
          <li class="sim-slider-element">
<li class="sim-slider-element">
<img
              src="./images/slider/slider_mb/new/img1.jpg"
              alt="1"
              class="sim-slider-list-image"
            />
          </li>
          <li class="sim-slider-element">
          <img
              src="./images/slider/slider_mb/new/img4.jpg"
              alt="2"
              class="sim-slider-list-image"
            />
          </li>
          <li class="sim-slider-element">
          <img
              src="./images/slider/slider_mb/new/img3.jpg"
              alt="3"
              class="sim-slider-list-image"
            />
          </li>
          </ul>

        <div class="sim-slider-arrow-left">
          <img
            class="sim-slider-arrow-left-img"
            src="./images/slider/slider_mb/btn_left.png"
          />
        </div>
        <div class="sim-slider-arrow-right">
          <img
            class="sim-slider-arrow-right-img"
            src="./images/slider/slider_mb/btn_right.png"
          />
        </div>

        <div class="sim-slider-dots"></div>
      </div>`;
  };
  return sliderItemMarkup(element);
}
// return `<li class="card_item" data-id=${element._id}>
// // <div class="card-image">
// // ${
//   userData.isMobile
//     ? ` <img class="card_img" src="${element.images[0]}" alt="${element.name}" width="86"/>`
//     : `<img class="card_img-tablet" src="${element.images[0]}" alt="${element.name}" width="149"/>`
// }

// </div>
// <img class="card_vector" src="./images/sale/Vector.svg" />
// <p class="card_name">${element.name}</p>
// <ul class="card_rating-list">${rating()}</ul>
// <div class="card_prise-block">
//    ${
//      sale
//        ? `<p class="card_price">${
//            element.price * 1.3
//          }<span> &#8372;</span></p>
//       <p class="card_price-sale">${element.price}<span> &#8372;</span></p>`
//        : `<p class="card_price-sale">${element.price}<span> &#8372;</span></p>`
//    }

// </div>
// </li>`;
// };
// return cardItemMarkup(element);
// }

Sim.defaults = {
  // Default options for the carousel
  loop: true, // Бесконечное зацикливание слайдера
  auto: true, // Автоматическое пролистывание
  interval: 5000, // Интервал между пролистыванием элементов (мс)
  arrows: true, // Пролистывание стрелками
  dots: true, // Индикаторные точки
};

Sim.prototype.elemPrev = function (num) {
  num = num || 1;

  let prevElement = this.currentElement;
  this.currentElement -= num;
  if (this.currentElement < 0) this.currentElement = this.elemCount - 1;

  if (!this.options.loop) {
    if (this.currentElement == 0) {
      this.leftArrow.style.display = 'none';
    }
    this.rightArrow.style.display = 'block';
  }

  this.sldrElements[this.currentElement].style.opacity = '1';
  this.sldrElements[prevElement].style.opacity = '0';

  if (this.options.dots) {
    this.dotOn(prevElement);
    this.dotOff(this.currentElement);
  }
};

Sim.prototype.elemNext = function (num) {
  num = num || 1;

  let prevElement = this.currentElement;
  this.currentElement += num;
  if (this.currentElement >= this.elemCount) this.currentElement = 0;

  if (!this.options.loop) {
    if (this.currentElement == this.elemCount - 1) {
      this.rightArrow.style.display = 'none';
    }
    this.leftArrow.style.display = 'block';
  }

  this.sldrElements[this.currentElement].style.opacity = '1';
  this.sldrElements[prevElement].style.opacity = '0';

  if (this.options.dots) {
    this.dotOn(prevElement);
    this.dotOff(this.currentElement);
  }
};

Sim.prototype.dotOn = function (num) {
  this.indicatorDotsAll[num].style.cssText =
    'background-color:#B3B3B3; cursor:pointer;';
};

Sim.prototype.dotOff = function (num) {
  this.indicatorDotsAll[num].style.cssText =
    'background-image:linear-gradient(11.4deg, #6368e5 15.48%, #b884f3 81.25%); cursor:default;';
};

Sim.initialize = function (that) {
  // Constants
  that.elemCount = that.sldrElements.length; // Количество элементов

  // Variables
  that.currentElement = 0;
  let bgTime = getTime();

  // Functions
  function getTime() {
    return new Date().getTime();
  }
  function setAutoScroll() {
    that.autoScroll = setInterval(function () {
      let fnTime = getTime();
      if (fnTime - bgTime + 10 > that.options.interval) {
        bgTime = fnTime;
        that.elemNext();
      }
    }, that.options.interval);
  }

  // Start initialization
  if (that.elemCount <= 1) {
    // Отключить навигацию
    that.options.auto = false;
    that.options.arrows = false;
    that.options.dots = false;
    that.leftArrow.style.display = 'none';
    that.rightArrow.style.display = 'none';
  }
  if (that.elemCount >= 1) {
    // показать первый элемент
    that.sldrElemFirst.style.opacity = '1';
  }

  if (!that.options.loop) {
    that.leftArrow.style.display = 'none'; // отключить левую стрелку
    that.options.auto = false; // отключить автопркрутку
  } else if (that.options.auto) {
    // инициализация автопрокруки
    setAutoScroll();
    // Остановка прокрутки при наведении мыши на элемент
    that.sldrList.addEventListener(
      'mouseenter',
      function () {
        clearInterval(that.autoScroll);
      },
      false,
    );
    that.sldrList.addEventListener('mouseleave', setAutoScroll, false);
  }

  if (that.options.arrows) {
    // инициализация стрелок
    that.leftArrow.addEventListener(
      'click',
      function () {
        let fnTime = getTime();
        if (fnTime - bgTime > 1000) {
          bgTime = fnTime;
          that.elemPrev();
        }
      },
      false,
    );
    that.rightArrow.addEventListener(
      'click',
      function () {
        let fnTime = getTime();
        if (fnTime - bgTime > 1000) {
          bgTime = fnTime;
          that.elemNext();
        }
      },
      false,
    );
  } else {
    that.leftArrow.style.display = 'none';
    that.rightArrow.style.display = 'none';
  }

  if (that.options.dots) {
    // инициализация индикаторных точек
    let sum = '',
      diffNum;
    for (let i = 0; i < that.elemCount; i++) {
      sum += '<span class="sim-dot" ></span>';
    }
    that.indicatorDots.innerHTML = sum;
    that.indicatorDotsAll = that.sldrRoot.querySelectorAll('span.sim-dot');
    // Назначаем точкам обработчик события 'click'
    for (let n = 0; n < that.elemCount; n++) {
      that.indicatorDotsAll[n].addEventListener(
        'click',
        function () {
          diffNum = Math.abs(n - that.currentElement);
          if (n < that.currentElement) {
            bgTime = getTime();
            that.elemPrev(diffNum);
          } else if (n > that.currentElement) {
            bgTime = getTime();
            that.elemNext(diffNum);
          }
          // Если n == that.currentElement ничего не делаем
        },
        false,
      );
    }
    that.dotOff(0); // точка[0] выключена, остальные включены
    for (let i = 1; i < that.elemCount; i++) {
      that.dotOn(i);
    }
  }
};

new Sim();
