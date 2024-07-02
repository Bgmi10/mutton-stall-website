import React from 'react';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { useSelector } from 'react-redux';
import { lang } from '../utils/lang';

export const Body = () => {

  const togglelang = useSelector(store => store.lang.togglelang1)
  
  return (
    <><div>
      <div className='border w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mt-20 h-auto md:h-1/2 lg:h-1/2 xl:h-1/2 mb-8 lg:ml-10 p-2'>
        <p className='font-bold text-black lg:ml-32 sm: ml-10 mt-5 mb-6'>
          {togglelang ? lang.en.body : lang.ta.body}
        </p>
     
          <p className='text-gray-400 font-extralight mt-3'>
          <span className='text-black font-medium'>{togglelang ? lang.en.bodypara1.slice(0, 6) : lang.ta.bodypara1.slice(0,16)}</span> {togglelang ? lang.en.bodypara1.slice(6) : lang.ta.bodypara1.slice(16)}
          </p>
        
        <ScrollAnimation animateIn="fadeInUp">
          <p className='text-gray-400 font-extralight mt-3'>
       <span className='font-medium text-black'>  {togglelang ? lang.en.bodypara2.slice(0,8) : lang.ta.bodypara2.slice(0,8)}</span> {togglelang ? lang.en.bodypara2.slice(8) : lang.ta.bodypara2.slice(8)}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight">
          <p className='text-gray-400 font-extralight mt-3'>
         <span className='text-black font-medium '>{togglelang ? lang.en.bodypara3.slice(0,8) : lang.ta.bodypara3.slice(0,13)}</span> {togglelang ? lang.en.bodypara3.slice(8) : lang.ta.bodypara3.slice(13)}
          </p>
        </ScrollAnimation>
      </div>
      <div>
        {/* profile section */}
      </div>
      </div>
    </>
  );
}
