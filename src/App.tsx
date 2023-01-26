
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
 

  const [cities, setCities] = React.useState<string[]>([])
  function creatingCities(value: string): string {
    let res:string = '';
    const cities: string[] = value.split("#");// red#green => ['red,'green']
    if(cities.length%2 !=0){
      res =  "Wrong quantity of Cities/Countries must be even";
    }else{
      setCities(cities.slice());
    }
    return res;
  }
  function getCities(cities: string[]): JSX.Element[] {
  
    return  cities.map(city =>
      <div style={properties1}>
        <Timer cityOrCountry={city}></Timer>
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


