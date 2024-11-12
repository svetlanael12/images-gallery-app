import { action, makeObservable, observable, toJS } from 'mobx';

import { ImageDTO, ImagesDTO } from '@shared/types/images';

import { ApiStore } from './ApiStore';
import { RootStore } from './RootStore';

export const imagesStoreObservables = {
    api: observable,

    images: observable,
    loadImages: action.bound,
    loadImageById: action.bound,
    setImages: action.bound,
};

export class ImagesStore {
    protected api: ApiStore;

    images?: ImagesDTO[];

    constructor(rootStore: RootStore) {
        this.api = rootStore.api;
        makeObservable(this, imagesStoreObservables);
    }

    async loadImages(): Promise<void> {
        const load = this.api.apiConfigs.getListPhotos();
        return this.api
            .client(load)
            .then((response) => response.data)
            .then(this.setImages);
    }

    async loadImageById(id: string): Promise<ImageDTO> {
        const load = this.api.apiConfigs.getPhoto(id);
        return this.api.client(load).then((response) => response.data);
    }

    setImages(images: ImagesDTO[]): void {
        this.images = images;
    }
}
