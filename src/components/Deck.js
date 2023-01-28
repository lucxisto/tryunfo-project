import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { tryunfoDeck } = this.props;
    return (
      <>
        <h1>Seu Baralho do Tryunfo</h1>
        {
          tryunfoDeck.map((card) => (<Card
            key={ card.cardName }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />))
        }
      </>
    );
  }
}

Deck.propTypes = {
  tryunfoDeck: PropTypes.arrayOf(
    PropTypes.string,
    PropTypes.bool,
  ).isRequired,
};

export default Deck;
