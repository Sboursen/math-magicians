import { render, screen } from '@testing-library/react';
import CalculatorBody from '../calculatorBody';

const mockedHandleClick = jest.fn();

describe('CalculatorBody', () => {
  it('renders Calculator component correctly in the DOM', () => {
    render(
      <CalculatorBody />,
    );
    const element = screen.getByText(/AC/);
    expect(element).toBeInTheDocument();
  });

  it('renders notebook section correctly in the DOM', () => {
    render(
      <CalculatorBody />,
    );
    const element = screen.getByTestId(/note_book/)
    expect(element).toBeInTheDocument();
  });
});
