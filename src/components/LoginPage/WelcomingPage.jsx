import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import LoginIcon1 from "../../assets/images/userPage.svg";

const WelcomingPage = () => {
  return (
    <main>
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <Link to="/" className={styles.loginBackBtn}>
            <img src={close} alt="" />
          </Link>

          <div className={styles.loginContent}>
            <img src={LoginIcon1} alt="" />

            <h2 className={styles.loginWelcome}>
              Добро пожаловать <span>Абдумалик</span>{" "}
            </h2>

            <p className={styles.loginWelcomeDescr}>
              Распространте ссылку своим друзьям и близким и получи шанс
              выйграть <span>SPARK!</span>{" "}
            </p>

            <Link to="/" className={styles.loginMore}>
              Подробнее
            </Link>

            <label className={styles.loginField}>
              https://www.fulibu.uz/d/1wsOqTmqNpBedUWmKsdGLlswpZ6pRiFYt/view?usp=sharingалик
            </label>

            <button className={styles.loginBtn}>Скопировать</button>

            <Link to="/" className={styles.loginWelcomeLink}>
              Не сейчас
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WelcomingPage;
