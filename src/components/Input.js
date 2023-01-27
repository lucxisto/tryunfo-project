import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { inputName, inputType, labelName, inputValue, inputchange } = this.props;
    return (
      <label htmlFor={ inputName }>
        { labelName }
        <input
          id={ inputName }
          data-testid={ inputName }
          type={ inputType }
          value={ inputValue }
          onChange={ inputchange }
          checked={ inputValue }
        />
      </label>
    );
  }
}

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  inputchange: PropTypes.func.isRequired,
};

export default Input;
