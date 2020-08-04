import advertisementFormMarkup from '../profile/profileMarkups';
import apiProducts from '../api/products/apiProducts';

const cards = {
  cardItems: [],
  activeCard: "",
  };

//   const inputs = {
// activeInput: "",
//   }
  

export function addNewProductCard() {
    return `
    <ul class="add__product">
    <li class="addcard__list addADV__hidden addADV__active  ADVelement" dataset-newadvlistfirst="newadvlistfirst">
    <input type="file" datast-addproductimagename="addproductimagename"  data-id="1" name="productImageFirst" class="current__input input-photo form-control productImage take-photo" accept="image/*"
    class="form-control" required />
    <img src="./aquadoctor_17509_images_17750308831.jpg" class="cover__image" width="75"
    height="74" alt="">
    <label class="adv-label"  for="name"><img src="" class="addcard__img iaddcard__img--1" width="75"
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
inputs.activeInput = block.querySelector('.current__input')
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
  








/* <form name="advertisementForm"  data-form="advertisementForm" id="form" class="active-form-advertisement js-active-tab-advertisement">
<div class="form-group">

  <label  class="adv-label" for="name">Название товара</label>
  <input type="text" name="name" id="name" class="advertisement-inputs form-control-advertisement" placeholder="Название"
    required />
   
  <label class="adv-label"  for="name">Фото</label>
  <input type="file" id="img" name="img" class="input-photo form-control " accept="image/*"
    class="form-control" required />

  <label  class="adv-label" for="name">Описание товара</label>
  <textarea style="resize:none"  name="description" id="comments" class="advertisement-inputs form-control-advertisement  input-textarea " name="comment"
    placeholder="Описание"></textarea>
 
  <label  class="adv-label" for="name">Категория товара</label>
  <select id="dropdown" name="category" class="advertisement-inputs form-control-advertisement" required>
    <option disabled selected value class="input-select">Выберите категорию</option>
    <option value="student">2</option>
    <option value="job">3</option>
    <option value="learner">4</option>
    <option value="preferNo">5</option>
    <option value="other">6</option>
  </select>
   
  <label class="adv-label"  id="name-label" for="name">Цена</label>
  <input type="text" name="price" class="form-control form-control__address" placeholder="0.000 &#x20b4;"
    required />

    <label class="adv-label" id="phone-number">Количество</label>
  <input type="tel" name="totalQuantity" class="form-control form-control__address"
    placeholder="+38 (093) 333 99 99" required />

</div>
<button type="submit" id="submit" class="save-button">
  Создать
</button>
</form> */
