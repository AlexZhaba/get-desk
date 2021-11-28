import React, { useState } from "react";
import s from "./Comport.module.scss";
import { Checkbox } from "antd";
import arrowGray from "../../../assets/arrow-grey.svg";

const ComfortGroup = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={s.title}>
        {title}
      </div>
      <div className={s.container}>
        <Checkbox>
          <span className={s.container__item}>Высоскоростной WiFi</span>
        </Checkbox>
        <Checkbox>
          <span className={s.container__item}>Кофемашина</span>
        </Checkbox>
      </div>
      <div className={s.container}>
        <Checkbox>
          <span className={s.container__item}>Открыто круглосуточно</span>
        </Checkbox>
        <Checkbox>
          <span className={s.container__item}>Флипчарт</span>
        </Checkbox>
      </div>
      <div className={s.container}>
        <Checkbox>
          <span className={s.container__item}>Встреча гостей/секретарь</span>
        </Checkbox>
        <Checkbox>
          <span className={s.container__item}>Канцелярские принадлежности</span>
        </Checkbox>
      </div>
      {isOpen && (
        <>
          <div className={s.container}>
            <Checkbox>
              <span className={s.container__item}>Открыто круглосуточно</span>
            </Checkbox>
            <Checkbox>
              <span className={s.container__item}>Флипчарт</span>
            </Checkbox>
          </div>
          <div className={s.container}>
            <Checkbox>
              <span className={s.container__item}>Встреча гостей/секретарь</span>
            </Checkbox>
            <Checkbox>
              <span className={s.container__item}>Канцелярские принадлежности</span>
            </Checkbox>
          </div>
        </>
      )}
      <div className={s.openAll} onClick={() => setIsOpen(!isOpen)}>
        <span>Показать все</span>
        <img src={arrowGray} alt="" style={{transform: isOpen ? "rotate(180deg)": ""}}/>
      </div>
    </div>
  )
}

export default ComfortGroup;
