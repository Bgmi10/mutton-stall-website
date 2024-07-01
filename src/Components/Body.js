import React from 'react';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

export const Body = () => {
  return (
    <><div>
      <div className='border w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mt-20 h-auto md:h-1/2 lg:h-1/2 xl:h-1/2 mb-8 lg:ml-10 p-2'>
        <p className='font-bold text-black lg:ml-32 sm: ml-10 mt-5 mb-6'>
          Herdwick Lamb, Hogget and Mutton 
        </p>
     
          <p className='text-gray-400 font-extralight mt-3'>
            <span className='text-black font-medium'>‘Lamb’</span> is classed as young sheep meat under 1 year old; the animals are still classed as lamb until they have grown their first incisors. This meat is delicate in flavor and tender in texture.
          </p>
        
        <ScrollAnimation animateIn="fadeInUp">
          <p className='text-gray-400 font-extralight mt-3'>
            <span className='text-black font-medium'>‘Hogget’ </span>is sheep meat between 1-2 years old. This tends to be produced from the slow-growing hill breeds as they often do not fatten in time to be classed as lamb. Hogget is delicious and benefits from the tenderness of a relatively young animal along with some of the richer flavor of older sheep meat.
            All cuts listed, can be purchased as Hogget or Mutton, unless otherwise stated, the default will be Hogget, please state in the “add comments” section if you would like Mutton as opposed to Hogget.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight">
          <p className='text-gray-400 font-extralight mt-3'>
            <span className='text-black font-medium'>‘Mutton’</span> is sheep meat over 2 years old, this worthy meat is truly superb when reared on a grass diet, the carcass is dry-aged on the bone to mature and tenderize. The meat is rich and deep in flavor.
            Herdwick sheep are Lakelands’ native sheep breed; they eat a natural diet of fell grasses and heather.
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
