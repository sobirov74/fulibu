import styles from "./search.module.scss";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import toRight from "../../assets/images/toRight.svg";
import cardStyles from "../MainRegister/mainregister.module.scss";

const Cards = ({ cards }) => {
  return (
    <div className={styles.dropCards}>
      {cards &&
        cards.map((book) => {
          return (
            <div className={styles.dropCard} key={book.id}>
              <Link
                to={`/CommodityCard/${book.id}`}
                className={cardStyles.main_recomend_card}
              >
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

                <div className={cardStyles.main_recomend_cardStars}>
                  <FaStar className={cardStyles.main_recomend_cardStar} />
                  <FaStar className={cardStyles.main_recomend_cardStar} />
                  <FaStar className={cardStyles.main_recomend_cardStar} />
                  <FaStar className={cardStyles.main_recomend_cardStar} />
                  <FaStar className={cardStyles.main_recomend_cardStar} />
                </div>

                <div className={cardStyles.main_recomend_cardPriceBox}>
                  <p className={cardStyles.main_recomend_cardPrice}>
                    {book.price}
                  </p>

                  <div
                    to={`/CommodityCard/${book.id}`}
                    className={cardStyles.main_recomend_cardPriceLink}
                  >
                    <img src={toRight} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
