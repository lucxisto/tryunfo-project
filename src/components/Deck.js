import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Deck.css';

class Deck extends React.Component {
  render() {
    const { tryunfoDeck, searchCard, deleteCard, searchResults,
      searchInput } = this.props;
    const { filterDisable } = searchInput;
    const inputSearch = (
      <label htmlFor="name-filter">
        Pesquise:
        <input
          id="name-filter"
          data-testid="name-filter"
          type="text"
          onChange={ searchCard }
          disabled={ filterDisable }
        />
      </label>
    );
    const optionSearch = (
      <label htmlFor="rare-filter">
        Raridade:
        <select
          id="rare-filter"
          data-testid="rare-filter"
          onChange={ searchCard }
          disabled={ filterDisable }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>

        </select>
      </label>
    );
    const cardsToRender = searchInput.name !== ''
      || searchInput.rarity !== 'todas'
      || searchResults.length > 0
      ? searchResults : tryunfoDeck;
    return (
      <section className="deck">
        <h1>Seu Baralho do Tryunfo</h1>
        { inputSearch }
        { optionSearch }
        <label htmlFor="trunfo-filter">
          Super Trunfo
          <input
            id="trunfo-filter"
            type="checkbox"
            onChange={ searchCard }
            checked={ searchResults.filterDisable }
            data-testid="trunfo-filter"
          />
        </label>
        <ul>
          {
            cardsToRender.map((card, index) => (
              <li key={ index }>
                <Card
                  cardId={ `${index + 1}` }
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
              </li>))
          }
        </ul>
      </section>
    );
  }
}

Deck.propTypes = {
  tryunfoDeck: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  searchInput: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    filterDisable: PropTypes.bool.isRequired,
  }).isRequired,
  searchCard: PropTypes.func.isRequired,
  // searchRarity: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Deck;
