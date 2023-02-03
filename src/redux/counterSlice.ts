import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    count :0
}
const counterSlice = createSlice({
    initialState,
    name:'counter',
    reducers: {
        increment :(state)=>{
            state.count++
        },
        decriment :(state) =>{
            state.count--;
        },
        reset:state => {
            state.count = initialState.count
        }
        
    }
})