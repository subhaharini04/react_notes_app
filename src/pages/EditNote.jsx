import { useParams, useNavigate } from "react-router-dom";
import { useNotes } from "../context/NotesContext";
import { useState } from "react";

export const EditNote = () => {
  const navigate = useNavigate();
  const { id } = useParams();              
  const { notes, editNote } = useNotes();

  const note = notes[id];                  // get the actual note by index
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const [color, setColor] = useState(note?.color || "#ffffff");


  const handleSave = () => {
    editNote(parseInt(id), title, content, color);
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Note</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />

      <button onClick={handleSave}>Save</button>
    </div>
  );
};
