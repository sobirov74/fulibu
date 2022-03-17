import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";
import close from "../../assets/images/close.svg";
import back from "../../assets/images/arrow-left.svg";
import LoginIcon1 from "../../assets/images/LoginIcon1.svg";
import { useDispatch } from "react-redux";
import { accaunt } from "../../redux/actions/getAccount";
import { useSelector } from "react-redux";
import { confirmSelector } from "../../redux/confirmReducer";

const CreateAcc = () => {
  const [name, setName] = useState("");
  const nameRef = useRef(null);
  const dispatch = useDispatch();
  const { token } = useSelector(confirmSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(accaunt({ name: nameRef.current.value, token }));
  };

  return (
    <main>
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <div className={styles.loginBtnsBox}>
            <button className={`${styles.loginBack} ${styles.loginBackBtn}`}>
              <img src={back} alt="" />
            </button>
            <Link to="/" className={styles.loginBackBtn}>
              <img src={close} alt="" />
            </Link>
          </div>

          <div className={styles.loginContent}>
            <img src={LoginIcon1} alt="" />

            <h2 className={styles.loginTitle}>Сохранить</h2>
            <form onSubmit={handleSubmit}>
              <label className={styles.loginLabel}>
                Введите код подтверждения
              </label>

              <input
                type="text"
                autoFocus
                ref={(input) => (nameRef.current = input)}
                onChange={(e) => setName(e.target.value)}
                autoCapitalize="true"
                value={name}
                className={styles.loginField}
                placeholder="Abdumalik"
              />

              <button type="submit" className={styles.loginBtn}>
                Подтвердить
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateAcc;
