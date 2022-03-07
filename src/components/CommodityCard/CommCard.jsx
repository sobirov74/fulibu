import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { postSelector } from "../../redux/postReducer";
import Footer from "../Footer/Footer";
import { MainXitsCard } from "../MainNews/MainXitsCard";
import MainRecomendations from "../MainRegister/MainRecomendations";
import CommTop from "./CommTop";
import styles from "./commtop.module.scss";

const CommCard = () => {
  const { recommend = [], xits = [], newest = [] } = useSelector(postSelector);
  const { id } = useParams();
  const values = newest;
  const book = values.find((book) => book.id === id);
  console.log(values);
  return (
    <>
      <main>
        <div className="container">
          <CommTop data={book} />

          <h3 className={styles.commSlideTitle}>рекомендации</h3>
          <MainRecomendations data={recommend} />
          <MainXitsCard data={xits} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CommCard;
