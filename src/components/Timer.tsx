
import React from "react";

import timeZones from "../time-zones";
import { Input } from "./input";
type TimerProps = {
    cityOrCountry: string;
}
export const Timer: React.FC<TimerProps> = (props) => {
    const timeZoneIndex: number =
     timeZones.findIndex(tz => JSON.stringify(tz).includes(props.cityOrCountry));
    const [timeZone, setTimeZone] = React.useState(timeZones[timeZoneIndex]?.name);
    let timeZoneName = React.useRef(timeZone ?  props.cityOrCountry : "Israel");
    const [time, setTime] = React.useState(new Date());
    function tick() {
        console.log("tick");
        setTime(new Date());
    }
    React.useEffect(()=>{
    const interval = setInterval(tick, 1000);
        const timeZoneIndex: number =
     timeZones.findIndex(tz => JSON.stringify(tz).includes(props.cityOrCountry));
     timeZoneName.current = timeZone ? props.cityOrCountry : "Israel";
     setTimeZone(timeZones[timeZoneIndex]?.name)
        return ()=>clearInterval(interval);
    }, [props])
    
    function processCityCountry(value: string): string {
        const index =  timeZones.findIndex(tz => JSON.stringify(tz).includes(value));
        let res = '';
        if (index < 0) {
            res = `${value} is wrong city / country, please type again`;
        } else {
            timeZoneName.current = value;
            setTimeZone(timeZones[index].name);
        }
        return res;
    }
    const properties: React.CSSProperties = {
        display: "block",
        textAlign: "center",
        fontSize: "2em"
        
      }
    return <div >
        <Input placeHolder={"Enter city or country"} inputProcess={processCityCountry}/>
        <h3 className='logo' style={properties}>Time in {timeZoneName.current}</h3>
        <label style={properties}>  {time.toLocaleTimeString(undefined,{timeZone})}</label>
    </div>
}