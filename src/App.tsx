import { WrapperApp } from '@components/wrapper-app/WrapperApp';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/routers';

export const App = observer(() => {
    return (
        <WrapperApp>
            <RouterProvider router={router} />
        </WrapperApp>
    );
});
