import React, { useRef,useState,useEffect } from "react";
import { LifeMatrix } from "../service/LiveMatrix";
import { getRandomMatrix } from "../utils/random";
import { Matrix } from "./Matrix";
type Props = {
 dimensions: number;
 ticInterval:number;
}
export const Life: React.FC<Props> = ({dimensions,ticInterval})=>{
    const lifeMatrix = useRef<LifeMatrix>();
    const [numbers, setnumbers] = useState<number[][] >([]);
    function tic(){
        if(lifeMatrix.current == null){
            lifeMatrix.current = new LifeMatrix(getRandomMatrix(dimensions,dimensions,0,1))
        }
       setnumbers(lifeMatrix.current.nextStep());

    }
    useEffect(() =>{
        const inteval = setInterval(tic,ticInterval)
        return ()=>clearInterval(inteval);
    },[ticInterval])
    
    return <div>
        <Matrix numbers={numbers}/>
    </div>
}