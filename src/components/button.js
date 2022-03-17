import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.position = props.position;
    this.className = props.className;
    this.onButtonClick = props.onButtonClick;
  }

  render() {
    return (
      <button
        type="button"
        className={`${this.position} ${this.className}`}
        onClick={(e) => this.onButtonClick(e.target.textContent)}
      >
        {this.text}
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  className: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};
