import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import LoginIcon1 from "../../assets/images/LoginIcon1.svg";
import { Link } from "react-router-dom";

import InputMask from "react-input-mask";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../Loading/Loading";
import { getPhone } from "../../redux/actions/getActions";
import back from "../../assets/images/arrow-left.svg";

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const [telNum, setTelNum] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    dispatch(getPhone({ phone: telNum }));
    e.preventDefault();
    // setLoading(false);
  };

  if (loading) return <Loading />;

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

            <h2 className={styles.loginTitle}>ВХОД В АККАУНТ</h2>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label className={styles.loginLabel}>
                Введите свой номер телефона
              </label>
              <InputMask
                mask="+\9\9\8 (99)-999-99-99"
                autoCapitalize="true"
                autoFocus
                name="reactMaskInput"
                value={telNum}
                onChange={(e) => setTelNum(e.target.value)}
                className={styles.loginField}
              />
              <button type="submit" className={styles.loginBtn}>
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
