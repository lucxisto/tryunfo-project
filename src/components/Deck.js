import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  // renderCard = (card, index) => {
  //   const { deleteCard } = this.props;
  //   return (
  //     <li key={ index }>
  //       <Card
  //         cardId={ `${index + 1}` }
  //         cardName={ card.cardName }
  //         cardDescription={ card.cardDescription }
  //         cardAttr1={ card.cardAttr1 }
  //         cardAttr2={ card.cardAttr2 }
  //         cardAttr3={ card.cardAttr3 }
  //         cardImage={ card.cardImage }
  //         cardRare={ card.cardRare }
  //         cardTrunfo={ card.cardTrunfo }
  //       />
  //       <button
  //         data-testid="delete-button"
  //         onClick={ () => deleteCard(index) }
  //       >
  //         Excluir
  //       </button>
  //     </li>
  //   );
  // };

  render() {
    const {
      tryunfoDeck,
      searchName,
      deleteCard,
      searchResults,
      searchInput,
    } = this.props;
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
    const cardsToRender = searchInput !== '' || searchResults.length > 0
      ? searchResults : tryunfoDeck;

    return (
      <ul>
        <h1>Seu Baralho do Tryunfo</h1>
        { inputSearch }
        {
          console.log(searchName)
        }
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
  searchInput: PropTypes.string.isRequired,
  searchName: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Deck;
