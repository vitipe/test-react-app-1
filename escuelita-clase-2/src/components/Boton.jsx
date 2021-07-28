import React from 'react';

export default function Boton(props) {
  return (
    <button 
    className={props.className}
    type={props.type}
    onClick={props.onClick}>
      {props.texto}
    </button>
  )
}