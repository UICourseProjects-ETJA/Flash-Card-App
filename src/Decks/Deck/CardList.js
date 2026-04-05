
import React from "react";
import { Link } from "react-router-dom";

function CardList({ cards, deckId, handleDeleteCard }) {
  return (
    <div>
      <h3>Cards</h3>
      {cards.map((card) => (
        <div key={card.id}>
          <p><strong>Q:</strong> {card.front}</p>
          <p><strong>A:</strong> {card.back}</p>
          <Link to={`/decks/${deckId}/cards/${card.id}/edit`}><button>Edit</button></Link>
          <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CardList;