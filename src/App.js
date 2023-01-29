import React from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import Form from './components/Form';
import './App.css';
// import cardDeck from './data';

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
      filteredCards: [],
    };
  }

  refreshFunctions() {
    this.resetForm();
    this.checkHasTrunfo();
  }

  resetForm() {
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
  }

  checkButton() {
    if (this.checkTextInput() || this.checkNumberInput()) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  checkTextInput() {
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
  }

  checkNumberInput() {
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
  }

  checkHasTrunfo() {
    const { tryunfoDeck } = this.state;
    if (tryunfoDeck.some((card) => card.cardTrunfo === true)) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  removeCard(cardIndex) {
    const { tryunfoDeck } = this.state;
    this.setState({
      tryunfoDeck: tryunfoDeck.filter((_, index) => index !== cardIndex),
    }, this.checkHasTrunfo);
  }

  findCard({ target }) {
    const { value } = target;
    const { tryunfoDeck } = this.state;
    this.setState({
      filteredCards: tryunfoDeck.filter((card) => card.cardName
        .toLowerCase().includes(value.toLowerCase())),
    });
  }

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
      filteredCards,
    } = this.state;
    return (
      <>
        <div className="form">
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
            cardId="Preview"
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div className="deck">
          <Deck
            tryunfoDeck={ tryunfoDeck }
            searchResults={ filteredCards }
            deleteCard={ this.removeCard }
            searchName={ this.findCard }
          />
        </div>
      </>
    );
  }
}

export default App;
