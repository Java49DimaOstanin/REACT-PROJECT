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
    //    if(type == "error") {
    //     backGround = "red"

    //    }else if(type == "info"){
    //     backGround = "green";
    //    }else {
    //     backGround = "yellow";
    //    }
       return <p style={{backgroundColor: backGround}}>{messege}</p>
}