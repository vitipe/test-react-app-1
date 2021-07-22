import './App.css';
import Titulo from './components/Title.jsx';
import InputUsuario from './components/InputUsuario';
import BotonAgregar from './components/BotonAgregar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo name="Victor" />
        <InputUsuario placeholder="Ingrese tarea" type="text" />
        <BotonAgregar texto="Agregar"/>
      </header>
    </div>
  );
}

export default App;
