
import  Robot  from './Robot.json'
import Card from './Card';
import 'tachyons';
import Searchbox from './Searchbox';
import  './App.css';

import React,{useState} from 'react'

const App = () => {
  const [rob, setrob] = useState(Robot)
  const Onsearch = (e)=>{
    console.log(e)
  }
  return (
    <div className=' tc'>
    <h1>ROBOTFRIENDS</h1>
    <Searchbox Onsearch={Onsearch}></Searchbox>

  <>
  <Card rob={rob}></Card>
  </>
  </div>
  )
}

export default App