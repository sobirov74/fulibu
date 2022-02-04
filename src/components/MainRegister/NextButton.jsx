import { React } from "react";
import { useSwiper } from "swiper/react";
import styles from "./mainregister.module.scss";
import toRight from "../../assets/images/arrow-right.svg";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className={styles.main__reg_icon}
      onClick={() => swiper.slideNext()}
    >
      <img src={toRight} alt="" />
    </button>
  );
}
