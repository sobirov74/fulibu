import { React } from "react";
import { useSwiper } from "swiper/react";
import styles from "./mainregister.module.scss";
import toLeft from "../../assets/images/arrow-left.svg";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      className={styles.main__reg_icon}
      onClick={() => swiper.slidePrev()}
    >
      <img src={toLeft} alt="" />
    </button>
  );
}
