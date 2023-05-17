import { Navigate, useLocation } from 'react-router-dom';

//Services
import { isAuthenticated } from '../services/authService';

//Properties
import { PrivateRouteProps } from '../model/Poperties/ComponentProperties';

const PrivateRoute:React.FC<PrivateRouteProps> = ({ children }) => {
    const location = useLocation();
    return isAuthenticated() ? 
    (<>{children}</>) 
    :
    (<Navigate replace={true} 
                to="/login"
                state={{ from: `${location.pathname}${location.search}` }} />)
}

export default PrivateRoute