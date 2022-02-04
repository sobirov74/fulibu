import styles from "./mainxits.module.scss";
import { MainXitsCard } from "./MainXitsCard";

const MainXits = () => {
  return (
    <div className={styles.main__xits}>
      <div className="container">
        <h3 className={styles.main__xits_title}>Хиты продаж</h3>
      </div>

      <MainXitsCard />
    </div>
  );
};

export default MainXits;
