import { makeObservable, observable } from 'mobx';
import { ApiStore } from './ApiStore';
import { ImagesStore } from './ImagesStore';

export const rootStoreObservables = {
    api: observable,
    env: observable,
    imagesStore: observable,
};

/**
 * Базовый стор, содержащий в себе остальные сторы
 */
export class RootStore {
    api: ApiStore;
    /**
     * Переменные окружения, нужные для работы приложения
     */
    env: ImportMetaEnv;
    imagesStore: ImagesStore;

    constructor(env: ImportMetaEnv) {
        this.env = env;
        this.api = new ApiStore(this);
        this.imagesStore = new ImagesStore(this);
        makeObservable(this, rootStoreObservables);
    }
}
