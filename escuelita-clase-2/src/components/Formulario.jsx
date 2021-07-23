import React from 'react';
import InputUsuario from './InputUsuario';
import Boton from './Boton';
import ListaDeTareas from './ListaDeTareas';

let arrayTareas = [];

export default function Formulario(props) {
  const [value, setValue] = React.useState()
  
  function manejarClick(e) {
    e.preventDefault();
    value === undefined  ?  arrayTareas.push('Ingrese una tarea') : arrayTareas.push(value)
    console.log(arrayTareas)
    setValue('')
    return arrayTareas;
  }

  return(
    <div>
      <form>
        <InputUsuario 
          type="text" 
          placeholder="Ingrese tarea"
          onChange={(event) => setValue(event.target.value)}
        />
        <Boton type='button' texto="Agregar" onClick={manejarClick}/>
        <ListaDeTareas tareas={arrayTareas}/>
      </form>
    </div>
  )
}