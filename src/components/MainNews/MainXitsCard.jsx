import React from "react";
import { FaStar } from "react-icons/fa";
import toRight from "../../assets/images/toRight.svg";
import xitsImg1 from "../../assets/images/xitsImg1.png";
import xitsImg2 from "../../assets/images/xitsImg2.png";
import xitsImg3 from "../../assets/images/recomendImg3.png";
import xitsImg4 from "../../assets/images/recomendImg4.png";
import xitsImg5 from "../../assets/images/recomendImg2.png";
import styles from "./mainnews.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Autoplay]);

const xits = [
  {
    id: 1,
    author: "Марк Мэнсон",
    title: "Тонкое искусство пофигизма",
    description:
      "Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее – будь лучше всех. Как какой-то малец придумал приложение и заработал кучу денег, статьями в духе ",
    bookImg: xitsImg1,
    price: "11 230 UZS",
  },
  {
    id: 2,
    author: "Андрей Курпатов",
    title: "Красная таблетка. Посмотри правде в глаза!",
    description:
      "Книга простым языком объясняет читателю, каким образом работает человеческий мозг. Без сложной терминологии автор говорит о самой природе сознания – емко, просто и с долей юмора. ",
    bookImg: xitsImg2,
    price: "11 230 UZS",
  },
  {
    id: 3,
    author: "Марк Мэнсон",
    title: "Тонкое искусство пофигизма",
    description:
      "Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее – будь лучше всех. Как какой-то малец придумал приложение и заработал кучу денег, статьями в духе ",
    bookImg: xitsImg3,
    price: "11 230 UZS",
  },
  {
    id: 4,
    author: "Марк Мэнсон",
    title: "Тонкое искусство пофигизма",
    description:
      "Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее – будь лучше всех. Как какой-то малец придумал приложение и заработал кучу денег, статьями в духе ",
    bookImg: xitsImg4,
    price: "11 230 UZS",
  },
  {
    id: 5,
    author: "Марк Мэнсон",
    title: "Тонкое искусство пофигизма",
    description:
      "Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее – будь лучше всех. Как какой-то малец придумал приложение и заработал кучу денег, статьями в духе ",
    bookImg: xitsImg5,
    price: "11 230 UZS",
  },
];

export const MainXitsCard = () => {
  return (
    <div className={styles.main__xits_slides}>
      <Swiper
        spaceBetween={25}
        slidesPerView={"auto"}
        loop={true}
        className={styles.swiperContainer}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        ...
        {xits.map((xit) => (
          <SwiperSlide className={styles.main__xits_wrap} key={xit.id}>
            <div className={styles.main__xits_slide}>
              <div className={styles.main__xitsImgBox}>
                <img
                  src={xit.bookImg}
                  className={styles.main__xits_slideImg}
                  alt=""
                />
                <div>
                  <a href="" className={styles.main__xitsImgLink1}>
                    Текст
                  </a>
                  <a href="" className={styles.main__xitsImgLink2}>
                    Аудио
                  </a>
                </div>
              </div>

              <div className={styles.main__xits_content}>
                <h4 className={styles.main__xits_contentTitle}>{xit.title}</h4>
                <span className={styles.main__xits_contentAuthor}>
                  {xit.author}
                </span>

                <div className={styles.main__xits_contentStars}>
                  <FaStar className={styles.main__xits_contentStar} />
                  <FaStar className={styles.main__xits_contentStar} />
                  <FaStar className={styles.main__xits_contentStar} />
                  <FaStar className={styles.main__xits_contentStar} />
                  <FaStar className={styles.main__xits_contentStar} />
                </div>

                <p className={styles.main__xits_contentDescr}>
                  {xit.description}
                </p>

                <div className={styles.main__xits_contentPriceBox}>
                  <p className={styles.main__xits_contentPrice}>{xit.price}</p>
                  <a href="" className={styles.main__xits_contentPriceLink}>
                    <img src={toRight} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
