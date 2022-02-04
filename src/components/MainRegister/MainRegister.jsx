import React from "react";
import RegSwiper from "./RegSwiper";
import toRight from "../../assets/images/toRight.svg";
import MainRecomendations from "./MainRecomendations";
import styles from "./mainregister.module.scss";

const MainRegister = () => {
  return (
    <React.Fragment>
      <div className={styles.main__registration}>
        <div className="container">
          <div className={styles.main__reg_box}>
            <RegSwiper />
          </div>

          {/* <div className={styles.circle2 main__reg_circle2}></div>
    <div className={styles.circle1 main__reg_circle1}></div> */}

          <div className={styles.main_recomend}>
            <h3 className={styles.main_recomend_title}>рекомендации</h3>
            <MainRecomendations />
            <MainRecomendations />

            <a href="#" className={styles.findMore_link}>
              Найти больше книг
              <img src={toRight} alt="" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainRegister;
