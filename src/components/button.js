import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.position = props.position;
    this.className = props.className;
  }

  render() {
    return (
      <button
        type="button"
        className={`${this.type} ${this.className}`}
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
};
