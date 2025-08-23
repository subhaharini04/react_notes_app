import { Link } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import { useNavigate } from 'react-router-dom';
import {FaPlus} from "react-icons/fa";

export const NoteList = () => {
  const navigate = useNavigate();
  const{notes, deleteNote}=useNotes();
  return (
    <div className='flex'> 
        <div className='border-r border-gray-300 h-screen p-6 pt-20'>
          <button className='bg-black text-white p-2 rounded-full cursor-pointer ' onClick={() => navigate("/add")}><FaPlus /></button>
        </div>
        <div>
        <div className='p-4 flex-col'>
            <h1 className='pt-14 text-5xl font-bold'>Notes</h1>
        <div className='p-5 pt-10'>
        {notes.length === 0 ? (
          <p className='text-center'> No Notes Yet</p>
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
      </div>
              </div>

  )
}
