import { Global } from '@emotion/react';
import { AppContainer } from './style';

const App = () => {
    return (
        <>
            <Global
                styles={{
                    ':root': { fontSize: '10px' },
                    '*': { boxSizing: 'border-box', padding: 0, margin: 0 },
                    'html, body, #root': {
                        width: '100vw',
                        height: '100vh',
                    },
                }}
            />
            <AppContainer>
            </AppContainer>
        </>
    );
};

export { App };
