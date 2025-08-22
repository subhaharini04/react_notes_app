import { NoteList } from './pages/NoteList'
import { AddNote } from './pages/AddNote'
import {Routes, Route} from 'react-router-dom'
import { EditNote } from './pages/EditNote'
function App() {
  return (
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/edit/:id" element={<EditNote />} />
      </Routes>
  );
}
export default App
