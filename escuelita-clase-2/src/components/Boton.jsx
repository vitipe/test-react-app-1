import React from 'react';

export default function Boton(props) {
  return (
    <button 
    type={props.type}
    onClick={props.onClick}>
      {props.texto}
    </button>
  )
}