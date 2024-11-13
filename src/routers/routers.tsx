import { createBrowserRouter, Link, Navigate } from 'react-router-dom';
import React from 'react';
import { ClientRouters } from './clientRouters';
import { ImagesListPage } from '@pages/images-list/ImagesListPage';
import { ImageCardPage } from '@pages/image-card/ImageCardPage';

/**
 * Роутинг приложения
 */
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={ClientRouters.imagesList} replace />,
    },
    // главная страница (сетка изображений)
    {
        path: ClientRouters.imagesList,
        element: <ImagesListPage />,
        children: [
            // карточка конкретной картинки в модалке
            // находится в children, чтобы модалку можно было открыть поверх главной страницы, но на дочернем роуте
            {
                path: ClientRouters.imageCard,
                element: <ImageCardPage />,
            },
        ],
    },
    {
        path: '*',
        element: <div>NotFound</div>,
    },
]);
