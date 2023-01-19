
import { Input } from './components/input';
import React from 'react';

function App() {
  function processInput(value:string):string {
    let res: string = '';
    if(value.toLowerCase().includes("hello")){
      res = "get tired from HELLO. it's forbidden word";
    }
    return res;
  }
  return <Input inputId={'input-1'} inputProcess={ processInput } />
}

export default App;
