import React from 'react'
import './App.css';
import HeaderChlid from './HeaderChild'
const Header = (props) => {

    
    const headerStyle ={

       backgroundColor :"#94bbe9",
       width:"auto",
       height:"80px"
    }
  
    return(
        <>
        <div style={headerStyle}> 
        <h1 className='headertitle'>Header </h1>
<p>{props.name.name} </p>
        </div>

        <HeaderChlid address='Delhi'/>
        </>
    )
}

export default Header