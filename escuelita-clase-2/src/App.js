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
