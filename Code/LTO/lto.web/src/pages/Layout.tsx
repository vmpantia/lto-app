//Components
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='inline-flex w-full'>
        <Sidebar />
        <div className='w-full m-3'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout