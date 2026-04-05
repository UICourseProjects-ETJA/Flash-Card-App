import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createDeck } from "../utils/api";
import EditDeck from "./EditDeck";

function CreateDeck() {
  const [deck, setDeck] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDeck = await createDeck(deck);
    navigate(`/decks/${newDeck.id}`);
  };

  return (
    <div>
      <nav><Link to="/">Home</Link> / Create Deck</nav>
      <h2>Create Deck</h2>
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
        <Link to="/"><button type="button">Cancel</button></Link>
      </form>
    </div>
  );
}

export default CreateDeck;