import React, { useState, useEffect } from "react";
import NoteCard from "./NoteCard.jsx";
import "../styles/grid.css";

export default function Grid() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    setNotes([...notes, { id: Date.now(), text: "" }]);
  };

  const updateNote = (id, newText) => {
    setNotes(notes.map(n => n.id === id ? { ...n, text: newText } : n));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div className="gridContainer">
      <button className="addNote" onClick={addNote}>+ Add Note</button>
      <div className="grid">
        {notes.map(note => (
          <NoteCard
            key={note.id}
            id={note.id}
            text={note.text}
            updateNote={updateNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}
