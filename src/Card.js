import React from "react";
import  "./Card.css";

// import Searchbox from "./Searchbox";




 const Card = ({rob}) =>  { 
    
    return      (
<>
<div className="container"> 
{
   rob.map((a)=>{
      return(
         
         <div className="card">
         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5">
             <img alt='' src={a.img}/>
             <h2>{a.name}</h2>
             <p>{a.email}</p>
         </div>
        </div>
        
      )
   })
}
</div>
        </>
    )
 }
export default Card;    