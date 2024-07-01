import {createSlice} from '@reduxjs/toolkit'

const langslice  = createSlice({
    name : 'lang',
    initialState: {
        togglelang1 : false
    },
    reducers :{
        togglelang : (state) =>{
           state.togglelang1 = !state.togglelang1
        }
    } 

})

export const {togglelang} =  langslice.actions

export default langslice.reducer