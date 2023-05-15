import { useNavigate } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import Header from '../components/Header';

const Layout = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo') as string);
  
  const logoutClick = () => {
    sessionStorage.clear();
    navigate("/login");
  }

  return (
    <Header email={userInfo.email} onLogoutClickedHandler={logoutClick}  />
  )
}

export default Layout