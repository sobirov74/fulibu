/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./mainregister.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import toLeft from "../../assets/images/arrow-left.svg";
import toRight from "../../assets/images/arrow-right.svg";
import slideIcon1 from "../../assets/images/slideIcon1.svg";
import slideIcon2 from "../../assets/images/slideIcon2.svg";
import slideIcon3 from "../../assets/images/slideIcon3.svg";
import slideIcon4 from "../../assets/images/slideIcon4.svg";
import slideIcon5 from "../../assets/images/slideIcon5.svg";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlideNextButton from "./NextButton";
import SlidePrevButton from "./PrevButton";

const state = [
  {
    id: 1,
    title: "и читай книги",
    outline: "Регистрируйся ",
    description:
      "В нашей платформе более 5000 книг и журналов на разные темы и увлечения. У нас ты найдешь книгу души, можешь не выходя из дома путешествовать или окунутся в запутанный криминальный детектив.",
    rightIcon: slideIcon1,
  },
  {
    id: 2,
    title: "Покупай книгу и ",
    outline: "наслаждайся",
    description:
      "Во всех книгах вложена душа писатьеля. Все эмоции передаются через платформе ",
    rightIcon: slideIcon2,
  },
  {
    id: 3,
    title: "  и зарабатывай",
    outline: "Приглашай ",
    description:
      "Чем больше друзей позовешь, тем больше покупок. Чем больше покупок, тем больше кэшбэков. Таким нехитрым способом можно зарабатывать и шанс выиграть супер приз.",
    rightIcon: slideIcon3,
  },
  {
    id: 4,
    title: " это не только возврат!",
    outline: "КЭШБЭК",
    description:
      "За покупку каждого дуга можно получать кэшбэк. Даже ели твой друг позовет своего друга, то кэшбэк получишь и ты. Приглашай друзей, зарабатывай и читай вместе.",
    rightIcon: slideIcon4,
  },
  {
    id: 5,
    title: "Наконец ",
    outline: "Spark",
    description:
      "Никогда такого не было, что бы за прочтение книг дарили автомобили. А вот мы дарим, быстрее читай книги и побеждай. Не упусти шанс!",
    rightIcon: slideIcon5,
  },
];

// const matchOutline = ({ match }) => {
//   if (match.id === 2 || match.id === 5) {
//     return (<h3 className={styles.main__reg_title}>
//       {match.title}<a href="">{match.outline}</a>
//     </h3>)
//   } if (match.id === 1 || match.id === 3 || match.id === 4) {
//     return (<h3 className={styles.main__reg_title}>
//       <a href="">{match.outline}</a> {match.title}
//     </h3>)
//   }
// }

const RegSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      style={{ zIndex: "0" }}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      className={styles.main__reg}
    >
      {state.map((match) => (
        <SwiperSlide
          style={{ width: "1110px" }}
          className={styles.main__reg_swiperSlide}
          key={match.id}
          loop={true}
        >
          <div className={styles.main__reg_left}>
            <div>
              {/* {() => matchOutline(match)} */}

              <h3 className={styles.main__reg_title}>
                <a href="">{match.outline}</a> {match.title}
              </h3>

              <p className={styles.main__reg_descr}>{match.description}</p>
            </div>
          </div>

          <div className={styles.main__reg_right}>
            <img src={match.rightIcon} alt="" />
          </div>
        </SwiperSlide>
      ))}

      <div className={styles.main__reg_dots}>
        <SlidePrevButton />

        <SlideNextButton />
      </div>
    </Swiper>
  );
};

export default RegSwiper;
