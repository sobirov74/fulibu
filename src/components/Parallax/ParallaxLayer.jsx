import { ParallaxComponent } from "./Paralax";
import React from "react";

const ParallaxLayer = () => {
  return (
    <div className="wrap-overlay">
      <ParallaxComponent type="rotated" />
      <ParallaxComponent type="down" />
      {/* <ParallaxComponent type="rotated" /> */}
    </div>
  );
};

export default ParallaxLayer;
