import React from "react";
import { useState } from "react";


const Counter=()=>{

let [count,setCount]=useState(0);




    return(
        <div>
            <p>Button clicked {count}</p>
            <button onClick={()=>{
                setCount(count=count+1)
            }}>Click Me</button>
        </div>
    )
}

export default Counter;