import React, { useState } from 'react'
import InputComponent from './InputComponent'

const FormhandlingExample1 = () => {

    const [username,setUserName] =useState("");
    const handleInputChange=(e)=>{
 
        setUserName(e.target.value)
    }

  return (
    <div>
            <h1>Passprort Application Form</h1>
              {JSON.stringify(username)}
            <form>
                      <h5>Enter user name</h5>
                      {/* <input type='text' value={username} onChange={setUserName}/> */}
                      {/* <input type='text' value={username} onChange={(e)=>setUserName(e.target.value)}/> */}
                      <input type='text' value={username} onChange={handleInputChange} id="username" name="firstname"/>
             </form>

    </div>
  )
}

export default FormhandlingExample1