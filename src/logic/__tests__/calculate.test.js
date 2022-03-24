import calculate from '../calculate';

describe('calculate', () => {
  it('cleans reinitialize the calculator object when AC button is clicked', () => {
    const calculatorObj = {
      total: '12',
      next: '2',
      operation: null,
    };
    const buttonName = 'AC';

    const newCalculatorObj = calculate(
      calculatorObj,
      buttonName,
    );

    expect(newCalculatorObj).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('correctly adds up two 12 and 3 and gives 15', () => {
    const calculatorObj = {
      total: '12',
      next: '3',
      operation: '+',
    };
    const buttonName = '=';

    const newCalculatorObj = calculate(
      calculatorObj,
      buttonName,
    );

    expect(newCalculatorObj.total).toEqual('15');
  });

  it('correctly calculates 13 multiplied by 15', () => {
    const calculatorObj = {
      total: '13',
      next: '15',
      operation: 'x',
    };
    const buttonName = '=';

    const newCalculatorObj = calculate(
      calculatorObj,
      buttonName,
    );

    expect(newCalculatorObj.total).toEqual('195');
  });

  it('returns the correct error message when dividing by zero', () => {
    const calculatorObj = {
      total: '13',
      next: '0',
      operation: '÷',
    };
    const buttonName = '=';

    const newCalculatorObj = calculate(
      calculatorObj,
      buttonName,
    );

    expect(newCalculatorObj.total).toEqual(
      "Can't divide by 0.",
    );
  });

  it('returns the correct error message when using modulo with zero', () => {
    const calculatorObj = {
      total: '110',
      next: '0',
      operation: '%',
    };
    const buttonName = '=';

    const newCalculatorObj = calculate(
      calculatorObj,
      buttonName,
    );

    expect(newCalculatorObj.total).toEqual(
      "Can't find modulo as can't divide by 0.",
    );
  });
});
