import React from 'react';
import Boton from './Boton';

export default function ListaDeTareas(props) {
  const [tareas, setTareas] = React.useState(props.arrayTareas);

  const listaDeTareas = tareas.map((tarea, i) =>
    <div key={i} id={i}>
      <li >{tarea}<Boton type='button' texto='Borrar'id={"boton" + i} onClick={() => setTareas(tareas.filter((tarea) => tarea !== tareas[i]))}/></li>
    </div>
  );

  return (
    <ul>{listaDeTareas}</ul>
    );
}