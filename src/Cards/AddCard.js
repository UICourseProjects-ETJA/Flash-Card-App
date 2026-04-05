import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { readDeck, createCard } from "../utils/api";
import CardForm from "./CardForm";

function AddCard() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [card, setCard] = useState({ front: "", back: "" });
  const navigate = useNavigate();

  useEffect(() => {
    async function loadDeck() {
      const data = await readDeck(deckId);
      setDeck(data);
    }
    loadDeck();
  }, [deckId]);

  const handleSave = async (e) => {
    e.preventDefault();
    await createCard(deckId, card);
    setCard({ front: "", back: "" }); 
  };

  const handleDone = () => navigate(`/decks/${deckId}`);

  if (!deck) return <p>Loading...</p>;

  return (
    <div>
      <nav>Home / {deck.name} / Add Card</nav>
      <h2>{deck.name}</h2>
      <h3>Add Card</h3>
      <CardForm card={card} setCard={setCard} handleSave={handleSave} handleDone={handleDone} />
    </div>
  );
}

export default AddCard;