import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#ffffff");
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
      i === editingIndex ? { title, content, color ,timeStamp:Date.now()} : note
    );
    setNotes(updatedNotes);
    setEditingIndex(null);
    }else{
    const newNote = { title, content, color ,timeStamp:Date.now() };
    setNotes([...notes, newNote]);
    }
    setTitle("");
    setContent("");
    setColor("#ffffff");
    console.log("Note added:", newNote);
  }

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  }

  return (
    <div className='p-4'>
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
        onClick={addNote}>
          {editingIndex !== null ? "Update Note" : "Add Note"}
      </button>

      <div>
        <h2>Note History</h2>
        {notes.length === 0 ? (
          <p> No Notes Yet</p>
        ) : (
          notes.map((note, index) => (
            <div key={index} className=' p-2 my-2 rounded' style={{ backgroundColor: note.color }}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <p>{new Date(note.timeStamp).toLocaleString()}</p>
              <button onClick={() => deleteNote(index)}>Delete</button>
              <button onClick={() => {
                setEditingIndex(index);
                setTitle(note.title);
                setContent(note.content);
                setColor(note.color);
              }}>
                Edit
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default App
