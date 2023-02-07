import { authActions } from "../redux/authSlice";
import {useDispatch} from 'react-redux';
import React from "react";

type Props = {
    adminName:string
}
export const Login:React.FC<Props> = ({adminName}) => {
   const dispatch = useDispatch();
    return <button onClick={() => dispatch(authActions.login(adminName))}> Login</button>
           
    
}