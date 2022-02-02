import React from "react";
import searchIcon from "../assets/images/searchIcon.svg";
import logo from "../assets/images/logo.svg";
import toRight from "../assets/images/toRight.svg";
import user from "../assets/images/User.svg";
import DropDown from "./functions/DropDown";
import headerImg from '../assets/images/headerImg.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <a href="#" className="header__nav-searchIcon">
            <img className="header__nav-icon" src={searchIcon} alt="" />
          </a>

          <DropDown item1={"UZS"} item2={"USD"} />

          <a href="#" className="header__nav-mainLogo">
            <img src={logo} alt="" />
          </a>

          <DropDown item1={"uz"} item2={"en"} />


          <a href="#" className="header__nav-logIcon">
            <img className="header__nav-icon" src={user} alt="" />
          </a>
        </div>

        <div className="header__content">
          <div className="header__content-left">
            <h1 className="header__content-title">
              КНИГИ КОТОРЫЕ ТЫ ЕЩЕ НЕ ЧИТАЛ
            </h1>
            <a href="#" className="header__content-link">
              Найти больше книг
              <img src={toRight} alt="" />
            </a>
          </div>

          <div className="header__content-right">
            <img className="header__content-rightImg" src={headerImg} alt="" />
          </div>
        </div>
      </div>

      <div className="circle1"></div>
      <div className="circle2"></div>
    </header>
  );
};

export default Header;
