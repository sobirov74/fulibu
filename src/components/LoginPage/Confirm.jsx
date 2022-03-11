import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import LoginIcon1 from "../../assets/images/LoginIcon1.svg";
import { Context } from "../MainContext";
import Loading from "../Loading/Loading";

const Confirm = ({ history }) => {
  const { apiService, phone, saveToken, saveRegister, relatedId } =
    useContext(Context);
  const [loading, setLoading] = useState(false);
  const code = useRef(null);

  const confirm = (e) => {
    setLoading(true);
    const body = {
      phone,
      verify_code: code.current.value,
      ...(relatedId && { linked: relatedId }),
    };

    apiService.postData("/auth", null, body).then((value) => {
      setLoading(false);
      if (value.statusCode === 200) {
        const checker = value.data.registered;
        saveToken(value.data.token);
        saveRegister(checker);

        if (!checker) {
          history.push("/confirm-policy");
        } else {
          history.push("/user");
        }
      }
    });
  };

  if (loading) return <Loading />;

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

              <input type="text" className={styles.loginField} />

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
