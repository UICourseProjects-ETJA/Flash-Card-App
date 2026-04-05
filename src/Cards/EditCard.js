import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../utils/api";
import CardForm from "./CardForm";

function EditCard() {
  const { deckId, cardId } = useParams();
  const navigate = useNavigate();
  const [deck, setDeck] = useState(null);
  const [card, setCard] = useState({ front: "", back: "" });

  useEffect(() => {
    async function loadData() {
      const deckData = await readDeck(deckId);
      const cardData = await readCard(cardId);
      setDeck(deckData);
      setCard({ ...cardData });
    }
    loadData();
  }, [deckId, cardId]);

  const handleSave = async (e) => {
    e.preventDefault();
    await updateCard(card);
    navigate(`/decks/${deckId}`);
  };

  if (!deck) return <p>Loading...</p>;

  return (
    <div>
      <nav>Home / {deck.name} / Edit Card {cardId}</nav>
      <h2>Edit Card</h2>
      <CardForm card={card} setCard={setCard} handleSave={handleSave} />
    </div>
  );
}

export default EditCard;