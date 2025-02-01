import { Route, Routes } from 'react-router';
import { lazy } from 'react';
import Layout from './Layout';

const HomePage = lazy(() => import('./Home'));
const StudentPage = lazy(() => import('./Student'));

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/student' element={<StudentPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
