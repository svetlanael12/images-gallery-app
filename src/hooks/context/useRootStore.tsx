import { RootStoreContext } from '@context/rootStoreContext';
import { useContext } from 'react';

export const useRootStore = () => {
    return useContext(RootStoreContext);
};
