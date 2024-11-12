import { createBrowserRouter, Link, Navigate } from 'react-router-dom';
import React from 'react';
import { ClientRouters } from './clientRouters';
import { ImagesListPage } from '@pages/images-list/ImagesListPage';
import { ImageCardPage } from '@pages/image-card/ImageCardPage';
// import { StartScreen } from '../pages/start-screen/StartScreen';
// import { LoginPage } from '../pages/authentication/LoginPage';
// import { RegistrationPage } from '../pages/authentication/RegistrationPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={ClientRouters.imagesList} replace />,
    },
    {
        path: ClientRouters.imagesList,
        element: <ImagesListPage />,
        children: [
            {
                path: ClientRouters.imageCard,
                element: <ImageCardPage />,
            },
        ],
    },
    // {
    //     path: ClientRouters.imageCard,
    //     element: <ImageCardPage />,
    // },
    {
        path: '*',
        element: <div>NotFound</div>,
    },
]);
