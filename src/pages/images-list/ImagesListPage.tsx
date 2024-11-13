import { observer } from 'mobx-react-lite';
import React from 'react';
import { ImagesListPageGrid } from './list/ImagesListPageGrid';
import { Outlet } from 'react-router-dom';

/**
 * Главная страница (таблица изображений)
 */
export const ImagesListPage = observer((): JSX.Element => {
    return (
        <div>
            <h1>Галерея изображений</h1>

            <ImagesListPageGrid />

            {/*Outlet позволяет открыть модалку на новом роуте, но поверх контента данной страницы  */}
            <Outlet />
        </div>
    );
});
