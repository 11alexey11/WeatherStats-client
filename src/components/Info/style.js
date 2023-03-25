import styled from '@emotion/styled';

export const InfoContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
});

export const MethodsList = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: '#E5E5E5',
    padding: '3rem',
});

export const MethodItem = styled.div(({ isActive }) => ({
    display: 'flex',
    fontSize: '2rem',
    cursor: 'pointer',
    color: isActive ? 'green' : '#000000',
}));

export const CountersContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
});

export const CounterContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
});

export const Counter = styled.pre({
    fontSize: '2rem',
});

export const CounterTitle = styled.div({
    display: 'flex',
    justifyContent: 'center',
    fontSize: '2rem',
});

export const HeaderContainer = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1rem',
    fontSize: '2rem',
    backgroundColor: '#292929',
    color: '#FFFFFF',
});

export const BodyContainer = styled.div({
    display: 'flex',
    height: '100%',
});
