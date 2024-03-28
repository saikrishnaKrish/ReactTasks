import React, { useState } from "react";
import InputComponent from "./InputComponent";

const FormhandlingExample1 = () => {
  const [username, setUserName] = useState("");
  const [location, setLocation] = useState("");

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };


  const handleSubmit=(e)=>{
      e.preventDefault();
    console.log("form  sumitted",username,location);

  }

  return (
    <div>
      <h1>Passprort Application Form</h1>

      <form>
        <h5>Enter user name</h5>
        {/* <input type='text' value={username} onChange={setUserName}/> */}
        {/* <input type='text' value={username} onChange={(e)=>setUserName(e.target.value)}/> */}
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          id="username"
          name="firstname"
        />

      <h5>Enter Passport location</h5>
        {/* <input type='text' value={username} onChange={setUserName}/> */}
        {/* <input type='text' value={username} onChange={(e)=>setUserName(e.target.value)}/> */}
        <input
          type="text"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
          name="location"
        />    


        <button onClick={handleSubmit}>Submit </button>
      </form>
    </div>
  );
};

export default FormhandlingExample1;
