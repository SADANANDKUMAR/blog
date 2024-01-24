import React from 'react'
import Childtwo from './Childtwo'
const Childone = (props) =>{

    console.log(props,'props')

    return(
        <>
        <h1>Child 1</h1>
        <p>Today topic : {props.name}</p>


<Childtwo  nametwo={props.name}/>
        
        </>
    )
}


export default Childone;