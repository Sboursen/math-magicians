/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calculator.css';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-wrap">
        <input
          type="text"
          name="result"
          id="res"
          value={0}
          readOnly
        />
      </div>
    );
  }
}
