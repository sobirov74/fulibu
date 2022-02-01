import React from 'react';
import searchIcon from "../../images/searchIcon.svg";
import mainLogo from "../../images/logo.svg";
import userIcon from "../../images/User.svg";
import toRight from "../../images/toRight.svg";

const Header = () => {
  return <header className="header">
  <div className="container">

    <div className="header__nav">
      <a href="#" className="header__nav-searchIcon">
        <img className='header__nav-icon' src={searchIcon} alt="" />
      </a>

      <a href="#" className="header__nav-currency">usd</a>
      {/* <ul className="header__nav-dropdown">
        <li><a href="" className="header__nav-dropLink">uzs</a></li>
        <li><a href="" className="header__nav-dropLink">rubl</a></li>
      </ul> */}
      <a href="#" className="header__nav-mainLogo">
        <img src={mainLogo} alt="" />
      </a>
      <a href="#" className="header__nav-country">uz</a>

      <a href="#" className="header__nav-logIcon">
        <img className='header__nav-icon' src={userIcon} alt="" />
      </a>


    </div>

    <div className="header__content">
      <div className="header__content-left">
        <h1 className="header__content-title">КНИГИ КОТОРЫЕ 
ТЫ ЕЩЕ НЕ ЧИТАЛ</h1>
        <a href="#" className="header__content-link">Найти больше книг
          <img src={toRight} alt="" />
        </a>
      </div>
    </div>

  </div>
  </header>;
};

export default Header;
