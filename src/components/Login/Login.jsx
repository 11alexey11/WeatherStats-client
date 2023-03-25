import { useCallback, useEffect, useState } from 'react';
import {
    ButtonField,
    ErrorField,
    FieldContainer,
    FormContainer,
    InputField,
    LabelField,
    LoginContainer,
    Title,
} from './style';
import { api } from '../../api';
import { loginUrl } from '../../constants/api';
import { Loader } from '../Loader';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem('name', login);
            navigate('/info', { replace: true });
        }
    }, [isSuccess, login]);

    const handleOnClick = useCallback(async () => {
        setIsFetching(true);
        const data = await api.post(loginUrl, {
            userName: login,
            password,
        });
        if (data.isSuccess) {
            setIsSuccess(true);
        } else {
            setError(data.error);
        }
        setIsFetching(false);
    }, [login, password, isFetching]);

    return (
        <LoginContainer>
            {!isFetching ? (
                <FormContainer>
                    <Title>Авторизация</Title>
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
