import advertisementFormMarkup from '../profile/profileMarkups';
import apiProducts from '../api/products/apiProducts';
import image from '../../images/newADW/qwerrty123321.png'
const cards = {
  cardItems: [],
  activeCard: "",
  };
  // style="background-image: url(${image})" 

export function addNewProductCard() {
    return `
    <ul class="add__product">
    <li class="addcard__list addADV__hidden addADV__active  ADVelement" dataset-newadvlistfirst="newadvlistfirst">
    <input type="file" datast-addproductimagename="addproductimagename" data-active="true"  data-id="1" name="productImageFirst" class="current__input input-photo form-control productImage take-photo" accept="image/*"
    class="form-control" required />
    <label class="adv-label change__poto addimg__lable" for="name"><img src="" class="addcard__img iaddcard__img--1" width="75"
    height="74" alt=""></label>
    </li>

    <li class="addcard__list addADV__hidden ADVelement" dataset-newadvlistsecond="newadvlistsecond">
    <input type="file" datast-addproductimagename="addproductimagename" data-id="2" name="productImageSecond" class="current__input input-photo form-control productImage take-photo" accept="image/*"
    class="form-control" required />
    <label class="adv-label"  for="name"><img src="" class="addcard__img iaddcard__img--2" width="75"
    height="74" alt=""></label>
    </li>

    <li class="addcard__list addADV__hidden ADVelement" dataset-newadvlistthird="newadvlistthird">
    <input type="file" datast-addproductimagename="addproductimagename" data-id="3" name="productImageThird" class="current__input input-photo form-control productImage take-photo" accept="image/*"
    class="form-control" required />
    <label class="adv-label"  for="name"><img src="" class="addcard__img iaddcard__img--3" width="75"
    height="74" alt=""></label>
    </li>

    <li class="addcard__list addADV__hidden ADVelement" dataset-newadvlistfourth="newadvlistfourth">
    <input type="file" datast-addproductimagename="addproductimagename" data-id="4" name="productImageFourth" class="current__input input-photo form-control productImage take-photo" accept="image/*"
    class="form-control" required />
    <label class="adv-label"  for="name"><img src="" class="addcard__img iaddcard__img--4" width="75"
    height="74" alt=""></label>
    </li>

    <li class="addcard__list addADV__hidden ADVelement" dataset-newadvlistfifth="newadvlistfifth">
    <input type="file" datast-addproductimagename="addproductimagename" data-id="5" name="productImageFifth" class="current__input input-photo form-control productImage take-photo" accept="image/*"
    class="form-control" required />
    <label class="adv-label"  for="name"><img src="" class="addcard__img iaddcard__img--5" width="75"
    height="74" alt=""></label>
    </li>

    <li class="addcard__list addADV__hidden ADVelement" dataset-newadvlistsixth="newadvlistsixth">
    <input type="file" datast-addproductimagename="addproductimagename" data-id="6" name="productImageSixth" class="current__input input-photo form-control productImage take-photo" accept="image/*"
    class="form-control" required />
    <label class="adv-label"  for="name"><img src="" class="addcard__img iaddcard__img--6" width="75"
    height="74" alt=""><img src="" class="addcard__img iaddcard__img-sixth" width="75"
    height="74" alt=""></label>
    </li>
    </ul>`;
    
};


export function addAdvListeners(container) {
const block = document.querySelector(container)
cards.activeCard = block.querySelector('.ADVelement');
}


export function getNewADV(e) {
  e.preventDefault()
  
  if (e.target.nodeName === "INPUT") {

cards.cardItems = [...cards.cardItems, 1];

const input = cards.activeCard.querySelector('.current__input')


input.classList.add("ADV__input--hidden");

cards.activeCard.classList.remove("ADVelement")

const currentActiveCard = document.querySelector(".ADVelement")

if (currentActiveCard) {
  cards.activeCard = currentActiveCard
  cards.activeCard.classList.add("addADV__active")

}


    }

    
  }

  
  let productImage;

  export function previewImg(event) {
    if (event.target === event.currentTarget) {
      return;
    }
    changeImgBlock(event);
    if (event.target.dataset.id) {
      const file = event.target.files[0];
      const inputID = event.target.dataset.id;
      const img = document.querySelector(`.iaddcard__img--${inputID}`);
      const reader = new FileReader();
      reader.onloadend = () => {
        img.src = reader.result;
        productImage = reader.result;
        img.setAttribute('data-img', productImage);
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        img.src = '';
      }
    }
  }

  function changeImgBlock(event) {
    let imgId = Number(event.target.dataset.id);
    imgId += 1;
    if (imgId > 6) {
      return;
    }
  }
