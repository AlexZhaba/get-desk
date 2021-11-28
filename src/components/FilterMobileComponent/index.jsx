import React, { useState } from "react";
import Counter from "../shared/Counter";
import { Checkbox, Divider, InputNumber, Slider, Switch } from "antd";
import Button from "../shared/Button";
import s from "./index.scss";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";

const FilterMobileComponent = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [sliderValue, setSliderValue] = useState([0, 100]);

  const handleChange = (event) => {
    setMinPrice(event[0]);
    setMaxPrice(event[1]);
    setSliderValue([event[0], event[1]]);
  }
  return (
    <div className="search__mobile-filter">
      <div className="search__mobile-filter__title">
        Характеристики офиса
      </div>
      <div className="search__mobile-filter__subtitle">
        В результатах будут показаны офисы, в которых есть все что вы отметили.
      </div>
      <div className="search__mobile-filter-flex">
        <span>Закрытые кабинеты</span>
        <Counter />
      </div>
      <Divider />
      <div className="search__mobile-filter-flex">
        <span>Закрытые кабинеты</span>
        <Counter />
      </div>
      <div className="search__mobile-filter-flex">
        <span>Закрытые кабинеты</span>
        <Counter />
      </div>
      <Divider />
      <div className="search__mobile-filter-flex">
        <span>Закрытые кабинеты</span>
        <Counter />
      </div>
      <div className="search__mobile-filter-flex">
        <span>Закрытые кабинеты</span>
        <Counter />
      </div>
      <div className="search__mobile-filter-flex" style={{marginTop: 30}}>
        <div className="search__mobile-filter__title">
          Цена
        </div>
        <Checkbox>
          <span style={{fontSize: 16}}>Очистить</span>
        </Checkbox>
      </div>
      <Slider range defaultValue={sliderValue} disabled={false} handleStyle={{
        width: 40,
        height: 40
      }} tooltipVisible={false} onChange={handleChange} />
      <div className="search__mobile-filter-flex">
        <div className="">
          <div className="input__sub">от</div>
          <InputNumber size="large" controls={false} value={minPrice} style={{width: 126}} />
        </div>
        <div className="">
          <div className="input__sub">до</div>
          <InputNumber size="large" controls={false} value={maxPrice} style={{width: 126}} />
        </div>
      </div>
      <div className="search__mobile-filter__title" style={{ marginTop: 40, marginBottom: 10 }}>
        Общие удобства
      </div>
      <div className="search__mobile-filter__checkbox">
        <Checkbox>
          <span>Высоскоростной WiFi</span>
        </Checkbox>
      </div>
      <div className="search__mobile-filter__checkbox">
        <Checkbox>
          <span>Высоскоростной WiFi</span>
        </Checkbox>
      </div>
      <div className="search__mobile-filter__checkbox">
        <Checkbox>
          <span>Высоскоростной WiFi</span>
        </Checkbox>
      </div>
      <div className="search__mobile-filter__title" style={{ marginTop: 40, marginBottom: 10 }}>
        Общие удобства
      </div>
      <div className="search__mobile-filter__checkbox">
        <Checkbox>
          <span>Высоскоростной WiFi</span>
        </Checkbox>
      </div>
      <div className="search__mobile-filter__checkbox">
        <Checkbox>
          <span>Высоскоростной WiFi</span>
        </Checkbox>
      </div>
      <div className="search__mobile-filter__checkbox">
        <Checkbox>
          <span>Высоскоростной WiFi</span>
        </Checkbox>
      </div>
      <div className="search__mobile-filter__title" style={{ marginTop: 40, marginBottom: 10 }}>
        Общие удобства
      </div>
      <div className="search__mobile-filter__checkbox">
        <Checkbox>
          <span>Высоскоростной WiFi</span>
        </Checkbox>
      </div>
      <div className="search__mobile-filter__checkbox">
        <Checkbox>
          <span>Высоскоростной WiFi</span>
        </Checkbox>
      </div>
      <div className="search__mobile-filter__checkbox">
        <Checkbox>
          <span>Высоскоростной WiFi</span>
        </Checkbox>
      </div>
      <div className="search__mobile-filter__title" style={{ marginTop: 40, marginBottom: 10 }}>
        Мгновенное бронирование
      </div>
      <div className="search__mobile-filter-flex">
        <div className="search__mobile-filter__subtitle">
          Показать только те пространства, где доступно бронирование без подтверждения
        </div>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          size="large"
          defaultChecked
        />
      </div>
      <div className="search__mobile-filter__bottom">
        <Button>Применить</Button>
      </div>
    </div>
  );
};

export default FilterMobileComponent;
