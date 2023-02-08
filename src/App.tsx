import React, { useRef,useState,useEffect } from "react";
import './App.css';
import { CounterUpdater } from "./components/CounterUpdater";
import { CounterSqure } from "./components/CounterSquare";
import { CounterMultiply } from "./components/CounterMulti";
import { Login } from "./components/Login";
import { LogOut } from "./components/LogOut";
import { useSelector} from 'react-redux';
import { Input } from "./components/Input";
function App() {
  const auth:string = useSelector<any, string>( state =>  state.auth.authenticated);
  const [operand ,setOperand] = React.useState(1);
  const [factor , setFactor] = React.useState(10);
  
  return <div>
     
    {auth &&  <div>
      <p>Username is {auth}</p>
     {auth.includes("admin") && <Input placeHolder={"Enter Operand"} inputProcess={function (value: string): string {
        setOperand(+value);
        return "";
      } }  ></Input>}
      <Input placeHolder={"Enter factor"} inputProcess={function (value: string): string {
        setFactor(+value);
        return "";
      } } ></Input>
       </div>}
 {auth && <div >
    <CounterUpdater operand={operand}></CounterUpdater>
    <CounterSqure></CounterSqure>
    <CounterMultiply factor={factor}></CounterMultiply>
  </div>}
  {auth && <LogOut></LogOut>}
  {!auth &&   <Login ></Login>
  
   }
  </div>
}

export default App;