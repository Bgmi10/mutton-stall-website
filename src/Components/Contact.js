import React, { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully');
    console.log({ name, email, message });
  };

  return (
    <>
    <div className='lg:flex justify-evenly mt-20 mb-20 '>
    <iframe  className="ml-8 sm: h-96 w-[350px] sm: mb-20 lg:w-[500px] lg:h-[500px] rounded-md shadow-md"   marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kalagnar%20St,%20Rajan%20Nagar,%20Lakshmipuram,%20Chennai,%20Tamil%20Nadu%20600099,%20India+(Vellattu%20Kari%20Kadai)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
    <div className="bg-gray-100 p-8 lg:w-[500px] sm: w-[350px] mx-auto rounded-lg shadow-md  lg:h-[500px] ">
     
      <h2 className=" text-2xl font-semibold text-center mb-4 bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-amber-600  text-transparent ml-2">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Send Message
          </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};
