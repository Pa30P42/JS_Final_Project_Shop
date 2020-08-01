import {advertisementFormMarkup} from '../profile/profileMarkups'
import CreateNewProduct from '../api/products/apiProducts'


const productItem = []

const product = {
"images": [],
"totalQuantity": 0,
"name": "",
"category": "",
"price": 0,
"description": ""
}

// apiProducts.CreateNewProduct({"images": [],
// "totalQuantity": 2,
// "name": "Wrenoholoy",
// "category": "tools",
// "price": 15,
// "description": "Good tool"}
// ).then(data => console.log(data.data));


const getInformation = (e) => {
    product[e.target.name] = e.target.value

    console.log("form.productName", form[key].productName);

    console.log("product[e.target.name]", product[e.target.name]);
    console.log("e.target.value", e.target.value);
    console.log("ETARGET", e.target.value);

}


const addNewProduct = (e) => {
    e.preventDefault()

    productItems = [...productItems, product]
   
    console.log("productItems",productItems);
    
   
}


// const refs = {
//     advertisementForm: document.querySelector('.js-active-tab-advertisement')

// }
// refs.advertisementForm.addEventListener('input', getInformation)
// refs.advertisementForm.addEventListener('submit', addNewProduct)







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
