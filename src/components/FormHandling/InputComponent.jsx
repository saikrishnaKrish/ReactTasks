import React from 'react'

const InputComponent = ({labelName,type,value}) => {
  return (
      <fieldset>
            <label>{labelName}</label>
            <input type={type} value={value} />
      </fieldset>
  )
}

export default InputComponent