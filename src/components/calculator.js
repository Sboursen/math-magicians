/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './button';
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
        <Button position="main" text="AC" />
        <Button position="main" text="+/-" />
        <Button position="main" text="%" />
        <Button position="aside" text="+" />
        <Button position="main" text="7" />
        <Button position="main" text="8" />
        <Button position="main" text="9" />
        <Button position="aside" text="&times;" />
        <Button position="main" text="4" />
        <Button position="main" text="5" />
        <Button position="main" text="6" />
        <Button position="aside" text="-" />
        <Button position="main" text="1" />
        <Button position="main" text="2" />
        <Button position="main" text="3" />
        <Button position="aside" text="+" />
        <Button
          position="main"
          text="0"
          className="wide-button"
        />
        <Button position="main" text="." />
        <Button position="aside" text="=" />
      </div>
    );
  }
}
