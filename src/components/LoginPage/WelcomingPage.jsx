import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import LoginIcon1 from "../../assets/images/userPage.svg";
import { useSelector } from "react-redux";
import { accountSelector } from "../../redux/accountReducer";

const WelcomingPage = () => {
  const { name } = useSelector(accountSelector);
  const [nameCur, setName] = useState("");
  const [copy, setCopy] = useState("Скопировать");
  const button = useRef();
  const textArea = useRef();
  useEffect(() => {
    setName(name);
  }, [name]);

  const copyToClipboard = () => {
    const text = textArea.current.innerText;
    navigator.clipboard.writeText(text);
    button.current.style.background = "#FE8D00";
    setCopy("copied");
  };

  console.log(name);

  return (
    <main>
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <div className={styles.loginBtnsBox}>
            <Link to="/" className={styles.loginBackBtn}>
              <img src={close} alt="" />
            </Link>
          </div>

          <div className={styles.loginContent}>
            <img src={LoginIcon1} alt="" />

            <h2 className={styles.loginWelcome}>
              Добро пожаловать <span>{nameCur}</span>
            </h2>

            <p className={styles.loginWelcomeDescr}>
              Распространте ссылку своим друзьям и близким и получи шанс
              выйграть <span>SPARK!</span>{" "}
            </p>

            <Link to="/" className={styles.loginMore}>
              Подробнее
            </Link>

            <label
              ref={(link) => (textArea.current = link)}
              className={styles.loginField}
            >
              https://www.fulibu.uz/d/1wsOqTmqNpBedUWmKsdGLlswpZ6pRiFYt/view?usp=sharingалик
            </label>

            <button
              ref={button}
              onClick={copyToClipboard}
              className={styles.loginBtn}
            >
              {copy}
            </button>

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
