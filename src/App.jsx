import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
      placeholder='Enter content here'/>

    <button>Add Note</button>
    </>
  )
}

export default App
