import { useNavigate } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import Header from '../components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='inline-flex w-full'>
        <div className='w-28 bg-black'>
          Sidebar
        </div>
        <div>
          Content
        </div>
      </div>
    </>
  )
}

export default Layout