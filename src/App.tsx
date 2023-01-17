// import React from 'react';
import { Timer } from './components/Timer';


function App() {
  return (
    <div className="App">
      <Timer timeZoneIndex={15}></Timer>
      <Timer timeZoneIndex={25}></Timer>
      <Timer timeZoneIndex={155}></Timer>
    </div>
  );
}

export default App;
