
import  Robot  from './Robot.json'
import Card from './Card';
import 'tachyons';
import Searchbox from './Searchbox';
import  './App.css';

import React,{useEffect, useState} from 'react'
import Scroll from './Scroll';


const App = () => {
  const [rob, setrob] = useState(Robot)
  const [search, setsearch] = useState('')
  const Onsearch = ()=>{
   if(search.length >0){
    setrob(Robot.filter((a)=>{
      return a.name.toUpperCase().startsWith(search.toUpperCase())
    }))
   }
  }
  useEffect(()=>{
    if(search === ""){
      setrob(Robot)
    }
  },[search])
  return (
    <div className=' tc'>
    <h1>ROBOTFRIENDS</h1>
    <Searchbox Onsearch={Onsearch} search={search} setsearch={setsearch}></Searchbox>

  <>
  <Scroll>
    <Card rob={rob}></Card>
  </Scroll>
  
  </>
  </div>
  )
}

export default App