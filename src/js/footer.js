const footerRef = document.querySelector('#root');

const footerElements = `<footer class="footer id=" footer>
<div class="footer-container">

  <p class="footer-container_title">Есть к нам вопросы?</p>
  <div class="footer-container_box">
    <div class="footer-container_contacts">
      <p class="footer-container_num">Телефон<br />
        <a class="footer-container_num-link" href="tel:+38(050)333-37-96">+38 (050) 333-37-96</a>
      </p>
    </div>
    <div class="footer-container_schedule">График работы CALL-центра<br />
      <span>Пн - Пт: 09:00 - 18:00,<br />
        Сб - Вс: Выходной
      </span></div>
  </div>
</div>
<div class="footer-container_info">
  <hr />
  <p class="footer-container_info-data">&copy; 2020 | GoIT</p>
</div>
</footer>`;

export function createMarkUpFooter() {
  footerRef.innerHTML = footerElements;
}
