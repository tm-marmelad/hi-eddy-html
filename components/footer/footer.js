function getFooterParamsKeys() {
  return [];
}

function getFooter(params) {
  const { } = extractParams(params, getFooterParamsKeys());

  return `
    <!-- footer -->
    <div class="footer" data-name="${params.component}">
    <div class="footer-info">
  <div class="footer-info__left">
    <p class="footer-info__main-text">Місія проекту</p>
    <p class="footer-info__text">Давати людям знання з найактуальніших тем сьогодення за допомогою
      уроків,
      які дають користувачу
      унікальний досвід користування та переносять його у дивні світи тем, <br> що вивчаються.</p>
  </div>

  <div class="footer-info__center">
    <p class="footer-info__main-text">Навчання</p>
    <div class="footer-info__section">
      <div class="footer-info__text">
        <p><a class="footer-info__column" href="#">Курси</a></p>
        <p><a class="footer-info__column" href="#">Про нас</a></p>
        <p><a class="footer-info__column" href="#">Місія</a></p>
      </div>
      <div class="courses__footer-text">
        <p><a class="footer-info__column" href="#">Ціни</a></p>
        <p><a class="footer-info__column" href="#">Як це працює</a></p>
        <p><a class="footer-info__column" href="#">Уроки</a></p>
      </div>
    </div>
  </div>

  <div class="footer-info__right">
    <p class="footer-info__main-text">Наші соціальні мережі</p>
    <a href="#">
      <img class="footer-info__media-icon" src="./img/facebook.svg" alt="">
    </a>
    <a href="#">
      <img class="footer-info__media-icon" src="./img/instagram.svg" alt="">
    </a>
    <a href="#">
      <img class="footer-info__media-icon" src="./img/messenger.svg" alt="">
    </a>
    <div class="footer-info__media-mail">
      <div class="footer-info__media-icon-mail">
        <a href="#">
          <img class="" src="./img/mail.com.svg" alt="">
        </a>
      </div>
      <p class="footer-info__media-text">Help@hi-eddy.com</p>
    </div>
  </div>
  
</div>
    
    <div>
      <img class="footer__rock" src="./img/left-corner-rock.svg" alt="">
      <img class="footer__duck-small" src="./img/duck.svg" alt="">
      <img class="footer__duck-vision" src="./img/duck.svg" alt="">
      <img class="footer__duck-right" src="./img/duck.svg" alt="">
      <img class="footer__icon" src="./img/icon.svg" alt="">
      <img class="footer__duck-big" src="./img/duck.svg" alt="">
      <img class="footer__liqpay" src="./img/liqpay.png" alt="">
      <img class="footer__visa" src="./img/visa.png" alt="">
      <img class="footer__mastercard" src="./img/mastercard.png" alt="">
      <img class="footer__water" src="./img/water-rect.png" alt="">      
    </div>
    <!-- END. footer -->
  `;
}