import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Feedbackslider = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  console.log(feedbackData)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    vertical : false ,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: null,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchFeedbackDataFromFirebase = async () => {
      const res = await getDocs(collection(db, 'feedback'));
      const data =  res.docs.map(doc => ({...doc.data(), id: doc.id }));
      setFeedbackData(data);
    };

    fetchFeedbackDataFromFirebase();
  }, []);

  return (
    <section className="py-12 bg-white mb-20 mt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">Latest Feedback</h2>
        <Slider {...settings} className="flex justify-center  ">
          {feedbackData?.map((item) => (
            <div 
              key={item.id} 
              className="flex  items-center justify-between p-10 m-5 bg-white rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-1 hover:shadow-2xl mx-4"
              style={{ minHeight: '300px', maxHeight: '350px', width: '300px' }}
            >
              <div className="mb-4 w-full text-center">
                <p className="font-semibold text-lg text-gray-800">Name:</p>
                <p className="text-gray-600">{item.name}</p>
              </div>
              <div className="mb-4 w-full text-center">
                <p className="font-semibold text-lg text-gray-800">Review:</p>
                <div className="max-w-xs mx-auto overflow-hidden whitespace-normal" style={{ maxHeight: '150px' }}>
                  <p className='font-light text-gray-700 text-xl break-words'>{item.feedback}</p>
                </div>
              </div>
              <div className="w-full text-center">
                <h1 className='mb-1 text-gray-800'>Rating:</h1>
                <div className="flex justify-center">
                  {[...Array(item.ratingStar)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-400 mr-2"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
