import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

//Services
import { isAuthenticated } from '../services/authService';

interface Props {
    children:ReactNode;
}



const PrivateRoute:React.FC<Props> = ({ children }) => {
    const location = useLocation();
    return isAuthenticated() ? 
    (<>{children}</>) 
    :
    (<Navigate replace={true} 
                to="/login"
                state={{ from: `${location.pathname}${location.search}` }} />)
}

export default PrivateRoute