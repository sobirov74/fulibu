import styles from "./mainnews.module.scss";
import MainRecomendations from "../MainRegister/MainRecomendations";
import toRight from "../../assets/images/toRight.svg";
import { MainXitsCard } from "./MainXitsCard";
import CircleBg from "../circleBg/CircleBg";

const MainNews = () => {
  return (
    <>
      <div className={styles.main__xits}>
        <CircleBg transform={{ transform: "rotate(180deg)" }} />
        <div className="container">
          <h3 className={styles.main__xits_title}>Хиты продаж</h3>
        </div>

        <MainXitsCard />
      </div>

      <div className={styles.mainNews}>
        <div className="container">
          <h3 className={styles.mainTitle}>новинки</h3>

          <MainRecomendations />

          <a href="" className={styles.findMore_link}>
            Найти больше книг
            <img className={styles.findMore_linkImg} src={toRight} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default MainNews;
