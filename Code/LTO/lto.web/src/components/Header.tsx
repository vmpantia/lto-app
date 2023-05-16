import { useNavigate } from 'react-router-dom';

//Services
import { getEmail, logoutUser } from '../services/authService';

//Constants
import { URL_LOGIN } from '../model/constant';

const Header = () => {
    const navigate = useNavigate();
    const email = getEmail();
    
    const onLogoutClick = () => {
        logoutUser();
        navigate(URL_LOGIN);
    }

    return (
        <div className='h-16 w-full p-2 bg-blue-700 border-b-2 border-blue-800 flex justify-between'>
            <div className='inline-flex'>
            <img className='h-12 w-12 mr-2' 
                    src={require('../assets/Icons/lto-icon.png')}>
            </img>
            <div className='flex justify-end items-center text-white'>
                <div> 
                    <p className='text-sm font-medium'>Land Transportation Office</p>
                    <p className='font-bold'>PORTAL</p>
                </div>
            </div>
            </div>

            <div className='flex justify-end items-center text-white'>
                <div className='text-xs mr-2'> 
                    <p>{email}</p>
                    <button className='float-right font-medium' onClick={onLogoutClick}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Header