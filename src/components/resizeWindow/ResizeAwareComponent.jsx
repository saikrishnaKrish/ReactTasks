import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ResizeAwareComponent = () => {
    const [windowWidth,setWindowWidth]=
    useState(window.innerWidth);

    const handleResize=()=>{
            setWindowWidth(window.innerWidth);
    }

    useEffect(()=>{
        console.log("listener added!");
        window.addEventListener('resize',handleResize);
        return ()=>{
            console.log("cleanup listener added!!!")
            window.removeEventListener('resize',handleResize)
        }

    })


  return (
    <div>
        <h1> Resize Aware Component </h1>
        <p>Window Width {windowWidth}</p>
    </div>
  )
}

export default ResizeAwareComponent