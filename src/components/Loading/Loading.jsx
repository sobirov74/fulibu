import React from "react";
import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.center}>
      <div className={styles.ring}> </div>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
