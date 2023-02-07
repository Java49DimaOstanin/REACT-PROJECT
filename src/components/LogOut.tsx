import { authActions } from "../redux/authSlice";
import {useDispatch} from 'react-redux';
import React from "react";

export const LogOut:React.FC = () => {
   const dispatch = useDispatch();
    return <button onClick={() =>dispatch(authActions.logOut())}> LogOut</button>
}