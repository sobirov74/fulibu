import styles from "./mainnews.module.scss";
import MainRecomendations from "../MainRegister/MainRecomendations";
import toRight from "../../assets/images/toRight.svg";
import { MainXitsCard } from "./MainXitsCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { postSelector } from "../../redux/postReducer";

const MainNews = () => {
  const { xits = [] } = useSelector(postSelector);
  const { newest = [] } = useSelector(postSelector);
  // const { collection = [] } = useSelector(postSelector);
  return (
    <>
      <div className={styles.main__xits}>
        <div className="container">
          <h3 className={styles.main__xits_title}>Хиты продаж</h3>
        </div>

        <MainXitsCard data={xits} />
        {/* 
        <div className="container">
          <h3 className={styles.main__xits_title}>Сборники</h3>
        </div>

        <MainXitsCard data={xits} /> */}
      </div>

      <div className={styles.mainNews}>
        <div className="container">
          <h3 className={styles.mainTitle}>новинки</h3>

          <MainRecomendations data={newest} />

          <Link to="/search" className={styles.findMore_link}>
            Найти больше книг
            <img className={styles.findMore_linkImg} src={toRight} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainNews;
