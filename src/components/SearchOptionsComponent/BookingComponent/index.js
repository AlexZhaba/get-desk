import React, {useEffect, useState} from "react";
import s from "./Booking.module.scss";
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const BookingComponent = ({ activeOption, setActiveOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const listener = () => {
      console.log(activeOption);
      if (!activeOption) return;
      setActiveOption(null);
      console.log("kill")
    }
    document.addEventListener("click", listener)
    return () => document.removeEventListener("click", listener);
  }, [setActiveOption])

  return (
    <div className={`search__options-list__item${activeOption === "booking" ? "-active" : ""}`} onClick={(e) => {
      setActiveOption("booking");
      e.stopPropagation();
    }}>
      <span>Мгновенное бронирование</span>
      <div className={`search__options-list__window ${s.wrapper}`} style={{
        opacity: activeOption === "booking" ? "1": "0",
        visibility: activeOption === "booking" ? "visible" : "hidden",
      }} onClick={(e) => e.stopPropagation()}>
        <div className={s.title}>Мгновенное бронирование</div>
        <div className={s.container}>
          <div className={s.comment}>
            Показать только те пространства, где доступно бронирование без подтверждения
          </div>
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            size="large"
            defaultChecked
          />
        </div>
      </div>
    </div>
  )
};

export default BookingComponent;
