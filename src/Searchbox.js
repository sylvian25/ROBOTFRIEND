import React, { StrictMode, useState } from 'react'
// import Robot from './Robot.json'
// import searchbox from './Searchbox'
// import Card from './Card';
import 'tachyons';

const Searchbox = ({Onsearch}) => {
    const [search, setsearch] = useState('')
    return(
        <>
        <div className='pa2'>
     <input 
     className='pa3 ba b--green bg-light-blue'
     type='search'
     value={search}
      placeholder='search robots'   onChange={(e)=>{
          setsearch(e.target.value)
          Onsearch(search)
      }}/>
      
     </div>
     </>
    );
}
export default Searchbox;