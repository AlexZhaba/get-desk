import React, { useState, useEffect } from "react";
import { Checkbox, Divider } from 'antd';
import s from "./Comport.module.scss";
import ComfortGroup from "./ComfortGroup";
import Button from "../../shared/Button";

const ComfortComponent = ({ activeOption, setActiveOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const listener = () => {
      console.log(activeOption);
      if (!activeOption) return;
      setActiveOption(null);
    }
    document.addEventListener("click", listener)
    return () => document.removeEventListener("click", listener);
  }, [setActiveOption])

  return (
    <div className={`search__options-list__item${activeOption === "comfort" ? "-active" : ""}`} onClick={(e) => {
      setActiveOption("comfort");
      e.stopPropagation();
    }}>
      <span>Удобства</span>
      <div className={`search__options-list__window ${s.wrapper}`} style={{
        opacity: activeOption === "comfort" ? "1": "0",
        visibility: activeOption === "comfort" ? "visible" : "hidden",
      }} onClick={(e) => e.stopPropagation()}>
        <ComfortGroup title="Общие удобства"/>
        <Divider />
        <ComfortGroup title="Общие удобства"/>
        <Divider />
        <ComfortGroup title="Общие удобства" />
        <Divider />
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
}

export default ComfortComponent;
