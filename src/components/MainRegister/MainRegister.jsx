import React from "react";
import RegSwiper from "./RegSwiper";
import toRight from "../../assets/images/toRight.svg";
import MainRecomendations from "./MainRecomendations";
import styles from "./mainregister.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { postSelector } from "../../redux/postReducer";

const MainRegister = () => {
  const { recommend } = useSelector(postSelector);
  return (
    <>
      <div className={styles.main__registration}>
        <div className="container">
          <RegSwiper />

          <div className={styles.main_recomend}>
            <h3 className={styles.main_recomend_title}>рекомендации</h3>

            <MainRecomendations data={recommend} />

            <Link to="/" className={styles.findMore_link}>
              Найти больше книг
              <img src={toRight} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainRegister;
