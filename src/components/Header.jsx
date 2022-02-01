import React, { useState } from 'react';
import searchIcon from "../assets/images/searchIcon.svg";
import logo from "../assets/images/logo.svg"
import toRight from "../assets/images/toRight.svg";
import user from "../assets/images/User.svg";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const [selected, setSelect] = useState('UZS');

  const handleSelect = choose => {
    setSelect(choose);
    setToggle(false)
  }

  
  return (
    <header className="header">
  <div className="container">

    <div className="header__nav">
      <a href="#" className="header__nav-searchIcon">
        <img className='header__nav-icon' src={searchIcon} alt="" />
      </a>

      <div className="header__nav-select">
        <div className="header__nav-optionBox">
      <button className="header__nav-selectBtn" onClick={handleToggle}>{selected}</button>

      {toggle && (
        <div className="header__nav-selectBox">

        <span className="header__nav-selectOption" onClick={() => handleSelect('UZS')}>UZS</span>
        <span className="header__nav-selectOption" onClick={() => handleSelect('USD')}>USD</span>
        
        </div>
      )}

</div>
</div>

      {/* <a href="#" className="header__nav-currency">usd</a> */}
      {/* <ul className="header__nav-dropdown">
        <li><a href="" className="header__nav-dropLink">uzs</a></li>
        <li><a href="" className="header__nav-dropLink">rubl</a></li>
      </ul> */}
      <a href="#" className="header__nav-mainLogo">
        <img src={logo} alt="" />
      </a>
      <a href="#" className="header__nav-country">uz</a>

      <a href="#" className="header__nav-logIcon">
        <img className='header__nav-icon' src={user} alt="" />
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
  </header>
  );
};

export default Header;
