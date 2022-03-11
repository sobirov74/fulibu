import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import LoginIcon1 from "../../assets/images/LoginIcon1.svg";
import { Link } from "react-router-dom";

import InputMask from "react-input-mask";
import React, { useContext, useRef, useState } from "react";
import { Formik, Form } from "formik";
import { Context } from "../MainContext";
import Loading from "../Loading/Loading";

const LoginPage = ({ history }) => {
  // if (loading) return <Loading />;

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

            {/* <Input
              inputLabel={"Введите свой номер телефона"}
              btnLabel={"Получить код"}
              to={"/confirm"}
              path={"LoginPage"}
            /> */}

            <Formik>
              <Form
                // onSubmit={(e) => handleSubmit(e)}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label className={styles.loginLabel}>
                  Введите свой номер телефона
                </label>
                <InputMask
                  mask="+\9\9\8 (99)-999-99-99"
                  name="reactMaskInput"
                  className={styles.loginField}
                />
                <button type="submit" className={styles.loginBtn}>
                  Получить код
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
