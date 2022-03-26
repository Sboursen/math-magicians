/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from '../calculator/calculator';
import Notebook from '../notebook/notebook';
import './calculatorBody.scss';

export default class CalculatorBody extends React.Component {
  render() {
    return (
      <main className="Calculator-body">
        <Notebook />
        <Calculator />
      </main>
    );
  }
}
