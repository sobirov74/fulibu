import React from "react";
import circleB from "../../assets/images/circleHuge.svg";
import circleS from "../../assets/images/circleSmall.svg";
import styles from "./circlebg.module.scss";

const CircleBg = ({ transform }) => {
  return (
    <div className={styles.circles} style={transform}>
      <img src={circleB} className={styles.circleBig} alt="" />
      <img src={circleS} className={styles.circleSmall} alt="" />
    </div>
  );
};

export default CircleBg;
