import React, { useState, useEffect } from "react";
import { Slider, InputNumber, Checkbox } from "antd";
import Button from "../../shared/Button/index";
import s from "./Price.module.scss";


const PriceComponent = ({ activeOption, setActiveOption }) => {

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [sliderValue, setSliderValue] = useState([0, 100]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setMinPrice(event[0]);
    setMaxPrice(event[1]);
    setSliderValue([event[0], event[1]]);
  }

  useEffect(() => {
    const listener = () => {
      if (!activeOption) return;
      setActiveOption(null);
    }
    document.addEventListener("click", listener)
    return () => document.removeEventListener("click", listener);
  }, [setActiveOption])

  return (
    <div className={`search__options-list__item${activeOption === "price" ? "-active" : ""}`} onClick={(e) => {
      setActiveOption("price");
      e.stopPropagation();
    }}>
      <span>Цена</span>

      <div className={s.wrapper} style={{
        opacity: activeOption === "price" ? "1": "0",
        visibility: activeOption === "price" ? "visible" : "hidden",
      }} onClick={(e) => e.stopPropagation()}>
        <Slider range defaultValue={sliderValue} disabled={false} handleStyle={{
          width: 40,
          height: 40
        }} tooltipVisible={false} onChange={handleChange} />
        <div className={s.input__wrapper}>
          <div className="">
            <div className="input__sub">от</div>
            <InputNumber size="large" controls={false} value={minPrice} style={{width: 126}} />
          </div>
          <div className="">
            <div className="input__sub">до</div>
            <InputNumber size="large" controls={false} value={maxPrice} style={{width: 126}} />
          </div>
        </div>
        <div className={s.input__bottom}>
          <div>
            <Checkbox>
              <span style={{fontSize: 16}}>Очистить</span>
            </Checkbox>
          </div>
          <Button>
            Применить
          </Button>
        </div>
      </div>
    </div>
  )
};

export default PriceComponent;
