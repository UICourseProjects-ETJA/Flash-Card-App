import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { readDeck, deleteDeck, deleteCard } from "../../utils/api";
import CardList from "./CardList";

function DeckView() {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    async function loadDeck() {
      const data = await readDeck(deckId);
      setDeck(data);
    }
    loadDeck();
  }, [deckId]);

  const handleDeleteDeck = async () => {
    if (window.confirm("Delete this deck?")) {
      await deleteDeck(deckId);
      navigate("/");
    }
  };

  const handleDeleteCard = async (cardId) => {
    if (window.confirm("Delete this card?")) {
      await deleteCard(cardId);
      setDeck({
        ...deck,
        cards: deck.cards.filter((card) => card.id !== cardId),
      });
    }
  };

  if (!deck) return <p>Loading...</p>;

  return (
    <div>
      <nav>Home / {deck.name}</nav>
      <h2>{deck.name}</h2>
      <p>{deck.description}</p>
      <Link to={`/decks/${deck.id}/edit`}><button>Edit</button></Link>
      <Link to={`/decks/${deck.id}/study`}><button>Study</button></Link>
      <Link to={`/decks/${deck.id}/cards/new`}><button>Add Cards</button></Link>
      <button onClick={handleDeleteDeck}>Delete Deck</button>

      <CardList cards={deck.cards} deckId={deck.id} handleDeleteCard={handleDeleteCard} />
    </div>
  );
}

export default DeckView;