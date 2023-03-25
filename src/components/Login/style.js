import styled from '@emotion/styled';

export const LoginContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
});

export const FormContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '10rem 5rem',
    borderRadius: '1rem',
    border: '1px solid #000000',
});

export const FieldContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
});

export const Title = styled.div({
    fontSize: '3rem',
});

export const InputField = styled.input({
    outline: 'none',
    padding: '1rem',
    borderRadius: '1rem',
    border: '1px solid #D9D9D9',
    backgroundColor: '#FFFFFF',
    '&:hover': {
        borderColor: '#4096FF',
    },
    '&:focus': {
        borderColor: '#4096FF',
        boxShadow: '0 0 0 2px rgba(5,145,255,.1)',
    },
});

export const LabelField = styled.div({
    fontSize: '1.5rem',
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

export const ErrorField = styled.div({
    fontSize: '1.5rem',
});
