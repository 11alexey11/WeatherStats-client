import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const animationCircle = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div({
    width: '48px',
    height: '48px',
    border: '24px solid #000000',
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    color: '#000000',
    animation: `${animationCircle} 1s linear infinite`,
});
