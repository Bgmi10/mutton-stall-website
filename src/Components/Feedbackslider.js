import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Feedbackslider = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
      const data = res.docs.map(doc => ({...doc.data(), id: doc.id }));
      setFeedbackData(data);
    };

    fetchFeedbackDataFromFirebase();
  }, []);

  return (
    <section className="py-12 bg-gradient-to-t from-black mb-20 mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-8 ">Latest Feedback</h2>
        <Slider {...settings} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mr-4  ">
          {feedbackData.map((item, index) => (
            <div key={item.id} className=" p-6  bg-gradient-to-tr via-amber-300 from-slate-900 rounded-lg shadow-xl transform transition duration-500 hover:-translate-y-1 hover:shadow-2xl" style={{background: "linear-gradient(to right, #ff9966, #ff5e62)"}}>
              <div className="  items-center mb-4 ">
                <p className="font-semibold text-lg">Name:</p>
                <p>{item.name}</p>
              </div>
              <div className=" items-center mb-4">
                <p className="font-semibold text-lg">Review:</p>
                <div className="max-w-xs overflow-hidden whitespace-normal" style={{ maxHeight: '150px' }}>
                  <p className='font-light text-xl break-words'>{item.feedback}</p>
                </div>
              </div>
              <div className="">
                <h1 className='mb-1 '>Rating : </h1>
                {[...Array(item.ratingStar)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-yellow-400 mr-2"
                  />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
