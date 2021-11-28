import React from "react";
import offerImage from "../../../assets/offer-image.png";
import star from "../../../assets/Star.svg";
import OfferItemMobileComponent from "./OfferItemMobileComponent";

const OfferItemComponent = ({ mobile }) => {
  if (mobile) return (
    <OfferItemMobileComponent mobile={mobile} />
  )
  return (
    <div className="offer-list__item offer">
      <div className="offer__img">
        <img src={offerImage} alt="" className="offer__img-inner" />
      </div>
      <div className="offer__info">
        <div className="offer__info-top">
          <div className="offer__info-title">
            Офис на этаже БЦ Васильевский
          </div>
          <div className="offer__info-container">
            <div className="offer__info-favorite" />
            <div className="offer__info-rate">
              <span>4.9</span>
              <img src={star} alt=""/>
            </div>
          </div>
        </div>
        <div className="offer__info-subtitle">Переговорная комната</div>
        <div className="offer__info-tags-list">
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
        <div className="offer__info-bottom">
          <ul className="offer__info-params">
            <li className="offer__info-params__item">
              80 мест
            </li>
            <li className="offer__info-params__item">
              355 м²
            </li>
          </ul>
          <div className="offer__info-params__price">
            1 300 ₽/сут
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferItemComponent;
