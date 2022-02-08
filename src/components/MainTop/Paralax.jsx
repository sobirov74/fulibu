import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import styles from "../circleBg/circlebg.module.scss";

export const ParallaxComponent = ({ types }) => {
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
      <div className={`parallax-wrapper ${types}`}>
        <div ref={scene1} className={styles.circles}>
          <div data-depth="0.9" className={styles.circleBig}></div>
          <div data-depth="0.7" className={styles.circleSmall}></div>
        </div>
      </div>
    </div>
  );
};
