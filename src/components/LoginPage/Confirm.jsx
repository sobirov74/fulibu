import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import LoginIcon1 from "../../assets/images/LoginIcon1.svg";
import Loading from "../Loading/Loading";
import ApiService from "../../ApiService";
import { useDispatch } from "react-redux";
import { confirmation } from "../../redux/actions/getActions";

const Confirm = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const code = useRef(null);

  const confirm = (e) => {
    // setLoading(true);
    const body = {
      verify_code: code.current.value,
    };

    dispatch(confirmation(code));
  };

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

            <form onSubmit={(e) => confirm(e)}>
              <label className={styles.loginLabel}>
                Введите код подтверждения
              </label>

              <input
                ref={(input) => (code.current = input)}
                type="text"
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
