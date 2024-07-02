import React, { useEffect, useState } from 'react'
import { collection , getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'

export const Feedbackslider = () => {

const [data , setdata] = useState(null)

    useEffect(() =>{
         const fetch_feedback_data_from_firebase = async () =>{
            const res = await getDocs(collection(db,'feedback'))
            const data  = res.docs.map((doc) => doc.data())
            console.log(data)
         }

         fetch_feedback_data_from_firebase()
    } ,[])
  return (
    <div>

    </div>
  )
}
