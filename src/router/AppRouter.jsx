
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { NothingSelectedView } from '../journal/views';
import { JournalLayout } from '../journal/layout/JournalLayout';

export const AppRouter = () => {
  return (
    <Routes>

      {/* Login y Registro */}
      <Route path='/auth/*' element={<AuthRoutes /> } />

      {/* JournalApp */}
      <Route path='/' element={<AuthRoutes /> } />
      <Route path='/journal' element={<JournalLayout><NothingSelectedView/></JournalLayout> } />

    </Routes>
  )
}

