import logo from './kurt.png';
import './App.css';
import React, {useEffect, useState} from 'react';
import TestButton from './components/button/TestButton.jsx';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://jairomatheus89.site:3001/api')
    .then((response) => response.json())
    .then((data) => setMessage(data.message))
    .catch((error) => console.error('Erro:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Cacciari me da picanha&#40;BackendAPI&#41;
        </h1>
        <h2
          style={{color:'red'}}
        >
          {message}
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p
          style={{color:'gold'}}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TestButton />
      </header>
    </div>
  );
}

export default App;
