import React from "react";
import { FaStar } from "react-icons/fa";
import toRight from "../../assets/images/toRight.svg";

import styles from "./mainnews.module.scss";
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

export const xits = books;

const handlePage = (title) => {
  console.log(title);
};

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
        {xits.map((xit) => {
          if(xit.category === 'xits')
          return <SwiperSlide
            onClick={() => handlePage(xit.title)}
            className={styles.main__xits_wrap}
            key={xit.id}
          >
            <Link to={`/CommodityCard/${xit.id}`} className={styles.main__xits_slide}>
              <div className={styles.main__xitsImgBox}>
                <img
                  src={xit.img}
                  className={styles.main__xits_slideImg}
                  alt=""
                />
                <div>
                  <Link to="/" className={styles.main__xitsImgLink1}>
                    Текст
                  </Link>
                  <Link to="/" className={styles.main__xitsImgLink2}>
                    Аудио
                  </Link>
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
                  <Link to={`/CommodityCard/${xit.id}`} className={styles.main__xits_contentPriceLink}>
                    <img src={toRight} alt="" />
                  </Link>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
};
