import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  renderCard(card, index) {
    const { deleteCard } = this.props;
    return (
      <li key={ index }>
        <Card
          cardId={ `${index}` }
          cardName={ card.cardName }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardImage={ card.cardImage }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
        />
        <button
          data-testid="delete-button"
          onClick={ () => deleteCard(index) }
        >
          Excluir
        </button>
      </li>
    );
  }

  render() {
    const { tryunfoDeck, searchName, searchResults } = this.props;
    const inputSearch = (
      <label htmlFor="name-filter">
        Pesquise
        <input
          id="name-filter"
          data-testid="name-filter"
          type="text"
          onChange={ searchName }
        />
      </label>
    );
    return (
      <ul>
        <h1>Seu Baralho do Tryunfo</h1>
        { inputSearch }
        {
          searchResults.length > 0 || inputSearch.value !== ''
            ? searchResults.map((card, index) => this.renderCard(card, index))
            : tryunfoDeck.map((card, index) => this.renderCard(card, index))
        }
      </ul>
    );
  }
}

Deck.propTypes = {
  tryunfoDeck: PropTypes.arrayOf(
    PropTypes.string,
    PropTypes.bool,
  ).isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.string,
    PropTypes.bool,
  ).isRequired,
  searchName: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Deck;
