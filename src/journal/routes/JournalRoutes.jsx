
import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalPage } from '../pages/JournalPage';
import { NoteView, NothingSelectedView } from '../views';

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path='/journal' element={<NothingSelectedView /> } />
      <Route path='/' element={<Navigate to='/' /> } />
    </Routes>
  )
}


