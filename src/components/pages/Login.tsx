import { authActions } from "../../redux/authSlice";
import {useDispatch} from 'react-redux'
import { IInput } from "../Input";
import React from "react";
export const Login: React.FC = ()=>{
    const dispatch = useDispatch();
    
    return <div>
        <h3>Login</h3>
        <IInput placeHolder={"type username for login"} inputProcess={function (value: string): string {
            dispatch(authActions.login(value))
            return '';
        } }></IInput>
        
        </div>
}