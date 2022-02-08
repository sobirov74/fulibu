import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/images/searchIcon.svg";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/User.svg";
import DropDown from "./DropDown";
import styles from "./header.module.scss";
import clsx from "clsx";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  // const [prevPos, setPrevPos] = useState(0);

  const handleScroll = () => {
    let currentScroll = window.scrollY;
    if (currentScroll > lastScroll) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScroll(currentScroll);
    console.log(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [lastScroll]);


  const Scroll = () => {
    var scrol = window.pageYOffset;
    console.log(scrol);
  };

  return (
    <header
      // onScroll={Scroll}
      className={clsx(styles.header, visible && styles.show)}
      style={{ position: "fixed" }}
    >
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
    </header>
  );
};

export default Header;
