import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/pngwing.com.png'




export const Mainslider = () => {

    const data = [
     {  title : 'lamb ',
        img : 'https://img.freepik.com/premium-photo/lamb-ribs-white_181303-494.jpg?uid=R152243883&ga=GA1.2.1168591914.1718009553&semt=ais_user'
     },
     {
        title: 'Mutton whole ',
        img: 'https://img.freepik.com/premium-photo/raw-lamb-mutton-chop-steaks-fresh-meat-cutlets-butcher-table-isolated-white-background_89816-46545.jpg?w=826'
     },
     {
        title : 'Curry cut meat  ',
        img :'https://img.freepik.com/premium-photo/uncooked-raw-chicken-liver-poultry-offals-steel-plate-isolated-white-background_89816-49873.jpg?uid=R152243883&ga=GA1.2.1168591914.1718009553'
     },
     {
        title : 'Fresh mutton chop',
        img : 'https://img.freepik.com/premium-photo/various-cuts-raw-beef-meat-isolated-white-background-top-view_89816-52948.jpg?uid=R152243883&ga=GA1.2.1168591914.1718009553'
     }

    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Adjusted for demonstration purposes
        slidesToScroll: 1,
        autoplay: true, // Enable auto sliding
        autoplaySpeed: 2000, // Time between transitions in milliseconds
        nextArrow: null, // Optional: Remove default arrow buttons
        prevArrow: null, // Optional: Remove default arrow buttons
        responsive: [
            {
                breakpoint: 1024, // When screen width is less than 1024px
                settings: {
                    slidesToShow: 2, // Show two slides at a time
                    slidesToScroll: 2, // Scroll two slides at a time
                    initialSlide: 0, // Start at the first slide
                }
            },
            {
                breakpoint: 600, // When screen width is less than 600px
                settings: {
                    slidesToShow: 2, // Show one slide at a time
                    slidesToScroll: 1, // Scroll one slide at a time
                    initialSlide: 0, // Start at the first slide
                }
            }
        ]
    };
    
    
  return (
    <div>
        <h1 className='text-2xl font-bold lg:px-20 py-10  sm: px-10'>Meat Marvels</h1>
        <Slider {...settings} className='h-auto w-auto mr-10 ml-10 '  >
            
              { 
                data.map((i , index) => (
                 <div key={index}>
                     <img src={i.img} className='h-32 w-auto sm: ml-20 '/>
                     <h1 className='lg:ml-22  mt-4 font-serif sm: ml-36'>{i.title}</h1>
                 </div>
                ))
              }
        </Slider>
      {/* <img src='https://belchicken.com/wp-content/uploads/2022/01/homebg1.jpg ' className='w-full'/> */}
    </div>
  )
}
