import { useState, useEffect } from 'react';

import axios from 'axios';

const Todays = ()=>{

    const [color,setColor] = useState('blue');

    const update = () =>{

        setColor('yellow')

    }


// useEffect code.......exemple


    const [pieceOfState, setPieceOfState] = useState(10);

    useEffect(() => {
      console.log('I\'m in useEffect!');
      console.log('This will be called whenever an instance of this component mounts');
      console.log('or whenever pieceOfState is updated');


    }, [pieceOfState]);



    axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  

    return(
        <>
        <h1 style={{color:""}} > This color is :  {color} </h1>
        <button onClick={update}> click me</button>


        <div>
      <button onClick={() => setPieceOfState(pieceOfState + 1)}>Click Me to Update pieceOfState!</button> <br/>
      <h1 style={{color:"white"}}>updating the value : {pieceOfState} </h1>
    </div>
        </>
    )
}

export default Todays;

