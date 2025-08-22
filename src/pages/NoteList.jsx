import { Link } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const NoteList = () => {
  const navigate = useNavigate();
  const{notes, deleteNote}=useNotes();
  return (
    <div> 
        <div>
            <h1>Notes</h1>
            <button onClick={() => navigate("/add")}>Add Note</button>
        </div>
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
              <Link to={`/edit/${index}`}>
                <button>Edit</button>
              </Link>
            </div>
          ))
        )}
      </div>
      </div>
  )
}
