import React, { useCallback } from "react";
import { useState } from "react";
import { ChildComponent } from "./ChildComponent";


 const ParentComponent = () => {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount((pre)=>pre+1);
    },[])

    // const handleClick = () => {
    //     setCount(count + 1);
    // }
    console.log("----------> renderizado Padre");
    return (
       <div>
        <h1>{count}</h1>
        <ChildComponent onClick={handleClick}/>
       
       </div>
    );
}

export default ParentComponent;