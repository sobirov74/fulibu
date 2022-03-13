import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import LoginIcon1 from "../../assets/images/LoginIcon1.svg";
import { Link } from "react-router-dom";

import InputMask from "react-input-mask";
import React, { useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.payload);
  const [telNum, setTelNum] = useState({});

  const handleContact = (event) => {
    setTelNum({ ...telNum, number: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(telNum);
    window.localStorage.setItem("telNum", JSON.stringify(telNum));
  };

  return (
    <main>
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <Link to='/' className={styles.loginBackBtn}>
            <img src={close} alt='' />
          </Link>

          <div className={styles.loginContent}>
            <img src={LoginIcon1} alt='' />

            <h2 className={styles.loginTitle}>ВХОД В АККАУНТ</h2>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column" }}>
              <label className={styles.loginLabel}>
                Введите свой номер телефона
              </label>
              <InputMask
                mask='+\9\9\8 (99)-999-99-99'
                name='reactMaskInput'
                onChange={handleContact}
                className={styles.loginField}
              />
              <button type='submit' className={styles.loginBtn}>
                Получить код
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
