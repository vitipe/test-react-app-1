import React from 'react';
import InputUsuario from './InputUsuario';
import BotonAgregar from './BotonAgregar';

export default function Formulario(props) {
  return(
    <div>
      <InputUsuario type="text" placeholder="Ingrese tarea"/>
      <BotonAgregar texto="Agregar"/>
    </div>
  )
}