import {  configureStore } from '@reduxjs/toolkit'
import langslice from './lanslice'


const store = configureStore({
  reducer :{
    lang : langslice
  }
})

export default store