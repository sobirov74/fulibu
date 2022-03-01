import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { xits } from "../MainNews/MainXitsCard";
import MainRecomendations, {
  recomendationsList,
} from "../MainRegister/MainRecomendations";
import CommTop from "./CommTop";
import styles from "./commtop.module.scss";

const CommCard = () => {
  const { id } = useParams();
  const values = (recomendationsList, xits);
  const book = values.find((book) => book.id === id);
  return (
    <>
      <main>
        <div className="container">
          <CommTop data={book} />

          <h3 className={styles.commSlideTitle}>рекомендации</h3>
          <MainRecomendations />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CommCard;
