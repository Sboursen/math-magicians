/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './calculator';
import './calculatorBody.scss';

export default class CalculatorBody extends React.Component {
  render() {
    return (
      <main className="Calculator-body">
        <section className="notebook">
          <label htmlFor="notebook">
            <textarea
              className="notebook"
              name="notebook"
              id="notebook"
              cols="30"
              rows="10"
              placeholder={"Let's do some math"}
            />
          </label>
        </section>
        <Calculator />
      </main>
    );
  }
}
