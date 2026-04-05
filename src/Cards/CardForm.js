import React from "react";

function CardForm({ card, setCard, handleSave, handleDone }) {
  return (
    <form onSubmit={handleSave}>
      <label>
        Front
        <textarea
          value={card.front}
          onChange={(e) => setCard({ ...card, front: e.target.value })}
        />
      </label>
      <label>
        Back
        <textarea
          value={card.back}
          onChange={(e) => setCard({ ...card, back: e.target.value })}
        />
      </label>
      <button type="submit">Save</button>
      {handleDone && <button type="button" onClick={handleDone}>Done</button>}
    </form>
  );
}

export default CardForm;