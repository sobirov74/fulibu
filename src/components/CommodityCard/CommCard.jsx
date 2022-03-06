import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { MainXitsCard, xits } from "../MainNews/MainXitsCard";
import MainRecomendations from "../MainRegister/MainRecomendations";
import CommTop from "./CommTop";
import styles from "./commtop.module.scss";

const CommCard = ({ data }) => {
  const { id } = useParams();
  const values = data;
  const book = values.find((book) => book.id === id);

  return (
    <>
      <main>
        <div className="container">
          <CommTop data={book} />

          <h3 className={styles.commSlideTitle}>рекомендации</h3>
          <MainRecomendations />
          <MainXitsCard />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CommCard;
