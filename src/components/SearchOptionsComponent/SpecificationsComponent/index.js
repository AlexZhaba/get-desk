import React, {useEffect, useState} from "react";
import s from "./Specifications.module.scss";
import {Checkbox, Divider} from "antd";
import Counter from "../../shared/Counter";
import Button from "../../shared/Button";

const SpecificationsComponent = ({ activeOption, setActiveOption }) => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (!activeOption) return;
      setActiveOption(null);
    }
    document.addEventListener("click", listener)
    return () => document.removeEventListener("click", listener);
  }, [setActiveOption])

  return (
    <div className={`search__options-list__item${activeOption === "specification" ? "-active" : ""}`} onClick={(e) => {
      setActiveOption("specification");
      e.stopPropagation();
    }}>
      <span>Характеристики офиса</span>
      <div className={`search__options-list__window ${s.wrapper}`} style={{
        opacity: activeOption === "specification" ? "1": "0",
        visibility: activeOption === "specification" ? "visible" : "hidden",
      }} onClick={(e) => e.stopPropagation()}>
        <div className={s.wrapper__title}>Укажите нужные вам характеристики офиса. </div>
        <div className={s.wrapper__subtitle}>В результатах будут показаны офисы, в которых есть все что вы отметили.</div>
        <div className={s.container}>
          <span className={s.container__text}>Рабочие места</span>
          <Counter />
        </div>
        <Divider />
        <div className={s.container}>
          <div className={s.container}>
            <span className={s.container__text}>Закрытые кабинеты</span>
            <Counter />
          </div>
          <div className={s.container}>
            <span className={s.container__text}>Сколько нужно мест</span>
            <Counter />
          </div>
        </div>
        <Divider />
        <div className={s.container}>
          <div className={s.container}>
            <span className={s.container__text}>Переговорные комнаты</span>
            <Counter />
          </div>
          <div className={s.container}>
            <span className={s.container__text}>Сколько нужно мест</span>
            <Counter />
          </div>
        </div>
        <Divider />
        <div className={s.container}>
          <div className={s.container}>
            <span className={s.container__text}>Конференц-залы</span>
            <Counter />
          </div>
          <div className={s.container}>
            <span className={s.container__text}>Сколько нужно мест</span>
            <Counter />
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

export default SpecificationsComponent;
