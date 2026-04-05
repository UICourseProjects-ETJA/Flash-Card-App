import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import CreateDeck from "../Decks/CreateDeck";
import EditDeck from "../Decks/EditDeck";
import DeckView from "../Decks/Deck/DeckView";
import Study from "../Decks/Study/Study";
import AddCard from "../Cards/AddCard";
import EditCard from "../Cards/EditCard";
import NotFound from "./NotFound";

function Layout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decks/new" element={<CreateDeck />} />
      <Route path="/decks/:deckId" element={<DeckView />} />
      <Route path="/decks/:deckId/study" element={<Study />} />
      <Route path="/decks/:deckId/edit" element={<EditDeck />} />
      <Route path="/decks/:deckId/cards/new" element={<AddCard />} />
      <Route path="/decks/:deckId/cards/:cardId/edit" element={<EditCard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Layout;
