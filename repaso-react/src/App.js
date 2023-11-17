import logo from './logo.svg';
import './App.css';
import { Primer_Componente } from './componentes/Primer_Componente';
import { Segundo_Componente } from './componentes/Segundo_Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Esto es un repaso del turorial de Youtube</p>
        <Primer_Componente/>
        <Segundo_Componente/>
      </header>
    </div>
  );
}

export default App;
