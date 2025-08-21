import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (title.trim() === "" && content.trim() === "") {
      alert("Title and content cannot be empty");
      return;
    }
    if(editingIndex !== null){
      const updatedNotes =notes.map((note, i)=>
      i === editingIndex ? { title, content } : note
    );
    setNotes(updatedNotes);
    setEditingIndex(null);
    }else{
    const newNote = { title, content };
    setNotes([...notes, newNote]);
    }
    setTitle("");
    setContent("");
    console.log("Note added:", newNote);
  }

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1>Notes App</h1>
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

      <button
        onClick={addNote}>
          {editingIndex !== null ? "Update Note" : "Add Note"}
      </button>

      <div>
        <h2>Note History</h2>
        {notes.length === 0 ? (
          <p> No Notes Yet</p>
        ) : (
          notes.map((note, index) => (
            <div key={index}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => deleteNote(index)}>Delete</button>
              <button onClick={() => {
                setEditingIndex(index);
                setTitle(note.title);
                setContent(note.content);
              }}>
                Edit
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
export default App
