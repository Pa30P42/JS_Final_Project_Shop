import close from '../../images/adv/icons/close-icon.svg';
import { getImg, getElementsForFavorites } from '../../js/sale/saleSection';

const productItem = item => {
  return `
    <section class="product__card container">

    <button class="product__card-close">
      <img 
      src="${close}"
      alt="x"
      width="14"
      />
    </button>

      <div class="product__title-mobile">
        <h2 class="product__card-title">
          ${item.name}
        </h2>
        <span class="product__code">
          код:
          <span class="product__code-number">${item._id}</span>
        </span>
      </div>

      <div class="product__images-wrapper">
        <div class="product__card-images">
          <div class="product__image">
            <img class="product__image_item"
              id="productImage"
              src="${item.images[0]}"
              alt=" sorry, the picture was not loaded :(" height="525" width="525"
            />
          </div>
          <ul class="product__image--preview-list">
            ${item.images.map(
              image => `
              <li class="product__image--preview-item">
                <img class="product__img-preview"
                  src="${image}"
                  alt=":("
                  width="74" height="74"
                  onclick="document.getElementById('productImage').setAttribute('src', '${image}')"
                />
              </li>`,
            )}
          </ul>
        </div>

        <div class="product__wrapper-tablet">
          <div class="product__title-tablet">
            <h2 class="product__card-title">
              ${item.name}
            </h2>
            <span class="product__code">
              код:  
              <span class="product__code-number">${item._id}</span>
            </span>
          </div>
          <div class="product__price-wrapper">
            <span class="product__price">${item.price}</span>
            <span class="product__price-credits"> &#8372;</span>
          </div>
          <div class="product__to-add-wrapper">
            <button id="btnBuy" class="buy-btn">купить</button>
              <img class="adv__favorite" id="btnFavourite" data-id="${item._id}" 
              data-favorite="${getElementsForFavorites(item)}" 
      src="${getImg(item._id)}" alt="like" width="20" />
              <span class="adv__in-favorite" data-action="adv__action_favorite">Избранное</span>
          </div>

          <div class="product__describtion-desktop">
            <div class="product__describtion-wrapper">
              <span class="product__describtion-title">Описание:</span>
              <p class="product__describtion">
                ${item.description}
              </p>
            </div>
            <div class="product__guarantee-wrapper">
              <span class="product__guarantee-title">Гарантия:</span>
              <p class="product__guarantee">
              12 месяцев официальной гарантии от производителя
              </br>Обмен/возврат товара в течение 14 дней
              </br>Продавец гарантирует упаковку заказанного товара, которая обеспечит целостность и сохранность его товарного вида      
              </p>
            </div>
          </div>
        </div>

      </div>
    <div class="product__describtion-tablet">
      <div class="product__describtion-wrapper">
        <span class="product__describtion-title">Описание:</span>
        <p class="product__describtion">
          ${item.description}
        </p>
      </div>
      <div class="product__guarantee-wrapper">
        <span class="product__guarantee-title">Гарантия:</span>
        <p class="product__guarantee">
        12 месяцев официальной гарантии от производителя
        </br>Обмен/возврат товара в течение 14 дней
        </br>Продавец гарантирует упаковку заказанного товара, которая обеспечит целостность и сохранность его товарного вида
        </p>
      </div>
    </div>
    </section>`;
};

export default productItem;
