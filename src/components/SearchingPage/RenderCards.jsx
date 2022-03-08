import styles from "./search.module.scss";
import { Link } from "react-router-dom";
import toRight from "../../assets/images/toRight.svg";
import cardStyles from "../MainRegister/mainregister.module.scss";
import Rating from "../Rating/Rating";

const Cards = ({ cards }) => {
  return (
    <div className={styles.dropCards}>
      {cards &&
        cards.map((book) => {
          return (
            <Link
              to={`/CommodityCard/${book.id}`}
              className={styles.dropCard}
              key={book.id}
            >
              <div className={cardStyles.main_recomend_card}>
                <h4 className={cardStyles.main_recomend_cardAuthor}>
                  {book.author.name}
                </h4>

                <div className={cardStyles.main_recomend_cardImgBox}>
                  <img src={book.image} alt="" />

                  <div className={cardStyles.main_recomend_cardBtns}>
                    <div className={cardStyles.main_recomend_cardLink1}>
                      Текст
                    </div>
                    <div to="/" className={cardStyles.main_recomend_cardLink2}>
                      Аудио
                    </div>
                  </div>
                </div>
                <h4 className={cardStyles.main_recomend_cardTitle}>
                  {book.name}
                </h4>

                <Rating data={book.rating} />

                <div className={cardStyles.main_recomend_cardPriceBox}>
                  <p className={cardStyles.main_recomend_cardPrice}>
                    {book.price} USD
                  </p>

                  <div
                    to={`/CommodityCard/${book.id}`}
                    className={cardStyles.main_recomend_cardPriceLink}
                  >
                    <img src={toRight} alt="" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Cards;
