import React from "react";
import styles from "../header.module.scss";
import close from "../../../assets/images/close.svg";
import LoginIcon1 from "../../../assets/images/LoginIcon1.svg";
import { Link } from "react-router-dom";
import { Formik, Field, Form  } from "formik";

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

            <Formik 
            initialValues={{
              telNum: '+998 ',
            }}>
              <Form style={{display: "flex", flexDirection: "column"}}>
                <label className={styles.loginLabel} >Введите свой номер телефона</label>
                <Field type='text' name='telNum' className='liginField' />
                <button className={styles.loginBtn}>Получить код</button>
              </Form>
              
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
