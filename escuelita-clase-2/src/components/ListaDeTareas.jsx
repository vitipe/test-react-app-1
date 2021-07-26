import React from 'react';
import Boton from './Boton';



export default function ListaDeTareas(props) {
  let borrarElemento = (e) => {
    e.target.parentNode.remove()
  }

  const myDiv = React.createRef();

  const tareas = props.tareas;
  const listaDeTareas = tareas.map((tarea, i) =>
    <div key={i} id={i} ref={myDiv} >
      <li >{tarea}<Boton type='button' texto='Borrar'id={"boton" + i} onClick={borrarElemento}/></li>
    </div>
  );

  return (
    <ul>{listaDeTareas}</ul>
    );
}