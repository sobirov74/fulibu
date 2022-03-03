import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import styles from "../circleBg/circlebg.module.scss";
import circleB from "../../assets/images/circleHuge.svg";
import circleS from "../../assets/images/circleSmall.svg";
import book1 from "../../assets/images/openBookBg.svg";
import book2 from "../../assets/images/closedBookBg.svg";
import book3 from "../../assets/images/openBookBg4.svg";
import book4 from "../../assets/images/openBookBg3.svg";
import book5 from "../../assets/images/openBookBg1.svg";

export const ParallaxComponent = ({ type }) => {
  const scene1 = useRef();
  const scene2 = useRef();

  useEffect(() => {
    const parallax1 = new Parallax(scene1.current, {
      calibrateX: true,
      calibrateY: true,
    });
    const parallax2 = new Parallax(scene2.current, {
      calibrateX: true,
      calibrateY: true,
    });

    return () => {
      parallax1.disable();
      parallax2.disable();
    };
  }, []);

  return (
    <div className="parallax">
      <div className={`parallax-wrapper ${type}`}>
        <div ref={scene1} className={styles.circles} data-relative-input="true">
          <img
            data-depth="1.2"
            src={circleB}
            alt=""
            className={styles.circleBig}
          />
          <img
            data-depth="0.5"
            src={circleS}
            alt=""
            className={styles.circleSmall}
          />
        </div>
        {/* <div className={styles.booksBox}> */}
          <div ref={scene2} className={styles.books}>
            <img
              src={book1}
              className={styles.parallaxBook}
              data-depth="0.8"
              alt=""
            />
            <img
              src={book2}
              className={styles.parallaxBook}
              data-depth="1.4"
              alt=""
            />
            <img
              src={book3}
              className={styles.parallaxBook}
              data-depth="0.7"
              alt=""
            />
            <img
              src={book4}
              className={styles.parallaxBook}
              data-depth="1.1"
              alt=""
            />
            <img
              src={book5}
              className={styles.parallaxBook}
              data-depth="0.7"
              alt=""
            />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};
