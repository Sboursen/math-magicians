import React, { useEffect, useState } from 'react';
import Button from '../button/button';
import './calculator.scss';
import calculate from '../../logic/calculate';

export default function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  useEffect(() => {
    const resElement = document.getElementById('res');
    const { total, next } = calculatorData;
    const res = next || total;

    resElement.textContent = Number.isNaN(Number(res)) || !res
      ? res
      : res.slice(0, 15);
  });

  const handleClick = (buttonName) => {
    setCalculatorData((prevState) => {
      const newCalculatorData = {
        ...prevState,
        ...calculate(prevState, buttonName),
      };
      return newCalculatorData;
    });
  };

  return (
    <div className="calculator-wrap">
      <div id="res" data-testid="result element" />
      <Button
        position="main"
        text="AC"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="+/-"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="%"
        onButtonClick={handleClick}
      />
      <Button
        position="aside"
        text="÷"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="7"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="8"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="9"
        onButtonClick={handleClick}
      />
      <Button
        position="aside"
        text="x"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="4"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="5"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="6"
        onButtonClick={handleClick}
      />
      <Button
        position="aside"
        text="-"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="1"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="2"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="3"
        onButtonClick={handleClick}
      />
      <Button
        position="aside"
        text="+"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="0"
        className="wide-button"
        onButtonClick={handleClick}
      />
      <Button
        position="main"
        text="."
        onButtonClick={handleClick}
      />
      <Button
        position="aside"
        text="="
        onButtonClick={handleClick}
      />
    </div>
  );
}
