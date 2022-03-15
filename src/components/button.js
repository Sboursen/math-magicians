import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.type = props.type;
  }

  render() {
    return (
      <button type="button" className={`${this.type}`}>
        {this.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
