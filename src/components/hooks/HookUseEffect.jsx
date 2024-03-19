
import { useState } from 'react'
import { useEffect } from 'react'

const HookUseEffect = () => {
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
      const id = setInterval(()=>{
                setTime(new Date())
        },1000)
       return ()=>clearInterval(id)
        
    },[])

    
  return (
    <div>
        HookUseEffect
            Time:{time.toLocaleTimeString()}

    </div>
  )
}

export default HookUseEffect


