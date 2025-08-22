import React from 'react'
import { useState } from 'react';
import { useNotes } from "../context/NotesContext";
import { useNavigate } from "react-router-dom";

export const AddNote = () => {
  const { notes, setNotes } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#ffffff");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!title.trim() && !content.trim()) return alert("Cannot be empty");
    setNotes([...notes, { title, content, color }]);
    navigate("/");
  };
  return (
    <div>
    <h1 className='text-3xl font-semibold'>Notes App</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Enter title here'
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='Enter content here' />
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <button
        onClick={handleSave}>
          Save
      </button>

    </div>
  )
}
