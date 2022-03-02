import toRight from "../../assets/images/toRight.svg";
import styles from "./mainregister.module.scss";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { books } from "../../LibraryOfBooks/Books";

SwiperCore.use([Autoplay]);


export const recomendationsList = books;


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
          {recomendationsList.map((book) => {
            if(book.category === 'recomendation')
            return <SwiperSlide className={styles.main_recomend_wrap} key={book.id}>
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

                  <Link
                    to={`/CommodityCard/${book.id}`}
                    className={styles.main_recomend_cardPriceLink}
                  >
                    <img src={toRight} alt="" />
                  </Link>

                </div>
              </div>
            </SwiperSlide>
          })}

          <div className={styles.overlay}></div>
        </Swiper>
      </div>
    </>
  );
};

export default MainRecomendations;
