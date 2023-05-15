import { Navigate, useLocation } from 'react-router-dom';

type Props = {
    childComponent:any;
}

const PrivateRoute = (props:Props) => {
    const { childComponent } = props
    const location = useLocation()
    const isAuthenticated = sessionStorage.getItem("userInfo") !== null;

    return isAuthenticated ? 
    (
        <>{childComponent}</>
    ) 
    :
    (
        <>
            <Navigate replace={true} 
                        to="/login"
                        state={{ from: `${location.pathname}${location.search}` }} />
        </>
    )
}

export default PrivateRoute