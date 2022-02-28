import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/images/searchIcon.svg";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/User.svg";
import DropDown from "./DropDown";
import "react-dropdown/style.css";
import styles from "./header.module.scss";
import clsx from "clsx";
import LoginPage from "./LoginPage/LoginPage";
import { Link, NavLink } from "react-router-dom";

const handleActive = () => {
  const login = document.querySelector();
};

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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [lastScroll]);

  return (
    <header
      // onScroll={Scroll}
      className={clsx(styles.header, visible && styles.show)}
      style={{ position: "fixed" }}
    >
      <div className={styles.header__nav}>
        <Link to="/" className={styles.header__nav_searchIcon}>
          <img className={styles.header__nav_icon} src={searchIcon} alt="" />
        </Link>

        <DropDown item1={"UZS"} item2={"USD"} />

        <Link to="/" className={styles.header__nav_mainLogo}>
          <img src={logo} alt="" />
        </Link>

        <DropDown item1={"uz"} item2={"en"} />

        {/* <NavLink className="nav-link" to="/LoginPage"> */}
        <Link to="/LoginPage" className={styles.header__nav_logIcon}>
          <img className={styles.header__nav_icon} src={user} alt="" />
        </Link>
        {/* </NavLink> */}
      </div>

      {/* <LoginPage/> */}
    </header>
  );
};

export default Header;
