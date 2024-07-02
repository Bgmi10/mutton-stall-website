import React from 'react';
import logo from '../images/logo.png'

export const Footer = () => {
  return (
    <footer className="bg-white text-black p-4 w-full">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="flex md:w-1/4 flex-col md:flex-row md:justify-start md:items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <img src={logo} className='w-10 h-10 bg-'></img>
            <span className="ml-3 text-xl text-black">Vellatu kari kadai</span>
          </a>
          <nav className="md:ml-10 md:flex flex-wrap items-center text-base justify-center">
            <a href="#one" className="mr-5 hover:text-gray-500">About</a>
            <a href="#two" className="mr-5 hover:text-gray-500">Services</a>
            <a href="#three" className="mr-5 hover:text-gray-500">Clients</a>
            <a href="#four" className="mr-5 hover:text-gray-500">Careers</a>
          </nav>
        </div>
        <div className="flex flex-grow pt-4 pb-2 mt-4 lg:mt-0">
          <div className="relative flex flex-wrap justify-center flex-col-reverse lg:flex-row max-w-9xl mx-auto">
            <div className="relative z-0 w-full px-4">
              <div className="absolute inset-0 flex items-center">
                <div className="relative z-10 w-full max-w-xs mx-auto">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="p-8">
                      <p className="text-sm font-medium text-center text-gray-500">
                        For support, contact{' '}
                        <a href="#" className="text-indigo-400 hover:text-indigo-500">support@example.com</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-sm text-gray-400">
          © 2024 BrandName, Inc. All rights reserved.
        </div>
        <div className="flex space-x-3">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M18 13a-1 1 0 11-2 0v-4A1 1 0 0115 0h8a1 1 0 110 2v4a1 1 0 01-1 1zM15 7a1 1 0 100-2v4a1 1 0 102 0V7zm-4-4a1 1 0 00-1 1v2H7V6a1 1 0 00-1-1zm8 8a1 1 0 100-2v-2h2v2a1 1 0 002 0z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
