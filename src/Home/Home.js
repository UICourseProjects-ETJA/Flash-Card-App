import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";

function Home() {
  const [decks, setDecks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadDecks() {
      const data = await listDecks();
      setDecks(data);
    }
    loadDecks();
  }, []);

  const handleDeleteDeck = async (deckId) => {
    if (window.confirm("Delete this deck?")) {
      await deleteDeck(deckId);
      setDecks(decks.filter((deck) => deck.id !== deckId));
    }
  };

  return (
    <div>
      <Link to="/decks/new">
        <button>Create Deck</button>
      </Link>
      {decks.map((deck) => (
        <div key={deck.id}>
          <h3>{deck.name}</h3>
          <p>{deck.cards?.length} cards</p>
          <p>{deck.description}</p>
          <Link to={`/decks/${deck.id}`}><button>View</button></Link>
          <Link to={`/decks/${deck.id}/study`}><button>Study</button></Link>
          <button onClick={() => handleDeleteDeck(deck.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default Home;