import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<div style={{ height: '50vh' }}>Ładowanie...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;
