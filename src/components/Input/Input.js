import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { inputName, inputType, labelName } = this.props;
    return (
      <label htmlFor={ inputName }>
        { labelName }
        <input
          id={ inputName }
          data-testid={ inputName }
          type={ inputType }
        />
      </label>
    );
  }
}

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default Input;
