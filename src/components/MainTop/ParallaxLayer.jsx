import Parallax from 'parallax-js';
import React from 'react';

const ParallaxLayer = () => {
  return <div className='wrap-overlay'>
  <Parallax type="sticked" />
  <Parallax type="rotated" />  
  <Parallax />
  <Parallax type="rotated down" />
  </div>;
};

export default ParallaxLayer;
