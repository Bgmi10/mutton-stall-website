import React, { useEffect, useState } from 'react';
import { faCoffee, faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LottieAnimation } from './Lottieanimation';
import * as formgif from  './form submission gif.json'

export const Feedback = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('')
  const [ratingStar, setRatingStar] = useState(0);
  const [emoji, setEmoji] = useState('');
  const [formsubmission ,setformsubmission] = useState(false)



  const handleClick = async (e) => {
    e.preventDefault();
    try {
     const res =  await addDoc(collection(db, 'feedback'), {
        name,
        feedback,
        ratingStar,
      });
      setformsubmission(res.firestore.type === 'firestore')
    } catch (error) {
      console.error(error);
    }

    setName('');
    setFeedback('');
    setRatingStar(0)
  };

  useEffect(() => {
    switch (ratingStar) {
      case 1:
        setEmoji('😐');
        break;
      case 2:
        setEmoji('☹️');
        break;
      case 3:
        setEmoji('🙂');
        break;
      case 4:
        setEmoji('😊');
        break;
        case 5 : 
        setEmoji('🤩');
        break;
      default:
        setEmoji('')
    }
  }, [ratingStar]);

  return (
    <>
   {formsubmission ? <LottieAnimation gif={formgif} /> : <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg sm: w-100px ">
      <h2 className="text-2xl font-semibold text-center mb-4 bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-amber-600  text-transparent ml-2">Rate Your Experience</h2>
      
        <div className="space-y-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-3 mt-3">Feedback</label>
          <textarea
            id="feedback"
            placeholder="Share your thoughts"
            className="w-full p-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2 mt-3">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              onClick={() => setRatingStar(index + 1)}
              className={`px-4 py-2 rounded-full ${index + 1 <= ratingStar? 'bg-green-400' : 'bg-gray-200'} text-white`}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
          ))}
          <p className='text-2xl ml-3'>{emoji}</p>
        </div>
       
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleClick}>Submit</button>
  
    </div>}
    </>
  );
};
