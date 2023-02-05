import React, { useRef,useState,useEffect } from "react";
import { Life } from "./components/Life";
import lifeConfig from './config/live-game.json'
// import '.'
function App() {
  
  return <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
   <Life dimensions={lifeConfig.dimension} ticInterval={lifeConfig.ticInterval}></Life>
    

  </div>

}

export default App;
