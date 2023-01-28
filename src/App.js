import React from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState(({
          [name]: value,
        }), this.checkButton);
      },
      onSaveButtonClick: ((event) => {
        event.preventDefault();
        const {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
          tryunfoDeck,
        } = this.state;
        this.setState(() => ({
          tryunfoDeck: [...tryunfoDeck, {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          }],
        }), this.refreshFunctions);
      }),
      tryunfoDeck: [],
    };
  }

  deleteCard = (event) => {
    // const { tryunfoDeck } = this.state;
    console.log(event);
  };

  refreshFunctions = () => {
    this.resetForm();
    this.checkHasTrunfo();
  };

  resetForm = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  checkButton = () => {
    if (this.checkTextInput() || this.checkNumberInput()) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  };

  checkTextInput = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    return cardName === ''
        || cardDescription === ''
        || cardImage === ''
        || cardRare === '';
  };

  checkNumberInput = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    let outputAnswer;
    if (cardAttr1 === '' || cardAttr2 === '' || cardAttr3 === '') {
      outputAnswer = true;
    } else if (cardAttr1 !== '' && cardAttr2 !== '' && cardAttr3 !== '') {
      const attributeOne = parseFloat(cardAttr1);
      const attributeTwo = parseFloat(cardAttr2);
      const attributeThree = parseFloat(cardAttr3);
      const totalAttributes = attributeOne + attributeTwo + attributeThree;
      const maxAllAttributes = 210;
      const maxSingleAttribute = 90;
      if (totalAttributes > maxAllAttributes
        || (attributeOne > maxSingleAttribute || attributeOne < 0)
        || (attributeTwo > maxSingleAttribute || attributeTwo < 0)
        || (attributeThree > maxSingleAttribute || attributeThree < 0)) {
        outputAnswer = true;
      } else {
        outputAnswer = false;
      }
    }
    return outputAnswer;
  };

  checkHasTrunfo = () => {
    const { tryunfoDeck } = this.state;
    if (tryunfoDeck.some((card) => card.cardTrunfo === true)) {
      this.setState({
        hasTrunfo: true,
      });
    }
  };

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
      tryunfoDeck,
    } = this.state;
    const isPreview = true;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isPreview={ isPreview }
          deleteCard={ this.deleteCard }
        />
        <Deck tryunfoDeck={ tryunfoDeck } deleteCard={ this.deleteCard } />
      </div>
    );
  }
}

export default App;
