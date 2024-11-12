import axios, { AxiosInstance } from 'axios';
import { makeObservable, observable } from 'mobx';

import { ApiConfigs } from '../apiConfigs';
import { RootStore } from './RootStore';

export const apiStoreObservables = {
    client: observable,
    apiConfigs: observable,
};

/**
 * Хранилище инструментов для взаимодействия с апи бекенда.
 */
export class ApiStore {
    apiConfigs: ApiConfigs;
    /** Инстанс аксиоса */
    client: AxiosInstance;

    constructor(rootStore: RootStore) {
        this.apiConfigs = new ApiConfigs();
        this.client = axios.create({
            baseURL: rootStore.env.VITE_API_URL,
            // withCredentials: true,
            headers: { Authorization: `Client-ID ${rootStore.env.VITE_ACCESS_KEY}` },
        });

        makeObservable(this, apiStoreObservables);
    }
}
