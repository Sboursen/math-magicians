import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

export default function Home() {
  return (
    <main>
      <h2 className="title">Welcome to our page!</h2>
      <p className="text">
        <Link to="/calculator">
          <strong>- Calculator: </strong>
        </Link>
        Arithmetics made easy. Use the calculator to make
        all the basic arithmetic calculation. A notebook is
        also made at you disposal to save your Math notes.
        <span
          style={{ height: '12px', display: 'block' }}
        />
        <Link to="/quotes">
          <strong>- Quotes: </strong>
        </Link>
        Daily inspirational quotes to get into mood for
        Math.
      </p>
    </main>
  );
}
