
import { Input } from './components/input';
import React from 'react';
import { Timer } from './components/Timer';


function App() {
  const flexColumn: React.CSSProperties = { display: "flex", flexDirection: "column" }
  const flexRow: React.CSSProperties = { display: "flex", flexDirection: "row" , 
  justifyContent: "space-around", width: "50vw", marginTop: "4vh" ,marginLeft:"20vw"}
  
  return <div style={flexColumn}>
    <div style={flexRow}>
      <Timer cityOrCountry={"London"} inputFieldId={'1'}></Timer>  
      <Timer cityOrCountry={"Paris"} inputFieldId={'2'}></Timer>
    </div>

    <div style={flexRow}>
      <Timer cityOrCountry={"India "} inputFieldId={'1'}></Timer>
      <Timer cityOrCountry={"Cuba"} inputFieldId={'3'}></Timer>
      </div>

    </div>
    
}
export default App;


// import React from 'react';
// import { Input } from './components/Input';



// function App() {
//   function processInput(value: string): string {
//     let res: string = '';
//     if(value.toLowerCase().includes("hello")) {
//         res = "get tired from HELLO. It's forbidden word";
//     }
//     return res;
    
//   }
//   return <Input inputId={'input-1'} inputProcess={processInput} />

// }

// export default App;