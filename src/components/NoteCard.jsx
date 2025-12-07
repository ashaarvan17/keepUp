import React from "react";
import { Trash2 } from "lucide-react";
import "../styles/noteCard.css";

export default function NoteCard({ id, text, updateNote, deleteNote }) {
  return (
    <div className="noteCard">
      <textarea
        className="input"
        rows="5"
        cols="5"
        value={text}
        placeholder="Write your note..."
        onChange={(e) => updateNote(id, e.target.value)}
      />
      <div className="bottom">
        <Trash2 className="trash" onClick={() => deleteNote(id)} />
      </div>
    </div>
  );
}
