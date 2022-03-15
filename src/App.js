import logo from './logo.svg';
import './App.css';

function App() {
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
        <ul className="App-navigation">
          <li>
            <a href="./">Home</a>
          </li>
          <li>|</li>
          <li>
            <a href="./">Calculator</a>
          </li>
          <li>|</li>
          <li>
            <a href="./">Quotes</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
