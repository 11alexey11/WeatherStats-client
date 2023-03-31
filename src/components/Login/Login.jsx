import { useCallback, useEffect, useState } from 'react';
import {
    ButtonField,
    ErrorField,
    FieldContainer,
    FormContainer,
    InputField,
    LabelField,
    LinkField,
    LoginContainer,
    Title,
} from './style';
import { api } from '../../api';
import { loginUrl, registerUrl } from '../../constants/api';
import { Loader } from '../Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem('name', login);
        }
    }, [isSuccess, login]);

    useEffect(() => {
        if (document.cookie.includes('auth_cookie') && getCookie('auth_cookie').length) {
            navigate('/info', { replace: true });
        }
    }, [document.cookie]);

    const handleOnClick = useCallback(async () => {
        const url = location.pathname === '/register' ? registerUrl : loginUrl;
        setIsFetching(true);
        const data = await api.post(url, {
            userName: login,
            password,
        });
        if (data.isSuccess) {
            setIsSuccess(true);
        } else {
            setError(data.error);
        }
        setIsFetching(false);
    }, [login, password, isFetching, location]);

    return (
        <LoginContainer>
            {!isFetching ? (
                <FormContainer>
                    <Title>{location.pathname === '/register' ? 'Регистрация' : 'Авторизация'}</Title>
                    <FieldContainer>
                        <LabelField>Логин</LabelField>
                        <InputField value={login} onChange={(e) => setLogin(e.target.value)} />
                    </FieldContainer>
                    <FieldContainer>
                        <LabelField>Пароль</LabelField>
                        <InputField
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FieldContainer>
                    <LinkField to='/register'>Зарегистрироваться?</LinkField>
                    <ButtonField onClick={handleOnClick}>Войти</ButtonField>
                    {error && <ErrorField>{error}</ErrorField>}
                </FormContainer>
            ) : (
                <Loader />
            )}
        </LoginContainer>
    );
};

export { Login };
