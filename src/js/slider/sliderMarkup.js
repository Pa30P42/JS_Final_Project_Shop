import screen from '../../images/slider/slider_mb/new/img2.jpg';
import image2Mb from '../../images/slider/slider_mb/new/img2_mb.jpg';
import image1 from '../../images/slider/slider_mb/new/img1.jpg';
import image4 from '../../images/slider/slider_mb/new/img4.jpg';
import image3 from '../../images/slider/slider_mb/new/img3.jpg';
import btn_left from '../../images/slider/slider_mb/btn_left.png';
import btn_right from '../../images/slider/slider_mb/btn_right.png';

export const sliderItemMarkup = () => {
  return `<div class="sim-slider">
<ul class="sim-slider-list">
<li><img
        srcset="${image2Mb} 280w, ${screen} 1080w"
        src="${image2Mb}"
        alt="screen"
        sizes="280px"
        class="sim-slider-list-image"
    />
</li>
<li class="sim-slider-element">
<img
            src="${screen}"
            alt="0"
            class="sim-slider-list-image"
          />
        </li>
        
<li class="sim-slider-element">
<img
            src="${image1}"
            alt="1"
            class="sim-slider-list-image"
          />
        </li>
        <li class="sim-slider-element">
        <img
            src="${image4}"
            alt="2"
            class="sim-slider-list-image"
          />
        </li>
        <li class="sim-slider-element">
        <img
            src="${image3}"
            alt="3"
            class="sim-slider-list-image"
          />
        </li>

        </ul>

      <div class="sim-slider-arrow-left">
        <img
          class="sim-slider-arrow-left-img"
          src="${btn_left}"
        />
      </div>
      <div class="sim-slider-arrow-right">
        <img
          class="sim-slider-arrow-right-img"
          src="${btn_right}"
        />
      </div>

      <div class="sim-slider-dots"></div>
    </div>`;
};
