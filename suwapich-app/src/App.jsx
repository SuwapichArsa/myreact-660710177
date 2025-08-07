import logo from './logo.svg';
import './App.css';
import Hello from './Hello';  // import Hello component
import JSXExamples from './components/JSXExample';

function App() {
  return (
    <div className="App">
      <Hello />  {/* ใช้ Hello component */}
      <JSXExamples/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;