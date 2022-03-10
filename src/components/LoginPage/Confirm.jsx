import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import Input from "./Input";
import LoginIcon1 from "../../assets/images/LoginIcon1.svg";

const Confirm = () => {
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

            <Input
              inputLabel={"Введите код подтверждения"}
              inputType={"number"}
              btnLabel={"Подтвердить"}
              to={"/createAcc"}
              path={"confirm"}
            />

            <Link to="/confirm" className={styles.resendPassword}>
              Не получил код!
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Confirm;
