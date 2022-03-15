//import hornedbeasts array in data.json
import React from 'react'
const beasts = require('./data.json');

console.log(beasts)

export default class HornedBeast extends React.Component {

    render(){

        return(
            <>
            {beasts.map((el,idx)=>{
               return( <div key = {idx}>
               <h1>
                   {el.title}
               </h1>
               <img src={el.image_url}/>
               <span>{el.description}</span>
               

                </div>)
            })}
            </>
        )
    }
}