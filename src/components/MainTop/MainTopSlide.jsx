import React from "react";
import MainTop1 from "../../assets/images/mainTop1.png";
import MainTop2 from "../../assets/images/mainTop2.png";
import MainTop3 from "../../assets/images/mainTop3.png";
import MainTop4 from "../../assets/images/mainTop4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./maintop.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BookImages = [
  { img: MainTop1, id: 1 },
  { img: MainTop2, id: 2 },
  { img: MainTop3, id: 3 },
  { img: MainTop4, id: 4 },
];

const MainTopSlide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      style={{ zIndex: "0" }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      className={styles.mainTopSlide}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {BookImages.map((bookImg) => (
        <SwiperSlide
          style={{ width: "1110px" }}
          className={styles.mainTop__content_right}
          key={bookImg.id}
          loop={true}
        >
          <div className={styles.mainTop__content_right}>
            <img
              className={styles.mainTop__content_rightImg}
              src={bookImg.img}
              alt=""
            />
          </div>
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default MainTopSlide;
