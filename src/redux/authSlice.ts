import {createSlice} from "@reduxjs/toolkit";
const initialState ={
    authenticated: false
};
const authSlice = createSlice ({
    initialState,
    name: "auth",
    reducers :{
         login: state => {
            if(!state.authenticated){
                state.authenticated = true;
            }
         },
         logOut: state => {
            if(state.authenticated){
                state.authenticated = false;
            }
         }
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;