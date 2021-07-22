import React from 'react';

export default function ListaDeTareas(props) {
  const tareas = props.tareas;
  const listaDeTareas = tareas.map((tarea, i) =>
    <li key={i}>{tarea}</li>
  );

  return (
    <ul>{listaDeTareas}</ul>
    );
}