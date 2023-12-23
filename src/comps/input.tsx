
import React, { InputHTMLAttributes } from 'react';
import Icon from "./icon";
import "../styles/input.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
 id: string,
 name: string,
 label: string,
 required_text: string,
 icon?: string,
 className?: string,
}

export default function Input(props: IInputProps) {
 
 const { className, id, label, icon, name, required_text, ...inputProps } = props;
 
 return (
  <fieldset className={`form-group ${className ?? ""}`} >
   <div>
    {icon && <Icon>{icon}</Icon>}
    <label htmlFor={id} className={icon?"":"input-label"}>
     <input {...inputProps} name={name} id={id} />
     {label}
    </label>
   </div>
   <span required htmlFor={id}>{required_text}</span>
  </fieldset>
 )
}