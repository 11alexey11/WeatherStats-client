import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Info } from './components/Info';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute />,
        errorElement: <div>Что-то пошло не так</div>,
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <div>Что-то пошло не так</div>,
    },
    {
        path: '/info',
        element: <Info />,
        errorElement: <div>Что-то пошло не так</div>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Global
            styles={{
                ':root': { fontSize: '10px' },
                '*': { boxSizing: 'border-box', padding: 0, margin: 0 },
                html: {
                    height: '100%',
                },
                body: {
                    // width: '100%',
                    minHeight: '100%',
                },
                '#root': {
                    height: '100%',
                },
            }}
        />{' '}
        <RouterProvider router={router} />
    </>,
);
