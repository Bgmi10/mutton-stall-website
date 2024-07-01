import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { LottieAnimation  } from './Components/Lottieanimation';
import { Mainslider } from './Components/Slider';
import { Body } from './Components/Body';
import { About } from './Components/About';



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
         !isloading ? <LottieAnimation /> : 
         <>
         <  Header />
         <Mainslider />
        
         <Body />
        <About />
         </>
         
         }
    </div>
  );
}

export default App;
