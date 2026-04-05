import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { readDeck } from "../../utils/api";

function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadDeck() {
      const data = await readDeck(deckId);
      setDeck(data);
    }
    loadDeck();
  }, [deckId]);

  if (!deck) return <p>Loading...</p>;

  const cards = deck.cards || [];
  if (cards.length < 3) {
    return (
      <div>
        <nav>Home / {deck.name} / Study</nav>
        <h2>{deck.name}</h2>
        <p>Not enough cards.</p>
        <Link to={`/decks/${deck.id}/cards/new`}><button>Add Cards</button></Link>
      </div>
    );
  }

  const card = cards[current];

  const handleNext = () => {
    if (current + 1 < cards.length) {
      setCurrent(current + 1);
      setFlipped(false);
    } else {
      if (window.confirm("Restart cards?")) {
        setCurrent(0);
        setFlipped(false);
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div>
      <nav>Home / {deck.name} / Study</nav>
      <h2>{deck.name}</h2>
      <div>
        <p>Card {current + 1} of {cards.length}</p>
        <p>{flipped ? card.back : card.front}</p>
        <button onClick={() => setFlipped(!flipped)}>Flip</button>
        {flipped && <button onClick={handleNext}>Next</button>}
      </div>
    </div>
  );
}

export default Study;