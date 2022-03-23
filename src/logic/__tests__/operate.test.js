import operate from "../operate";

describe('operate', () => {
  it('expects 10 minus 18 to be -8', () => {
    const firstValue='10';
    const secondValue='18';
    const operator='-';

    const result = operate(
      firstValue,secondValue,operator
    );

    expect(result).toEqual('-8');
  });

  it('expects 10 divided by 0 to return an error msg', () => {
    const firstValue='10';
    const secondValue='0';
    const operator='÷';
    
    const result = operate(
      firstValue,secondValue,operator
    );

    expect(result).toBe("Can't divide by 0.");
  });
  
  it('expects 10 modulo 0 to return error msg', () => {
    const firstValue='10';
    const secondValue='0';
    const operator='%';
    
    const result = operate(
      firstValue,secondValue,operator
    );

    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });


});
