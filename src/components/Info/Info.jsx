import { useCallback, useEffect, useState } from 'react';
import { typhoonRoutesName, typhoonsRoutes, typhoonsUrl } from '../../constants/api';
import {
    BodyContainer,
    Counter,
    CounterContainer,
    CountersContainer,
    CounterTitle,
    HeaderContainer,
    InfoContainer,
    MethodItem,
    MethodsList,
} from './style';
import { api } from '../../api';
import { Loader } from '../Loader';

const Info = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [activeElement, setActiveElement] = useState(-1);
    const [linqData, setLinqData] = useState({});
    const [plinqData, setPlinqData] = useState({});
    const [urlLinq, setUrlLinq] = useState('');
    const [urlPlinq, setUrlPlinq] = useState('');

    useEffect(() => {
        if (urlLinq.length !== 0 && urlPlinq.length !== 0) {
            setIsFetching(true);
            Promise.all([
                api.get(urlLinq).then((data) => data.json()),
                api.get(urlPlinq).then((data) => data.json()),
            ]).then((data) => {
                setIsFetching(false);
                setLinqData(data[0]);
                setPlinqData(data[1]);
            });
        }
    }, [urlLinq, urlPlinq]);

    const handleOnClick = useCallback((typhoonRoute, index) => {
        setActiveElement(index);
        setUrlLinq(`${typhoonsUrl}/${typhoonRoute}?mode=linq`);
        setUrlPlinq(`${typhoonsUrl}/${typhoonRoute}?mode=plinq`);
    }, []);

    return (
        <InfoContainer>
            <HeaderContainer>{localStorage.getItem('name')}</HeaderContainer>
            <BodyContainer>
                <MethodsList>
                    {typhoonsRoutes.map((typhoonRoute, index) => {
                        return (
                            <MethodItem
                                isActive={index === activeElement}
                                onClick={() => handleOnClick(typhoonRoute, index)}
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
                                <CounterTitle>Синхронные вычисления</CounterTitle>
                                <Counter>
                                    {Object.keys(linqData).length !== 0
                                        ? JSON.stringify(linqData, null, 2)
                                        : ''}
                                </Counter>
                            </CounterContainer>
                            <CounterContainer>
                                <CounterTitle>Параллельные вычисления</CounterTitle>
                                <Counter>
                                    {Object.keys(plinqData).length !== 0
                                        ? JSON.stringify(plinqData, null, 2)
                                        : ''}
                                </Counter>
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
