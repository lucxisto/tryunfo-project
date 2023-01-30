import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Deck.css';

class Deck extends React.Component {
  render() {
    const {
      tryunfoDeck,
      searchName,
      deleteCard,
      searchResults,
      searchInput,
      searchRarity,
    } = this.props;
    const inputSearch = (
      <label htmlFor="name-filter">
        Pesquise:
        <input
          id="name-filter"
          data-testid="name-filter"
          type="text"
          onChange={ searchName }
        />
      </label>
    );
    const optionSearch = (
      <label htmlFor="rare-filter">
        Raridade:
        <select
          id="rare-filter"
          data-testid="rare-filter"
          onChange={ searchRarity }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>

        </select>
      </label>
    );
    const cardsToRender = (searchInput.name !== ''
      && searchInput.rarity !== 'todas')
      || searchResults.length > 0
      ? searchResults : tryunfoDeck;
    console.log(searchInput);
    return (
      <section className="deck">
        <h1>Seu Baralho do Tryunfo</h1>
        { inputSearch }
        { optionSearch }
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
  searchInput: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rarity: PropTypes.string.isRequired,
    }),
  ).isRequired,
  searchName: PropTypes.func.isRequired,
  searchRarity: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Deck;
