import React from "react";

import MarkerImg from "../../assets/MarkerImg.png";
import star from "../../assets/Star.svg";

const MarkerDescription = () => {
  return (
    <div className="marker__container">
      <img src={MarkerImg} className="marker__img" />
      <div className="marker__info">
        <div className="marker__info-top">
          <div className="marker__info-type">Офис</div>
          <div className="marker__info-rating">
            <span>5.0</span>
            <img src={star} alt=""/>
          </div>
        </div>
        <div className="marker__info-address">Офис на Орловской</div>
        <div className="marker__info-price">1 300 ₽/сут</div>
      </div>
    </div>
  );
};

export default MarkerDescription;
