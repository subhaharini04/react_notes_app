import { createContext, useContext, useState, useEffect } from "react";

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content, color) => {
    const newNote = {
      title,
      content,
      color,
      timeStamp: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const editNote = (index, newTitle, newContent, newColor) => {
    const updatedNote = {
      title: newTitle,
      content: newContent,
      color: newColor,
      timeStamp: Date.now(),
    };
    setNotes((notes) =>
      notes.map((note, i) => (i === index ? updatedNote : note))
    );
  };

  return (
    <NotesContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
      {children}
    </NotesContext.Provider>
  );
}
export function useNotes() {
  return useContext(NotesContext);
}
