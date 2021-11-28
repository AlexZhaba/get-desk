import React from "react";

import logo from "../../assets/logo.svg";
import footerIcon from "../../assets/footer__language.svg";
import footerArrow from "../../assets/footer__arrow.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import vkIcon from "../../assets/vk-icon.svg";
import telegramIcon from "../../assets/telegram-icon.svg";


const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <img src={logo} alt=""/>
        <div className="footer__contacts">
          <div className="footer__contacts-icon">
            <img src={telegramIcon}/>
          </div>
          <div className="footer__contacts-icon">
            <img src={facebookIcon}/>
          </div>
          <div className="footer__contacts-icon">
            <img src={vkIcon}/>
          </div>
          <div className="footer__contacts-icon">
            <img src={instagramIcon}/>
          </div>
        </div>
        <div className="footer__menu-list">
          <div className="footer__menu-list-item">
            <div className="footer__menu-list-title">
              Сообщество
            </div>
            <div className="footer__menu-list-subtitle">
              Реферальная программа
            </div>
          </div>
          <div className="footer__menu-list-item">
            <div className="footer__menu-list-title">
              Компания
            </div>
            <div className="footer__menu-list-subtitle">
              О сервисе
            </div>
          </div>
          <div className="footer__menu-list-item">
            <div className="footer__menu-list-title">
              Помощь
            </div>
            <div className="footer__menu-list-subtitle">
              Свяжитесь с нами
            </div>
          </div>
          <div className="footer__menu-list-item">
            <div className="footer__menu-list-title">
              Сообщество
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          © 2021 Getdesk.
        </div>
        <ul className="footer__bottom-list">
          <li className="footer__bottom-list-item">Конфидентиальность</li>
          <li className="footer__bottom-list-item">Условия использования</li>
          <li className="footer__bottom-list-item">Реквизиты компании</li>
        </ul>
        <div className="footer__bottom-language_block">
          <img src={footerIcon} alt="" />
          <div className="footer__bottom-language_block-text">
            rus
          </div>
          <img src={footerArrow} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent;
