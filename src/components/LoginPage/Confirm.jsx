import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import LoginIcon1 from "../../assets/images/LoginIcon1.svg";
import { useDispatch } from "react-redux";
import { confirmation } from "../../redux/actions/getActions";
import { useSelector } from "react-redux";
import { loginSelector } from "../../redux/loginReducer";
import back from "../../assets/images/arrow-left.svg";

const Confirm = ({ history }) => {
  const dispatch = useDispatch();
  const [verCode, setVerCode] = useState("");
  const code = useRef(null);
  const { phone = "" } = useSelector(loginSelector);

  // console.log(phone, "po");

  // const phone = "+998 (90)-952-00-09";

  const confirm = (e) => {
    e.preventDefault();
    dispatch(confirmation({ verify_code: code.current.value, phone }));
  };

  return (
    <main>
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <div className={styles.loginBtnsBox}>
            <button
              onClick={() => history.goBack()}
              className={`${styles.loginBack} ${styles.loginBackBtn}`}
            >
              <img src={back} alt="" />
            </button>
            <Link to="/" className={styles.loginBackBtn}>
              <img src={close} alt="" />
            </Link>
          </div>

          <div className={styles.loginContent}>
            <img src={LoginIcon1} alt="" />

            <h2 className={styles.loginTitle}>ВХОД В АККАУНТ</h2>

            <form onSubmit={(e) => confirm(e)}>
              <label className={styles.loginLabel}>
                Введите код подтверждения
              </label>

              <input
                ref={(input) => (code.current = input)}
                type="text"
                autoFocus
                value={verCode}
                onChange={(e) => setVerCode(e.target.value)}
                className={`${styles.loginField} ${styles.conInput}`}
                placeholder="123 123"
              />

              <button type="submit" className={styles.loginBtn}>
                Подтвердить
              </button>
            </form>
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
