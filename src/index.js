import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import App from './App';
import CalculatorBody from './components/calculatorBody';
import Home from './routes/home';
import Quotes from './routes/quotes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="calculator"
            element={<CalculatorBody />}
          />
          <Route path="quotes" element={<Quotes />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route
          path="*"
          element={
            (
              <main style={{ padding: '1rem' }}>
                <p>Not found</p>
              </main>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
