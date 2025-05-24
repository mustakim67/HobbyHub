import React from 'react';
import { useLottie } from "lottie-react";
import animation from "./Animation.json";

const Lottie = () => {
  
       const options = {
    animationData: animation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Lottie;