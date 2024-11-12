import './nullstyle.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { RootStoreContext } from '@context/rootStoreContext';
import { RootStore } from '@stores/RootStore';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const env = import.meta.env;
const rootStore = new RootStore(env);

root.render(
    <React.StrictMode>
        <RootStoreContext.Provider value={rootStore}>
            <App />
        </RootStoreContext.Provider>
    </React.StrictMode>,
);
