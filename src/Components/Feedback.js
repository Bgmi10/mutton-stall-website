import React, { useState } from 'react'
import { faCoffee, faHome , faStar } from '@fortawesome/free-solid-svg-icons';
import { db } from '../utils/firebase'
import { collection , addDoc } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Feedback = () => {


    const [name , setname] = useState('')
    const [feedback , setfeedback] = useState('')
    const [rating , setrating] = useState('')
    const [err  ,seterr] = useState('')
    const [ratingstar , setratingstr] = useState('')
    console.log(ratingstar)

    const validatename = /^([a-zA-Z\s'-]{3,30})$/.test(name)

    

   
    const handleclick = async (e) =>{
       

       if(!validatename){
        return seterr('please check the name field it should contain max 3 length')
       }
       else if(validatename) {
        return seterr('')
       }

       



       e.preventDefault()

       

       try{
          await addDoc(collection(db , 'feedback' ), {
            name,
            feedback,
            rating
          })
       }
       catch(error){
            console.log(error)
       }

       setfeedback('')
       setname('')
       setrating('')
    } 

  return (
    <>
    <div className='mb-40'>
        <input type='text' placeholder='name' className='p-2 border rounded-md mb-3 m-3 focus:outline-none focus:border-blue-500' onChange={e => setname(e.target.value)} value={name} />
        <div>
        <input type="text" placeholder="Write your review" className="focus:outline-none focus:border-blue-500 text-lg text-gray-700 bg-white border border-gray-300 rounded-md py-4 px-5 block w-80 mb-6 transition duration-200 ease-in-out h-40 m-3" onChange={(e) => setfeedback(e.target.value)} value={feedback}/>
        
        </div>
        <div className='px-20 justify-evenly  flex'>
             <button onClick={() => setratingstr('1')}><FontAwesomeIcon icon={faStar}  /></button>
             <button onClick={()=> setratingstr('2')}>2</button>
             <button onClick={()=> setratingstr('3')}>3</button>
             <button onClick={()=> setratingstr('4')}>4</button>
             <button onClick={()=> setratingstr('5')}>5</button>
        </div>
           <button onClick={handleclick} className='p-2 rounded-md bg-blue-400 m-3'>Submit</button>
           
           <p className='text-red-500'>{err}</p>

    </div>

    </>
  )
}
