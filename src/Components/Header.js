import React, { useState } from 'react';

import logo from '../images/logo.png';
import { useDispatch } from 'react-redux';
import { togglelang } from '../utils/lanslice';

export const Header = () => {
  const dispatch  = useDispatch()


  const [lang , setlang] = useState('')

  dispatch(togglelang(lang))


  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="" className="text-white font-bold text-xl flex items-center">
          <img src={logo} className='h-10 w-10 animate-pulse' alt="Logo" />
          
          {/* <p className='bg-clip-text bg-gradient-to-r from-blue-400 via-amber-500 to-amber-400 text-2xl text-transparent ml-2'>Raje Mutton Center</p> */}
        </a>

        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-[#f0f0f0] hover:text-gray-300 text-xl font-light hover:scale-110 transition-transform duration-150 ease-in-out">Contact Us</a></li>
            
            <select onChange={e => setlang(e.target.value)}>
              <option value={'en'}>English</option>
              <option value={'ta'}>Tamil</option>
            </select>
          </ul>
        </nav>
      </div>
    </header>
  );
};
