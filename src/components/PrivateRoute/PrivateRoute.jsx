import { Navigate } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';

const PrivateRoute = () => {
    return document.cookie.includes('auth_cookie') && getCookie('auth_cookie').length !== 0 ? (
        <Navigate to='/info' />
    ) : (
        <Navigate to='/login' />
    );
};

export { PrivateRoute };
