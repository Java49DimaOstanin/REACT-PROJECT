
import React, { useEffect } from "react"
import { Alert } from "./Alert";
type InputProps = {
    inputId:string;
    inputProcess: (value: string) => string;
    placeHolder:string;
}

export const Input: React.FC<InputProps> = (props)=> {
    let inputElement:HTMLInputElement | null ;
    const [message , setMessage] = React.useState('');
    
    function processGo():void{ 
       setMessage('');
     const messageRet: string = props.inputProcess(inputElement!.value);
        if (messageRet == ''){
            inputElement!.value = ' ';
        }else {
            setMessage(messageRet);
        }
    
    }
    useEffect(() => {
        inputElement = document.getElementById(props.inputId) as HTMLInputElement
    })
    return   <div>
        <input  id={props.inputId} placeholder={props.placeHolder} /> 
        <button onClick={processGo}>GO</button>
        {message && <Alert type={"error"} messege={message}/>}
    </div> 
        }

