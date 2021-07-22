import './App.css';
import Titulo from './components/Title.jsx';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo name="Victor" />
        <Formulario/>
      </header>
    </div>
  );
}

export default App;

/*
Al clickear en "Agregar" tendría que pushear el texto a un array o un objeto.
Luego, hacemos que por cada elemento de ese array que cree un componente con ese elemento.
Al apretar "Realizado" o "Hecho" borrar ese elemento (capaz con un ID?) y volver a representar los elementos.


*/