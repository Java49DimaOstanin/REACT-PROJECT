import { createSlice } from "@reduxjs/toolkit";
import { LoginData } from "../model/LoginData";
import { AuthServiceFirebase } from "../service/AuthServiceFireBase";
import { codeActions } from "./codeSlice";
const authService = new AuthServiceFirebase();
const initialState :{authenticated:string} = {
    authenticated: localStorage.getItem('authUser') || ''
};
const authSlice = createSlice({
    initialState: initialState,
    name: "auth",
    reducers: {
        setAuthenticated(state, data){
            state.authenticated = data.payload;
        }

    }

})
const actions = authSlice.actions;
export const authActions = {
    login:(loginData:LoginData)=>{
        return async(dispatch:any) =>{
            try{
            await authService.login(loginData);
            localStorage.setItem('authUser',loginData.username);
            dispatch(codeActions.setCode("OK"));
           dispatch( actions.setAuthenticated(loginData.username));
            }catch(e) {
                dispatch(codeActions.setCode("Credentials Error"))
            }
        }
    },
    logout:() => {
        return async (dispatch:any) => {
            await authService.logout();
            localStorage.setItem('authUser','')
            dispatch(actions.setAuthenticated(""))
        }
    }
}
export const authReducer = authSlice.reducer;