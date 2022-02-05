import React from "react";
import searchIcon from "../../assets/images/searchIcon.svg";
import logo from "../../assets/images/logo.svg";
import toRight from "../../assets/images/toRight.svg";
import user from "../../assets/images/User.svg";
import DropDown from "./DropDown";
import headerImg from "../../assets/images/headerImg.png";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__nav}>
          <a href="#" className={styles.header__nav_searchIcon}>
            <img className={styles.header__nav_icon} src={searchIcon} alt="" />
          </a>

          <DropDown item1={"UZS"} item2={"USD"} />

          <a href="#" className={styles.header__nav_mainLogo}>
            <img src={logo} alt="" />
          </a>

          <DropDown item1={"uz"} item2={"en"} />

          <a href="#" className={styles.header__nav_logIcon}>
            <img className={styles.header__nav_icon} src={user} alt="" />
          </a>
        </div>

        <div className={styles.header__content}>
          <div className={styles.header__content_left}>
            <h1 className={styles.header__content_title}>
              КНИГИ КОТОРЫЕ ТЫ ЕЩЕ НЕ ЧИТАЛ
            </h1>
            <a href="#" className={styles.header__content_link}>
              Найти больше книг
              <img src={toRight} alt="" />
            </a>
          </div>

          <div className={styles.header__content_right}>
            <img className={styles.header__content_rightImg} src={headerImg} alt="" />
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
