import React from 'react';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
import {useSelector} from 'react-redux'
 export const About = () => {

    const lang = useSelector(store => store.lang.togglelang1)
    
    


  return (

    

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animateIn='fadeIn'>
      <h1 className='text-2xl font-bold text-center my-10'>About Us</h1>
      <p className='text-lg text-gray-700 text-center mb-8'>
        Welcome to our family-owned mutton stall, where we've been serving the community with the finest mutton dishes for over three decades. Our passion for quality and tradition drives us to source the freshest ingredients and cook each meal with care.
      </p>
      <p className='text-lg text-gray-700 text-center mb-8'>
        We specialize in traditional mutton recipes passed down through generations, ensuring each bite is filled with flavors that transport you to a place of warmth and comfort. From our succulent lamb roasts to our rich mutton curries, we cater to a wide range of tastes.
      </p>
      <p className='text-lg text-gray-700 text-center mb-8'>
        At our stall, we believe in sustainability and ethical practices. Our mutton comes from locally sourced farms where animals are raised humanely. We're committed to supporting local businesses and contributing positively to our community.
      </p>
      <p className='text-lg text-gray-700 text-center mb-8'>
        Whether you're hosting a grand feast or simply craving a hearty meal, we invite you to visit our stall and experience the difference that quality and tradition bring to your plate.
      </p>
      </ScrollAnimation>
    </div>
  );
}
