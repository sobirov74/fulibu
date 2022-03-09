import { ParallaxComponent } from "./Paralax";
import React from "react";

const ParallaxLayer = () => {
  return (
    <div className="wrap-overlay">
      <ParallaxComponent type="down" />
      <ParallaxComponent type="rotated" />
      <ParallaxComponent type="down" />
    </div>
  );
};

export default ParallaxLayer;
