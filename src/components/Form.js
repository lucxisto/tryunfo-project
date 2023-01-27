import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import './Form.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <Input
          id="name-input"
          inputName="name-input"
          inputType="text"
          labelName="Nome: "
          inputValue={ cardName }
          inputchange={ onInputChange }
        />
        <Input
          id="description-input"
          inputName="description-input"
          inputType="textarea"
          labelName="Descrição: "
          inputValue={ cardDescription }
          inputchange={ onInputChange }
        />
        <Input
          id="attr1-input"
          inputName="attr1-input"
          inputType="number"
          labelName="Atributo 1: "
          inputValue={ cardAttr1 }
          inputchange={ onInputChange }
        />
        <Input
          id="attr2-input"
          inputName="attr2-input"
          inputType="number"
          labelName="Atributo 2: "
          inputValue={ cardAttr2 }
          inputchange={ onInputChange }
        />
        <Input
          id="attr3-input"
          inputName="attr3-input"
          inputType="number"
          labelName="Atributo 3: "
          inputValue={ cardAttr3 }
          inputchange={ onInputChange }
        />
        <Input
          id="image-input"
          inputName="image-input"
          inputType="text"
          labelName="Imagem da Carta: "
          inputValue={ cardImage }
          inputchange={ onInputChange }
        />
        <label htmlFor="rare-input">
          Raridade:
          <select
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <Input
          id="trunfo-input"
          inputName="trunfo-input"
          inputType="checkbox"
          labelName="Super Trunfo: "
          inputValue={ cardTrunfo }
          inputchange={ onInputChange }
        />
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
