import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";

 function EditDeck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    async function loadDeck() {
      const data = await readDeck(deckId);
      setDeck({ name: data.name, description: data.description, id: data.id });
    }
    loadDeck();
  }, [deckId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDeck(deck);
    navigate(`/decks/${deck.id}`);
  };

  return (
    <div>
      <nav><Link to="/">Home</Link> / {deck.name} / Edit Deck</nav>
      <h2>Edit Deck</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" value={deck.name} onChange={(e) => setDeck({ ...deck, name: e.target.value })} />
        </label>
        <label>
          Description
          <textarea value={deck.description} onChange={(e) => setDeck({ ...deck, description: e.target.value })} />
        </label>
        <button type="submit">Submit</button>
        <Link to={`/decks/${deck.id}`}><button type="button">Cancel</button></Link>
      </form>
    </div>
  );
}

export default EditDeck;