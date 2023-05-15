import { useNavigate } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Layout = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo') as string);
  
  const logoutClick = () => {
    sessionStorage.clear();
    navigate("/login");
  }

  return (
      <div className='h-16 p-2 bg-blue-700 flex justify-between'>
          <div className='inline-flex'>
            <img className='h-12 w-12 mr-2' 
                  src={require('../assets/Icons/lto-icon.png')}>
            </img>
            <div className='flex justify-end items-center text-white'>
              <div> 
                  <p className='text-sm font-medium'>Land Transportation Office</p>
                  <p className='font-bold'>Portal</p>
              </div>
            </div>
          </div>

          <div className='flex justify-end items-center text-white'>
            <div className='text-xs mr-2'> 
              <p>{userInfo.email}</p>
              <button className='float-right font-medium' onClick={logoutClick}>Logout</button>
            </div>
            <UserCircleIcon className='w-10 h-10' />
          </div>
      </div>
  )
}

export default Layout