import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import LoginIcon1 from "../../assets/images/LoginIcon1.svg";

const CreateAcc = () => {
  return (
    <main>
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <Link to="/" className={styles.loginBackBtn}>
            <img src={close} alt="" />
          </Link>

          <div className={styles.loginContent}>
            <img src={LoginIcon1} alt="" />

            <h2 className={styles.loginTitle}>СОЗДАНИЕ АККАУНТА</h2>

            {/* <Input
              inputLabel={"Введите код подтверждения"}
              inputType={"text"}
              btnLabel={"Сохранить"}
              to={"/userPage"}
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateAcc;
