import React from "react";
import { Input, DatePicker } from 'antd';

import logo from "../../assets/logo.svg";
import languageImg from "../../assets/header__language.svg";
import userImg from "../../assets/header__user.svg";

const HeaderComponent = () => {
  return (
    <div className="header">
      <img src={logo} className="header__logo" />
      <div className="header__two-inputs">
        <div className="header__input">
          <Input
            placeholder="Выберите город"
            className="header__input-inner"
          />
        </div>
        <DatePicker className="header__date" placeholder="Выберите дату" />
      </div>
      <div className="header__buttons">
        <img src={languageImg} alt=""/>
        <img src={userImg} alt=""/>
      </div>
    </div>
  )
}

export default HeaderComponent;
