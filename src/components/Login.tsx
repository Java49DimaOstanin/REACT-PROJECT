import { authActions } from "../redux/authSlice";
import {useDispatch} from 'react-redux';
import React from "react";
import { Input } from "./Input";


export const Login:React.FC = () => {
   const dispatch = useDispatch();
  
    return <div>
        <p>Login</p>
        <Input placeHolder={"Type user name for login"} inputProcess={function (value: string): string {
        dispatch(authActions.login(value))
          return '';
        } } ></Input>
       {/* <button onClick={() => dispatch(authActions.login(userName))}> Login</button> */}

    </div> 
           
    
}