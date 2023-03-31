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
    gap: '1rem',
    width: '100%',
});

export const CounterContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    width: '100%',
});

export const DataContainer = styled.div({
    fontSize: '1rem',
    overflow: 'hidden',
    maxHeight: '50rem',
    height: '100%',
});

export const Counter = styled.div({
    fontSize: '3rem',
});

export const CounterTitle = styled.div({
    display: 'flex',
    justifyContent: 'center',
    fontSize: '2rem',
});

export const HeaderContainer = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#292929',
    color: '#FFFFFF',
});

export const NameContainer = styled.div({
    display: 'flex',
    fontSize: '2rem',
});

export const ButtonContainer = styled.div({
    display: 'flex',
});

export const BodyContainer = styled.div({
    display: 'flex',
    height: '100%',
});

export const ButtonField = styled.button({
    padding: '1.5rem 2rem',
    outline: 'none',
    borderRadius: '1rem',
    border: '1px solid #D9D9D9',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    '&:hover': {
        borderColor: '#4096FF',
    },
    '&:focus': {
        borderColor: '#4096FF',
        boxShadow: '0 0 0 2px rgba(5,145,255,.1)',
    },
});
