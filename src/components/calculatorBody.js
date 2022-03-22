/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './calculator';
import './calculatorBody.scss';

export default class CalculatorBody extends React.Component {
  render() {
    return (
      <main className="Calculator-body">
        <h2 className="Calculator-body-left">
          Let&rsquo;s do some math
        </h2>
        <Calculator />
      </main>
    );
  }
}
