import React from 'react';
import Input from '../Input/Input';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Input
          id="name-input"
          inputName="name-input"
          inputType="text"
          labelName="Nome: "
        />
        <Input
          id="description-input"
          inputName="description-input"
          inputType="textarea"
          labelName="Descrição: "
        />
        <Input
          id="attr1-input"
          inputName="attr1-input"
          inputType="number"
          labelName="Atributo 1: "
        />
        <Input
          id="attr2-input"
          inputName="attr2-input"
          inputType="number"
          labelName="Atributo 2: "
        />
        <Input
          id="attr3-input"
          inputName="attr3-input"
          inputType="number"
          labelName="Atributo 3: "
        />
        <Input
          id="image-input"
          inputName="image-input"
          inputType="text"
          labelName="Imagem da Carta: "
        />
        <label htmlFor="rare-input">
          Raridade:
          <select
            id="rare-input"
            data-testid="rare-input"
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
        />
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
