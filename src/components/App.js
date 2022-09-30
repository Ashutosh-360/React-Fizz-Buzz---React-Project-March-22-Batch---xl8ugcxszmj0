import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
const [count,setCount]=useState(1);


const incrementHandler=()=>
{
setCount(count+1);
}

const decrementHandler=()=>{
  setCount(count-1);
}

  return (
    <div id="main">
        <div className={(count%5==0 && count%3==0)?"fizzbuzz":(count%5==0)?"buzz":(count%3==0)?"fizz":"normal"} id="counter">{count}</div>
        <button id="increment" onClick={incrementHandler}>increment</button>
        <button id="decrement" onClick={decrementHandler}>decrement</button>
    </div>
  )
}
export default App;
