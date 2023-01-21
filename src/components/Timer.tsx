import React from "react";
import timeZones from "../time-zones";
import { Input } from "./input";
type TimerProps = {
    cityOrCountry:string; 
    inputFieldId:string;
}
export const Timer: React.FC<TimerProps> = (props) =>{
    const [timeZoneIndex ,setTimeZoneIndex] = React.useState(getIndexByName(props.cityOrCountry)); 
    let timeZone: string = timeZones[timeZoneIndex]?.name;
    const [timeZoneName,setTimeZoneName]  = React.useState(timeZone ? props.cityOrCountry : "Israel");
    const [time, setTime] = React.useState(new Date());
    const [uniqId,setUniqId] = React.useState(new Date().getTime().toString());
    // console.log(uniqId);



    function tick() {
        console.log("Tick-Tak");
        setTime(new Date());
    }
    React.useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return ()=>clearInterval(interval);
    },[])
    function timeZoneFind(cityOrCountry:string):string{
        let res: string = '';
        const newIndex:number = getIndexByName(cityOrCountry);
        if(newIndex < 0){
            res = `can't find "${cityOrCountry}" try another `;
        }else {
            timeZone = timeZones[newIndex].name;
            setTimeZoneIndex(newIndex);
            setTimeZoneName(cityOrCountry);
            setUniqId(new Date().getTime().toString())
        }
        return res;
    }
    function getIndexByName(cityOrCountry:string): number {
        return timeZones.findIndex(tz => JSON.stringify(tz).includes("\""+cityOrCountry+"\"" ));
    }
    return <div id={uniqId}>
        <Input inputId={props.inputFieldId} inputProcess={timeZoneFind} placeHolder={"Enter City or Country"} />
        <h3 className='logo'>Time in {timeZoneName} </h3>
        <label style={{display:"block", textAlign:"center",fontSize:"2em"}}> {time.toLocaleTimeString(undefined,{timeZone})} </label>
    </div>
}   