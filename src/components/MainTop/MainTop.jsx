import React from "react";
import styles from "./maintop.module.scss";
import toRight from "../../assets/images/toRight.svg";
import mainTopImg from "../../assets/images/mainTop.png";
import MainTopSlide from "./MainTopSlide";
import { Link } from "react-router-dom";

const MainTop = () => {
  // const scene1 = useRef();

  return (
    <div className={styles.mainTop}>
      {/* <CircleBg transform={{transform: 'rotate(0deg)'}} /> */}
      <div className="container">
        <div className={styles.mainTop__content}>
          <div className={styles.mainTop__content_left}>
            <h1 className={styles.mainTop__content_title}>
              КНИГИ КОТОРЫЕ ТЫ ЕЩЕ НЕ ЧИТАЛ
            </h1>
            <Link to="/" className={styles.mainTop__content_link}>
              Найти больше книг
              <img src={toRight} alt="" />
            </Link>
          </div>

          <MainTopSlide />
        </div>
      </div>
    </div>
  );
};

export default MainTop;
