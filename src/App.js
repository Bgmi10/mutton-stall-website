import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { LottieAnimation  } from './Components/Lottieanimation';
import { Mainslider } from './Components/Slider';
import { Body } from './Components/Body';
import { About } from './Components/About';
import { Feedback } from './Components/Feedback';
import { Feedbackslider } from './Components/Feedbackslider';
import *  as preloader from './Components/Preloader.json'
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import * as whatsapp from './Components/whatsappgif.json'



function App() {
  

  const [isloading , setisloading] = useState(false)


  useEffect(() => {
       setTimeout(() => {
         setisloading(true)
       }, 3000);
  },[])


  return (
    <div>

      {
         !isloading ? <LottieAnimation  gif={preloader}/> : 
         <>
         <  Header />
         <Mainslider />
        
         <Body />
         <Feedbackslider />
        <Feedback />
        
        <About />
        <Contact />
        <Footer />
         </>
         
         }
    </div>
  );
}

export default App;
