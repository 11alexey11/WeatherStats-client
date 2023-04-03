import { useCallback, useEffect, useState } from 'react';
import { typhoonRoutesName, typhoonsRoutes, typhoonsUrl } from '../../constants/api';
import {
    BodyContainer,
    ButtonContainer,
    ButtonField,
    Counter,
    CounterContainer,
    CountersContainer,
    CounterTitle,
    DataContainer,
    HeaderContainer,
    InfoContainer,
    MethodItem,
    MethodsList,
    NameContainer,
} from './style';
import { api } from '../../api';
import { Loader } from '../Loader';
import { useNavigate } from 'react-router-dom';
import { deleteCookie, getCookie } from '../../utils/cookie';

const Info = () => {
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);
    const [activeElement, setActiveElement] = useState(-1);
    const [linqData, setLinqData] = useState({});
    const [plinqData, setPlinqData] = useState({});
    const [parallelData, setParallelData] = useState({});
    const [urlLinq, setUrlLinq] = useState('');
    const [urlPlinq, setUrlPlinq] = useState('');
    const [urlParallel, setUrlParallel] = useState('');

    useEffect(() => {
        if (!(document.cookie.includes('auth_cookie') && getCookie('auth_cookie').length)) {
            navigate('/login', { replace: true });
        }
    }, [document.cookie]);

    useEffect(() => {
        if (urlLinq.length !== 0 && urlPlinq.length !== 0 && urlParallel.length !== 0) {
            setIsFetching(true);
            Promise.all([
                api.get(urlLinq).then((data) => data.json()),
                api.get(urlPlinq).then((data) => data.json()),
                api.get(urlParallel).then((data) => data.json()),
            ]).then((data) => {
                setIsFetching(false);
                setLinqData(data[0]);
                setPlinqData(data[1]);
                setParallelData(data[2]);
            });
        }
    }, [urlLinq, urlPlinq, urlParallel]);

    const handleOnClickMethodItem = useCallback((typhoonRoute, index) => {
        setActiveElement(index);
        setUrlLinq(`${typhoonsUrl}/${typhoonRoute}?mode=linq`);
        setUrlPlinq(`${typhoonsUrl}/${typhoonRoute}?mode=plinq`);
        setUrlParallel(`${typhoonsUrl}/${typhoonRoute}?mode=parallel`);
    }, []);

    const handleOnClickQuit = useCallback(() => {
        deleteCookie('auth_cookie');
        navigate(-1);
    }, []);

    console.log(plinqData);

    return (
        <InfoContainer>
            <HeaderContainer>
                <NameContainer>{localStorage.getItem('name')}</NameContainer>
                <ButtonContainer>
                    <ButtonField onClick={handleOnClickQuit}>Выйти</ButtonField>
                </ButtonContainer>
            </HeaderContainer>
            <BodyContainer>
                <MethodsList>
                    {typhoonsRoutes.map((typhoonRoute, index) => {
                        return (
                            <MethodItem
                                isActive={index === activeElement}
                                onClick={() => handleOnClickMethodItem(typhoonRoute, index)}
                                key={index}
                            >
                                {typhoonRoutesName[typhoonRoute]}
                            </MethodItem>
                        );
                    })}
                </MethodsList>

                <CountersContainer>
                    {!isFetching ? (
                        <>
                            <CounterContainer>
                                <CounterTitle>Linq вычисления</CounterTitle>
                                <Counter>
                                    {linqData.calculationTime &&
                                        `Время: ${linqData.calculationTime}`}
                                </Counter>
                                <DataContainer>
                                    {Object.keys(linqData).length !== 0
                                        ? JSON.stringify(linqData, null, 2)
                                        : ''}
                                </DataContainer>
                            </CounterContainer>
                            <CounterContainer>
                                <CounterTitle>Plinq вычисления</CounterTitle>
                                <Counter>
                                    {plinqData.calculationTime &&
                                        `Время: ${plinqData.calculationTime}`}
                                </Counter>
                                <DataContainer>
                                    {Object.keys(plinqData).length !== 0
                                        ? JSON.stringify(plinqData, null, 2)
                                        : ''}
                                </DataContainer>
                            </CounterContainer>
                            <CounterContainer>
                                <CounterTitle>Parallel вычисления</CounterTitle>
                                <Counter>
                                    {parallelData.calculationTime &&
                                        `Время: ${parallelData.calculationTime}`}
                                </Counter>
                                <DataContainer>
                                    {Object.keys(parallelData).length !== 0
                                        ? JSON.stringify(parallelData, null, 2)
                                        : ''}
                                </DataContainer>
                            </CounterContainer>
                        </>
                    ) : (
                        <Loader />
                    )}
                </CountersContainer>
            </BodyContainer>
        </InfoContainer>
    );
};

export { Info };
