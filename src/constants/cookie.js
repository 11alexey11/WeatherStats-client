import { getCookie } from '../utils/cookie';

export const isAuth =
    document.cookie.includes('auth_cookie') && getCookie('auth_cookie').length !== 0;
