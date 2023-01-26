import React, { useEffect ,useState , useRef } from "react"
import { Alert } from "./Alert"
type InputProps = {
    placeHolder: string;
    inputProcess: (value: string)=>string;
}
export const Input: React.FC<InputProps> = ({placeHolder, inputProcess}) => {
    let inputElement: HTMLInputElement | null
   const [inputId] = useState(Math.round(Math.random() * 100000000) + '');
    const [message, setMessage] = useState('')
    function processGo(): void {
       setMessage('')
        const messageRet: string = inputProcess(inputElement!.value);
        
        if (messageRet == '') {
            inputElement!.value = '';
        } else {
            
            setMessage(messageRet);

        }
        
    }
    useEffect(() => {
       inputElement = document.getElementById(inputId) as HTMLInputElement;
    })
    const properties1: React.CSSProperties = { display: "block",
    textAlign: "center",
    fontSize: "1.5em",
        backgroundColor: "bisque" ,marginLeft:"2vw" ,width: "45%" , marginBottom:"2vh",
       marginTop:"2vh",marginRight:"2vh" ,border:'2px solid black',borderRadius:  25
       }
    return <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
        <input id={inputId} placeholder={placeHolder} style={properties1}/>
        <button onClick={processGo} style={properties1}>GO</button>
        {message && <Alert type={"error"} messege={message}/>}
    </div>
}