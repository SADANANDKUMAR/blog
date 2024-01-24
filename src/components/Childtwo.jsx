import React from 'react'
import Childthree from './Childthree';

const Childtwo = (props) =>{

    return(
        <>
        <h2> Child 2 </h2>
        <p>today topic : {props.nametwo} </p>

        <Childthree childthrees={props.nametwo}/>
        </>
    )
}


export default Childtwo;