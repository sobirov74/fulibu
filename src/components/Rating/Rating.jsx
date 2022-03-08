import React from "react";
import styles from "./rating.module.scss";
import star from "../../assets/images/StarFull.svg";
import emptyStar from "../../assets/images/Star.svg";

const Rating = ({ data }) => {
  switch (data) {
    case "1":
      return (
        <div className={styles.Stars}>
          <img src={star} alt="" className={styles.Star} />
          <img src={emptyStar} alt="" className={styles.Star} />
          <img src={emptyStar} alt="" className={styles.Star} />
          <img src={emptyStar} alt="" className={styles.Star} />
          <img src={emptyStar} alt="" className={styles.Star} />
        </div>
      );

    case "2": {
      return (
        <div className={styles.Stars}>
          <img src={star} alt="" className={styles.Star} />
          <img src={star} alt="" className={styles.Star} />
          <img src={emptyStar} alt="" className={styles.Star} />
          <img src={emptyStar} alt="" className={styles.Star} />
          <img src={emptyStar} alt="" className={styles.Star} />
        </div>
      );
    }
    case "3": {
      return (
        <div className={styles.Stars}>
          <img src={star} alt="" className={styles.Star} />
          <img src={star} alt="" className={styles.Star} />
          <img src={star} alt="" className={styles.Star} />
          <img src={emptyStar} alt="" className={styles.Star} />
          <img src={emptyStar} alt="" className={styles.Star} />
        </div>
      );
    }
    case "4": {
      return (
        <div className={styles.Stars}>
          <img src={star} alt="" className={styles.Star} />
          <img src={star} alt="" className={styles.Star} />
          <img src={star} alt="" className={styles.Star} />
          <img src={star} alt="" className={styles.Star} />
          <img src={emptyStar} alt="" className={styles.Star} />
        </div>
      );
    }

    default:
      return (
        <div className={styles.Stars}>
          <img src={star} alt="" className={styles.Star} />
          <img src={star} alt="" className={styles.Star} />
          <img src={star} alt="" className={styles.Star} />
          <img src={star} alt="" className={styles.Star} />
          <img src={star} alt="" className={styles.Star} />
        </div>
      );
  }
};

export default Rating;
