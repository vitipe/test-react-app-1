import React from "react";
import Boton from "./Boton";

const Todo = ({text, setTodos, todo, todos}) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  return (
    <div className="todo">
      <li className="todo-item">
        {text}
        <Boton className="complete-btn" texto="Completado"></Boton>
        <Boton onClick={deleteHandler} className="trash-btn" texto="Borrar"></Boton>
      </li>
    </div>
  );
};

export default Todo;