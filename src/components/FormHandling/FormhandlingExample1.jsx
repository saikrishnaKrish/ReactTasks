import React, { useState } from "react";
import InputComponent from "./InputComponent";

const FormhandlingExample1 = () => {
  const passportDataObj={
    userName:"",
    location:"",
    pinCode:"",
    nationality:""  
  }

  const [passportData, setPassportData] = useState(passportDataObj);


  const handleInputChange = (e) => {
    // setUserName(e.target.value);
      const {name,value} =e.target;
      console.log(name,value)
      setPassportData((prevData)=>({...prevData,[name]:value}))
  };


  const handleSubmit=(e)=>{
      e.preventDefault();
      alert("form submitted");
    console.log("form  sumitted",passportData);
    setPassportData(passportDataObj)
  }

  return (
    <div>
      <h1>Passprort Application Form</h1>

      <form style={{display:"flex"}} onSubmit={handleSubmit}>
          <label>
            User name
          </label>
            <input type="text" value={passportData.userName} onChange={handleInputChange} name="userName"/>

            <label>
              PinCode
            </label>
              <input type="text" value={passportData.pinCode} onChange={handleInputChange} name="pinCode"/>
              <label>
              Location
            </label>
              <input type="text" value={passportData.location} onChange={handleInputChange} name="location"/>
              <label>
                Nationality
            </label>
              <input type="text" value={passportData.nationality} onChange={handleInputChange} name="nationality"/> 
        <button >Submit </button>
      </form>
    </div>
  );
};

export default FormhandlingExample1;
