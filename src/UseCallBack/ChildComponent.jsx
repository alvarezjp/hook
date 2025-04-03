import React, { memo } from "react";

export const ChildComponent = React.memo(({onClick}) => {
    console.log("renderizado hijo");
    return (


        <button onClick={onClick} >Increment</button>

    );
})