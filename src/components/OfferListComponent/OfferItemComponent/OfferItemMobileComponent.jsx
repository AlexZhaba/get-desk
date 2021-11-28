import React from "react";

import star from "../../../assets/Star.svg";
import offerImage from "../../../assets/offer-image.png";

const OfferItemMobileComponent = () => {
  return (
    <div className="offer__mobile">
      <div className="offer__info-top" style={{ justifyContent: "space-between" }}>
        <div className="offer__info-title offer__mobile-title">
          Офис на этаже
        </div>
        <div className="offer__info-params__price offer__mobile-price">
          1 300 ₽/сут
        </div>
      </div>
      <div className="offer__info-bottom offer__info-bottom-mobile">
        <div className="offer__info-mobile">
          <div className="offer__info-subtitle offer__info-subtitle-mobile">Переговорная комната</div>
          <div className="offer__info-rate">
            <span>4.9</span>
            <img src={star} alt=""/>
          </div>
        </div>
        <ul className="offer__info-params">
          <li className="offer__info-params__item offer__info-params__item-mobile">
            80 мест
          </li>
          <li className="offer__info-params__item offer__info-params__item-mobile">
            355 м²
          </li>
        </ul>
      </div>
      <img src={offerImage} alt="" className="offer__img-inner-mobile" />
      <div className="offer__info-tags-list offer__info-tags-list-mobile">
        <div className="offer__info-tag">
          Высокоскоростной WiFi
        </div>
        <div className="offer__info-tag">
          Открыто круглосуточно
        </div>
        <div className="offer__info-tag">
          Встреча гостей/секретарь
        </div>
        <div className="offer__info-tag">
          Кофемашина
        </div>
      </div>
    </div>
  );
}

export default OfferItemMobileComponent;
