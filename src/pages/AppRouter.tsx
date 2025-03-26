import { Route, Routes } from 'react-router';
import { lazy } from 'react';

const Layout = lazy(() => import('./Layout'));
const HomePage = lazy(() => import('./Home'));
const StudentPage = lazy(() => import('./Student'));

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/studio-jezykowe-vista/student"
          element={<StudentPage />}
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
