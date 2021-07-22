import React from 'react';

export default function InputUsuario(props) {
  return (
    <input 
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.onChange}
    />
  )
}