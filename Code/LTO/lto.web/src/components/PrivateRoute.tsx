import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
    children:ReactNode;
}

const PrivateRoute:React.FC<Props> = ({ children }) => {
    const location = useLocation()
    const isAuthenticated = sessionStorage.getItem("userInfo") !== null;
    return isAuthenticated ? 
    (<>{children}</>) 
    :
    (<Navigate replace={true} 
                to="/login"
                state={{ from: `${location.pathname}${location.search}` }} />)
}

export default PrivateRoute