import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import styles from "../circleBg/circlebg.module.scss";
import circleB from "../../assets/images/circleHuge.svg";
import circleS from "../../assets/images/circleSmall.svg";

export const ParallaxComponent = ({ type }) => {
  const scene1 = useRef();

  useEffect(() => {
    const parallax1 = new Parallax(scene1.current, {
      calibrateX: true,
      calibrateY: true,
    });

    return () => {
      parallax1.disable();
    };
  }, []);

  return (
    <div className="parallax">
      <div className={`parallax-wrapper ${type}`}>
        <div ref={scene1} className={styles.circles} data-relative-input="true">
          <img data-depth="0.4" src={circleB} alt="" className={styles.circleBig} />
          <img data-depth="0.5" src={circleS} alt=""  className={styles.circleSmall}/>
        </div>
      </div>
    </div>
  );
};
