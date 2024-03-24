// import React from 'react'
import {lazy,Suspense,useState} from "react"
import Home from '../Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'


const AboutPage = lazy(()=>{return import("./pages/About")})
const HomePage =lazy(()=>{return import("./pages/Home")})

const LazyLoading = () => {


    const throttle = (func, delay) => {
        let lastCallTime = 0;
      
        return function(...args) {
          const context = this;
          const now = new Date().getTime();
      
          if (now - lastCallTime >= delay) {
            func.apply(context, args);
            lastCallTime = now;
          }
        };
      };
      function scrollFunction(){
        console.log("hi dude!")
      }
      // Example usage:
      const throttleScroll = throttle(scrollFunction, 300);
      
      // Attach throttleScroll to window's scroll event
      window.addEventListener('scroll', throttleScroll);
      
    const [visibility,setVisibility]=useState("none");
    const [posts,setPosts] = useState([]);
    const handleClick=()=>{
            import('./posts.jsx').then((module)=>{
                setPosts(module.default);
            })
                if(visibility=="none"){
                    setVisibility("block")
                }
                else{
                    setVisibility("none");
                }
    }

  return (
    <div>
        LazyLoading Example
            <button onClick={handleClick}>
                Add Image
            </button>
<ul>
{  posts.length &&  posts?.map((post,idx)=>{
         return <p key={idx}>{JSON.stringify(post)} </p>
})
}
</ul>
    <Suspense fallback={<div>Loading....</div>}>
    
    </Suspense>

    </div>
  )
}

export default LazyLoading