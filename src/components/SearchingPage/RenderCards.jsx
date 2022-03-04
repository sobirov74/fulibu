import styles from "./search.module.scss";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import toRight from "../../assets/images/toRight.svg";
import cardStyles from "../MainRegister/mainregister.module.scss";


const Cards = ({cards})=>{
  return (
    <div className={styles.dropCards}>
            {cards && cards.map((book) => {
              return (
                <div className={styles.dropCard} key={book.id}>
                  <Link to={`/CommodityCard/${book.id}`} className={cardStyles.main_recomend_card}>
                    <h4 className={cardStyles.main_recomend_cardAuthor}>
                      {book.author}
                    </h4>

                    <div className={cardStyles.main_recomend_cardImgBox}>
                      <img src={book.img} alt="" />

                      <div className={cardStyles.main_recomend_cardBtns}>
                        <Link
                          to="/"
                          className={cardStyles.main_recomend_cardLink1}
                        >
                          Текст
                        </Link>
                        <Link
                          to="/"
                          className={cardStyles.main_recomend_cardLink2}
                        >
                          Аудио
                        </Link>
                      </div>
                    </div>
                    <h4 className={cardStyles.main_recomend_cardTitle}>
                      {book.title}
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

                      <Link
                        to={`/CommodityCard/${book.id}`}
                        className={cardStyles.main_recomend_cardPriceLink}
                      >
                        <img src={toRight} alt="" />
                      </Link>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
  )
}

export default Cards