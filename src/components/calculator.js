/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './button';
import './calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: { total: null, next: null, operation: null },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { obj } = this.state;
    const newObj = {
      ...obj,
      ...calculate(obj, buttonName),
    };
    this.setState({ obj: newObj });
  }

  render() {
    const { obj } = this.state;
    const res = obj.next ? obj.next : obj.total;
    return (
      <div className="calculator-wrap">
        <div id="res">{res}</div>
        <Button
          position="main"
          text="AC"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="+/-"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="%"
          onButtonClick={this.handleClick}
        />
        <Button
          position="aside"
          text="÷"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="7"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="8"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="9"
          onButtonClick={this.handleClick}
        />
        <Button
          position="aside"
          text="x"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="4"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="5"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="6"
          onButtonClick={this.handleClick}
        />
        <Button
          position="aside"
          text="-"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="1"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="2"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="3"
          onButtonClick={this.handleClick}
        />
        <Button
          position="aside"
          text="+"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="0"
          className="wide-button"
          onButtonClick={this.handleClick}
        />
        <Button
          position="main"
          text="."
          onButtonClick={this.handleClick}
        />
        <Button
          position="aside"
          text="="
          onButtonClick={this.handleClick}
        />
      </div>
    );
  }
}
