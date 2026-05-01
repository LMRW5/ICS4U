import { Outlet } from 'react-router-dom';
import {Navbar, Footer} from '../components';

export const MainLayout = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
        <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};