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
  const [adminName ,setAdminName] = React.useState("");
  const [operand ,setOperand] = React.useState(1);
  const [factor , setFactor] = React.useState(10);
  const [adminCheck,setAdminCheck] = React.useState(false);
  const [alert,setAlert] = React.useState("warn")
  return <div>
     <Input placeHolder={"Enter admin name"} inputProcess={function (value: string): string {
      setAdminCheck(false);
      setAlert("warn");
      setAdminName(value);
      if (value.includes("admin")) {
        setAlert("info");
        setAdminCheck(true);
      }
      return "Welcome admin: " + adminName;
    } } inputWarning={alert}></Input>
    {auth && adminCheck && <div>
      <Input placeHolder={"Enter Operand"} inputProcess={function (value: string): string {
        setOperand(+value);
        return "";
      } } inputWarning={undefined} ></Input>
      <Input placeHolder={"Enter factor"} inputProcess={function (value: string): string {
        setFactor(+value);
        return "";
      } } inputWarning={undefined}></Input>
       </div>}
 {auth && <div >
    <CounterUpdater operand={operand}></CounterUpdater>
    <CounterSqure></CounterSqure>
    <CounterMultiply factor={factor}></CounterMultiply>
  </div>}
  {auth && <LogOut></LogOut>}
  {!auth &&   <Login adminName={adminName} ></Login>
  
   }
  </div>
}

export default App;