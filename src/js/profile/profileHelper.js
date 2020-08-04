 `<div class="favourites-wrapper tabs__panel" id="form" data-form="favourites">
          <div class="favourites-wrapper__position">
    
                <ul class="favourites-list ">
                  <li class="favourites-list__items"  >
                    <button class="favourites-list__favorite-button"><span tooltip="Убрать из избранного">o</span>
                      <img src="" alt="" class="item__favorite-icon">
                    </button>
    
                    <img src="./images/profile/image6.png" alt="img" class="item-img" width="80">
                    <p class="item-name">Духовой шкаф электрический</p>
                    <div class="item-rate">
                      <img src="" alt="" class="item-rate__img">
                      <img src="" alt="" class="item-rate__img">
                      <img src="" alt="" class="item-rate__img">
                      <img src="" alt="" class="item-rate__img">
                      <img src="" alt="" class="item-rate__img">
                    </div>
                    <div class="item-price">
                      <p class="item-price__old"><s>&#x20b4;</s></p>
                      <p class="item-price__new"> &#x20b4;</p>
                    </div>
    
                  </li>
    
                  <li class="favourites-list__items">
                    <button class="favourites-list__favorite-button"><span tooltip="Убрать из избранного">o</span>
                
                      <img src="" alt="" class="item__favorite-icon">
                    </button>
    
                    <img src="" alt="" class="item-img" width="80">
                    <p class="item-name">Духовой шкаф электрический</p>
                    <div class="item-rate">
                      <img src="" alt="" class="item-rate__img">
                      <img src="" alt="" class="item-rate__img">
                      <img src="" alt="" class="item-rate__img">
                      <img src="" alt="" class="item-rate__img">
                      <img src="" alt="" class="item-rate__img">
                    </div>
                    <div class="item-price">
                      <p class="item-price__old"><s> 10 555 &#x20b4;</s></p>
                      <p class="item-price__new"> 13 999 &#x20b4;</p>
                    </div>
    
                  </li>
    
    
    
    
                </ul>
                <button type="submit" id="submit" class="favorite-button save-button">
                  Купить всё
                </button>
                </div>
              </div>





              <label id="name-label" for="name"><em> * </em>Почтовый индекс</label>
                    <input type="text" name="postIndex"   value="${userData.user.address.zip = '12345'}"  class="form-control  form-control__address" placeholder="00000"
                      required />




                      const profileCreateSingleCardMarkup = element => {
                          const profileRating = () => {
                            let markup = '';
                            let number = profileGetRandomInt(1, 6);
                            for (let i = 1; i <= number; i += 1) {
                              markup +=  < li class = "card_rating" > < /li>  `;

 return markup `;
 
 const profileGetRandomInt = (min, max) => {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
 };

 const profileCardItemMarkup = (element, sale) => {
     return `
 ` < li class = "favourites-list__items"
     data - id = $ {
         element._id
       } >
       <
       div class = "card-image" >
       $ {
         userData.isMobile ?
           ` < img class = "card_img"
 src = "${element.images[0]}"
 alt = "${element.name}"
 width = "86" / > ` :
           ` < img class = "card_img-tablet"
 src = "${element.images[0]}"
 alt = "${element.name}"
 width = "149" / > `
       }

       <
       /div>

       <
       button class = "favourites-list__favorite-button" > < span tooltip = "Убрать из избранного" > o < /span> <
     img src = ""
     alt = ""
     class = "item__favorite-icon" >
       <
       /button> <
     img src = "${vector}"
     alt = "img"
     class = "item-img"
     width = "80" >
       <
       p class = "item-name" > $ {
         element.name
       } < /p> <
     ul class = "item-rate" > $ {
       profileRating()
     } < /ul> <
     div class = "item-price" >
       <
       p class = "item-price__old" > < s > & #x20b4; < /s></p >
     <
     p class = "item-price__new" > & #x20b4; < /p>
     $ {
       sale
         ?
         <p class="item-price__new">${element.price * 1.3}<span> &#x20b4;</span></p>`
 // <p class="item-price__old">${element.price}<span> &#8372;</span></p>` :
 //  `<p class="item-price__old">${element.price}<span> &#8372;</span></p>`
