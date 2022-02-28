import recomendImg1 from "../../assets/images/recomendImg1.png";
import recomendImg2 from "../../assets/images/recomendImg2.png";
import recomendImg3 from "../../assets/images/recomendImg3.png";
import recomendImg4 from "../../assets/images/recomendImg4.png";
import recomendImg5 from "../../assets/images/recomendImg5.png";
import toRight from "../../assets/images/toRight.svg";
import styles from "./mainregister.module.scss";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";


SwiperCore.use([Autoplay]);

const recomendationsList = [
  {
    id: "1",
    author: "Мария Метлицкая",
    img: recomendImg1,
    title: "Цветы и птицы",
    price: "1 222 230 UZS",
  },
  {
    id: "2",
    author: "Макс Глебов",
    img: recomendImg2,
    title: "Асиметричный",
    price: "1 222 230 UZS",
  },
  {
    id: "3",
    author: "Татьяна Устинова",
    img: recomendImg3,
    title: "Пляжный детектив",
    price: "1 222 230 UZS",
  },
  {
    id: "4",
    author: "Эрика Адамс",
    img: recomendImg4,
    title: "Похищенная для монстра",
    price: "1 222 230 UZS",
  },
  {
    id: "5",
    author: "Анастасия Маркова",
    img: recomendImg5,
    title: "Анастасия Маркова",
    price: "1 222 230 UZS",
  },
  {
    id: "6",
    author: "Татьяна Устинова",
    img: recomendImg3,
    title: "Пляжный детектив",
    price: "1 222 230 UZS",
  },
  {
    id: "7",
    author: "Макс Глебов",
    img: recomendImg2,
    title: "Асиметричный",
    price: "1 222 230 UZS",
  },
  {
    id: "9",
    author: "Эрика Адамс",
    img: recomendImg4,
    title: "Похищенная для монстра",
    price: "1 222 230 UZS",
  },
];

const MainRecomendations = () => {
  return (
    <>
      <div className={styles.main_recomend_cards}>
        <Swiper
          spaceBetween={25}
          slidesPerView={"auto"}
          loop={true}
          className={styles.swiperContainer}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
          {recomendationsList.map((book) => (
            <SwiperSlide className={styles.main_recomend_wrap} key={book.id}>
              <div className={styles.main_recomend_card}>
                <h4 className={styles.main_recomend_cardAuthor}>
                  {book.author}
                </h4>

                <div className={styles.main_recomend_cardImgBox}>
                  <img src={book.img} alt="" />

                  <div className={styles.main_recomend_cardBtns}>
                    <Link to="/" className={styles.main_recomend_cardLink1}>
                      Текст
                    </Link>
                    <Link to="/" className={styles.main_recomend_cardLink2}>
                      Аудио
                    </Link>
                  </div>
                </div>
                <h4 className={styles.main_recomend_cardTitle}>{book.title}</h4>

                <div className={styles.main_recomend_cardStars}>
                  <FaStar className={styles.main_recomend_cardStar} />
                  <FaStar className={styles.main_recomend_cardStar} />
                  <FaStar className={styles.main_recomend_cardStar} />
                  <FaStar className={styles.main_recomend_cardStar} />
                  <FaStar className={styles.main_recomend_cardStar} />
                </div>

                <div className={styles.main_recomend_cardPriceBox}>
                  <p className={styles.main_recomend_cardPrice}>{book.price}</p>
                  <Link to="/" className={styles.main_recomend_cardPriceLink}>
                    <img src={toRight} alt="" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className={styles.overlay}></div>
        </Swiper>
      </div>
    </>
  );
};


export default MainRecomendations;
