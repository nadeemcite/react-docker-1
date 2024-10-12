import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const buttonIncrementHandler = ()=>{
    setCount(val => val + 1)
  }

  const buttonDecrementHandler = ()=>{
    setCount(val => val > 0 ? val - 1: 0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{count}</h1>
        <button onClick={buttonIncrementHandler}>Add (+)</button>
        <button onClick={buttonDecrementHandler}>Sub (-)</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
