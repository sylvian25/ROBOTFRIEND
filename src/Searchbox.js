import React, { StrictMode, useState } from 'react'
// import Robot from './Robot.json'
// import searchbox from './Searchbox'
// import Card from './Card';
import 'tachyons';

const Searchbox = ({Onsearch,search,setsearch}) => {
    return(
        <>
        <div className='pa2'>
            <form>
     <input 
     className='pa3 ba b--green bg-light-blue'
     type='search'
     value={search}
      placeholder='search robots'   onChange={(e)=>{
          setsearch(e.target.value)
            Onsearch()
      }}/>
      
      </form>
     </div>
     </>
    );
}
export default Searchbox;