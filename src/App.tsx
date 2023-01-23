
import { Input } from './components/input';
import React from 'react';
import { Timer } from './components/Timer';




function App() {
  const properties: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap"
  }
  const properties1: React.CSSProperties = {
   backgroundColor: "azure" ,marginLeft:"2vw" ,width: "45%" , marginBottom:"2vh",
  marginTop:"2vh", border:'2px solid black',borderRadius:  25
  }
  const properties2: React.CSSProperties = {
    display: "block",
    textAlign: "center",
    backgroundColor: "red" ,marginLeft:"2vw" ,width: "90%" ,height:"6vw", marginBottom:"2vh",
   marginTop:"2vh", border:'2px solid black',borderRadius: 25,fontSize:"3em"
   }


  const [cities, setCities] = React.useState<string[]>([])
  function creatingCities(value: string): string {
    const cities: string[] = value.split("#");// red#green => ['red,'green']
    setCities(cities.slice());
    return '';
  }
  function getCities(cities: string[]): JSX.Element[] {
  
    return cities.length%2 == 0? 
       cities.map(city =>
      <div style={properties1}>
        <Timer cityOrCountry={city}></Timer>
      </div>) :
      cities.splice(0,cities.length, "Wrong quantity of Cities/Countries must be even").map(e =>
        <div style={properties2}>
          {e}
        </div>)

  }

  return <section style={{ display: "flex", flexDirection: "column", }}>
    <Input placeHolder={'enter city or country separated by #'} inputProcess={creatingCities} />
    <section style={properties}>
      {getCities(cities)}
    </section>

  </section>

}
export default App;


