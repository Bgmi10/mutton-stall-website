// Import necessary libraries
import React from 'react';
import Lottie from 'react-lottie';



export  const LottieAnimation = ({gif}) => {
  // Configuration options for the Lottie animation
  const defaultOptions = {
    
    autoplay: true, // Set to true for automatic play
    animationData:gif , // Import the JSON animation data
   
  };

  

  return (
    <div className="animation-container flex justify-center lg:mt-40 sm: mt-80">
      <Lottie options={defaultOptions} height={200} width={200}  />
    </div>
  );
};