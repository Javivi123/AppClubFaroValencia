import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hola isaac esto es <code>src/App.js</code> a que no lo sabías?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          pulsa aquí si eres tu
        </a>
      </header>
    </div>
  );
}

export default App;
