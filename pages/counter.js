"use client";

import { useState } from "react";


function Counter() {
    const[count,setCount]=useState(0)
    const handleIncrease=()=>{
        setCount((prevCount)=>prevCount+1)
    }
     const handleDecrease=()=>{
        setCount((prevCount)=>prevCount-1)
    }
return(<>
<div className="for-count">
<div>Count:{count} {count}</div>
<button className="general-btn" onClick={handleIncrease} >Increase</button>
<button className="general-btn" onClick={handleDecrease} >Decrease</button>
</div>
</>)

}

export default Counter;
