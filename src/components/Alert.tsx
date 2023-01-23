import React from "react";
type AlertProps = {
    type: "warning" | "info" | "error";
    messege: string;
}
export const Alert: React.FC<AlertProps> = ({type,messege}) =>{
    let  backGround: "red" | "green" | "yellow";
    switch(type){
        case "error": backGround = "red";break;
        case "info" : backGround = "green";break;
        case "warning" : backGround = "yellow";
    }
  
       return <p style={{backgroundColor: backGround ,color: "white", fontWeight:"bold"}}>{messege}</p>
}