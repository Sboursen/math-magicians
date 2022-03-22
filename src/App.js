import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import CalculatorBody from './components/calculatorBody';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">
          <img
            className="App-logo-img"
            src={logo}
            alt="logo"
          />
          <span>Math Magicians</span>
        </h1>
        <nav className="App-navigation">
          <Link to="./">Home</Link>
          |
          <Link to="./calculator">Calculator</Link>
          |
          <Link to="./quotes">Quotes</Link>
        </nav>
      </header>
      <CalculatorBody />
    </div>
  );
}
