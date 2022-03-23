import { render, screen } from '@testing-library/react';
import Button from '../button';

const mockedHandleClick = jest.fn();

describe('Button', () => {
  it('renders correctly in the DOM', () => {
    render(
      <Button
        position="aside"
        text="="
        onButtonClick={mockedHandleClick}
      />,
    );

    const button = screen.getByText(/=/);

    expect(button).toBeInTheDocument();
  });

  it('contains a button with the class aside', () => {
    render(
      <Button
        position="aside"
        text="="
        onButtonClick={mockedHandleClick}
      />,
    );

    const button = screen.getByText(/=/);
    const { classList } = button;

    expect(classList).toContain('aside');
  });

  it('contains a button with the class main', () => {
    render(
      <Button
        position="main"
        text="0"
        onButtonClick={mockedHandleClick}
      />,
    );

    const button = screen.getByText(/0/);
    const { classList } = button;

    expect(classList).toContain('main');
  });
});
