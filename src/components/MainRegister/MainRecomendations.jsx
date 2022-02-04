import recomendImg1 from "../../assets/images/recomendImg1.png";
import recomendImg2 from "../../assets/images/recomendImg2.png";
import recomendImg3 from "../../assets/images/recomendImg3.png";
import recomendImg4 from "../../assets/images/recomendImg4.png";
import recomendImg5 from "../../assets/images/recomendImg5.png";
import toRight from '../../assets/images/toRight.svg'
import styles from './mainregister.module.scss'
import { FaStar } from "react-icons/fa";

const recomendationsList = [
  {
      id:'1',
    author: "Мария Метлицкая",
    img: recomendImg1,
    title: "Цветы и птицы",
    price: "1 222 230 UZS",
  },
  {
    id:'2',
    author: "Макс Глебов",
    img: recomendImg2,
    title: "Асиметричный",
    price: "1 222 230 UZS",
  },
  {
    id:'3',
    author: "Татьяна Устинова",
    img: recomendImg3,
    title: "Пляжный детектив",
    price: "1 222 230 UZS",
  },
  {
    id:'4',
    author: "Эрика Адамс",
    img: recomendImg4,
    title: "Похищенная для монстра",
    price: "1 222 230 UZS",
  },
  {
    id:'5',
    author: "Анастасия Маркова",
    img: recomendImg5,
    title: "Анастасия Маркова",
    price: "1 222 230 UZS",
  },
];

const MainRecomendations = () => {
  return (
    <div className={styles.main_recomend_cards}>
       { recomendationsList.map(book => (
           <div className={styles.main_recomend_card} key={book.id}>
        <h4 className={styles.main_recomend_cardAuthor}>{book.author}</h4>

        <div className={styles.main_recomend_cardImgBox}>
          <img src={book.img} alt="" />

          <div className={styles.main_recomend_cardBtns}>
            <a href="" className={styles.main_recomend_cardLink1}>
              Текст
            </a>
            <a href="" className={styles.main_recomend_cardLink2}>
              Аудио
            </a>
          </div>
        </div>
        <h4 className={styles.main_recomend_cardTitle}>
          {book.title}
        </h4>

        <div className={styles.main_recomend_cardStars}>
          <FaStar className={styles.main_recomend_cardStar} />
          <FaStar className={styles.main_recomend_cardStar} />
          <FaStar className={styles.main_recomend_cardStar} />
          <FaStar className={styles.main_recomend_cardStar} />
          <FaStar className={styles.main_recomend_cardStar} />
        </div>

        <div className={styles.main_recomend_cardPriceBox}>
          <p className={styles.main_recomend_cardPrice}>{book.price}</p>
          <a href="" className={styles.main_recomend_cardPriceLink}>
            <img src={toRight} alt="" />
          </a>
        </div>
      </div>
       ))}
      
    </div>
  );
};

export default MainRecomendations;
