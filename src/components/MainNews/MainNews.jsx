import styles from "./mainnews.module.scss";
import MainRecomendations from "../MainRegister/MainRecomendations";
import toRight from "../../assets/images/toRight.svg";
import { MainXitsCard } from "./MainXitsCard";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

const MainNews = ({ data = [], newest = [] }) => {
  return (
    <>
      <div className={styles.main__xits}>
        <div className="container">
          <h3 className={styles.main__xits_title}>Хиты продаж</h3>
        </div>

        <MainXitsCard data={data} />
      </div>

      <div className={styles.mainNews}>
        <div className="container">
          <h3 className={styles.mainTitle}>новинки</h3>

          <MainRecomendations recommend={newest} />

          <Link to="/" className={styles.findMore_link}>
            Найти больше книг
            <img className={styles.findMore_linkImg} src={toRight} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

const MapStateToProps = state => {
  console.log(state);
  return state
}

export default connect(MapStateToProps, null)(MainNews);
