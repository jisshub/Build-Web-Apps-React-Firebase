import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState("mario");
  const [country, setCountry] = useState("ukraine");
  const handleClick = () => {
    setState("luigi");
    console.log(state);
  }
  const handleCountry = () => {
    setCountry("russia");
    console.log(country);
  }
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={handleClick}>Click me</button>
      <h2>{country}</h2>
      <button onClick={handleCountry}>Click Me</button>
    </div>
  );
}

export default App;
