import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export const MeasureLayout = () =>{
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1044565681.
const [width, setWidth] = useState(0);
const elementWith = useRef();

useLayoutEffect(()=>{
    if(elementWith.current){
        setWidth(elementWith.current.offsetWidth)
    }
},[])

return(
    <div ref={elementWith} style={{width:"100vw"}}>
        <p>El ancho del elemento es {width}px</p>
    </div>
)
}