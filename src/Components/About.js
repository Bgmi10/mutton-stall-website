import React from 'react';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
import {useSelector} from 'react-redux'
import {lang} from '../utils/lang'
 export const About = () => {

    const togglelang = useSelector(store => store.lang.togglelang1)
    

  return (

    

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animateIn='fadeIn'>
      <h1 className='text-2xl font-bold text-center my-10'>{togglelang ? lang.en.Aboutus : lang.ta.Aboutus}</h1>
      <p className='text-lg text-gray-700 text-center mb-8'>
       {togglelang ? lang.en.aboutpara1 : lang.ta.aboutpara1}
      </p>
      <p className='text-lg text-gray-700 text-center mb-8'>
        {togglelang ? lang.en.aboutpara2 : lang.ta.aboutpara2}  
      </p>
      <p className='text-lg text-gray-700 text-center mb-8'>
         {togglelang ? lang.en.aboutpara3 : lang.ta.aboutpara3}
      </p>
      <p className='text-lg text-gray-700 text-center mb-8'>
        {togglelang ? lang.en.aboutpara4 : lang.ta.aboutpara4}
      </p>
      </ScrollAnimation>
    </div>
  );
}
