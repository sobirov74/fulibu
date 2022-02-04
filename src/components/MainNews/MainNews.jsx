import styles from "./mainnews.module.scss";
import MainRecomendations from "../MainRegister/MainRecomendations";
import toRight from "../../assets/images/toRight.svg";

const MainNews = () => {
  return (
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
  );
};

export default MainNews;
