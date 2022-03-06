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

SwiperCore.use([Autoplay]);

const MainRecomendations = ({ recommend = [] }) => {
  if (!recommend.length) return null;
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
          {recommend?.map((book) => {
            return (
              <SwiperSlide className={styles.main_recomend_wrap} key={book.id}>
                <Link
                  to={`/CommodityCard/${book.id}`}
                  className={styles.main_recomend_card}
                >
                  <h4 className={styles.main_recomend_cardAuthor}>
                    {book.author.name}
                  </h4>

                  <div className={styles.main_recomend_cardImgBox}>
                    <img src={book.image[0]} alt="" />

                    <div className={styles.main_recomend_cardBtns}>
                      <div to="/" className={styles.main_recomend_cardLink1}>
                        Текст
                      </div>
                      <div to="/" className={styles.main_recomend_cardLink2}>
                        Аудио
                      </div>
                    </div>
                  </div>
                  <h4 className={styles.main_recomend_cardTitle}>
                    {book.name}
                  </h4>

                  <div className={styles.main_recomend_cardStars}>
                    <FaStar className={styles.main_recomend_cardStar} />
                    <FaStar className={styles.main_recomend_cardStar} />
                    <FaStar className={styles.main_recomend_cardStar} />
                    <FaStar className={styles.main_recomend_cardStar} />
                    <FaStar className={styles.main_recomend_cardStar} />
                  </div>

                  <div className={styles.main_recomend_cardPriceBox}>
                    <p className={styles.main_recomend_cardPrice}>
                      {book.price}
                    </p>

                    <div
                      to={`/CommodityCard/${book.id}`}
                      className={styles.main_recomend_cardPriceLink}
                    >
                      <img src={toRight} alt="" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}

          <div className={styles.overlay}></div>
        </Swiper>
      </div>
    </>
  );
};

export default MainRecomendations;
