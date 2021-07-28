import React from 'react';
import InputUsuario from './InputUsuario';
import Boton from './Boton';

const Formulario = ({ setInputText, inputText, todos, setTodos }) => {
  
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
    ]);
    setInputText('');
  }

  return(
    <div>
      <form>
        <InputUsuario 
          value={inputText}
          type="text" 
          placeholder="Ingrese producto"
          onChange={inputTextHandler}
        />
        <Boton type='submit' className="todo-button" texto="Agregar" onClick={submitTodoHandler}/>
        {/* <ListaDeTareas arrayTareas={arrayTareas}/> */}
      </form>
    </div>
  )
}

export default Formulario;