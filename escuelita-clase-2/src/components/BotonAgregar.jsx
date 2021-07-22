import React from 'react';

export default function BotonAgregar(props) {
  return (
    <button 
    type={props.type}>
      {props.texto}
    </button>
  )
}