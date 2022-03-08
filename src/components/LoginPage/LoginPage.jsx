import React from "react";
import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import LoginIcon1 from "../../assets/images/LoginIcon1.svg";
import { Link } from "react-router-dom";
import Input from "./Input";

const LoginPage = () => {
  return (
    <main>
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <Link to="/" className={styles.loginBackBtn}>
            <img src={close} alt="" />
          </Link>

          <div className={styles.loginContent}>
            <img src={LoginIcon1} alt="" />

            <h2 className={styles.loginTitle}>ВХОД В АККАУНТ</h2>

            <Input />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
