import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Error } from './components/Error';
import { Info } from './components/Info';
import { Login } from './components/Login';

const router = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/login' />,
        errorElement: <Error />,
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: '/register',
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: '/info',
        element: <Info />,
        errorElement: <Error />,
    },
]);

const App = () => {
    return (
        <>
            <Global
                styles={{
                    ':root': { fontSize: '10px' },
                    '*': { boxSizing: 'border-box', padding: 0, margin: 0 },
                    html: {
                        height: '100vh',
                        width: '100vw',
                    },
                    body: {
                        width: '100%',
                        height: '100%',
                    },
                    '#root': {
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                    },
                }}
            />
            <RouterProvider router={router} />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
