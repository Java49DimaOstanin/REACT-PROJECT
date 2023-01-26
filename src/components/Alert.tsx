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
    const properties2: React.CSSProperties = {
        backgroundColor: backGround,
        display: "block",
        textAlign: "center",
        marginLeft:"2vw" ,width: "90%" ,height:"6vw", marginBottom:"2vh",
       marginTop:"2vh", border:'2px solid black',borderRadius: 25,fontSize:"3em",
       color: "white", fontWeight:"bold"
       }
  
       return <p style={properties2}>{messege}</p>
}