import React, {useState} from "react"; 

export const InputForm = ({type, placeholder, name, className, value, onChange}) => {


  return(<>
    <input type={type} placeholder={placeholder} name={name} className={className} onChange={onChange} value={value} />
  </>)
}