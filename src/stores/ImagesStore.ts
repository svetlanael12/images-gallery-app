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

/**
 * Основной стор для хранения и загрузки изображений
 */
export class ImagesStore {
    protected api: ApiStore;

    /**
     * Массив изображений для главной страницы
     */
    images?: ImagesDTO[] = [];

    constructor(rootStore: RootStore) {
        this.api = rootStore.api;
        makeObservable(this, imagesStoreObservables);
    }

    /**
     * Загружает список изображений и сеттит их в хранилище.
     */
    async loadImages(): Promise<void> {
        const load = this.api.apiConfigs.getListPhotos();
        return this.api
            .client(load)
            .then((response) => response.data)
            .then((data) => {
                if (Array.isArray(data)) {
                    this.setImages(data);
                }
            });
    }

    /**
     * Получает изображение по его идентификатору.
     * @param {string} id - Идентификатор изображения, которое нужно загрузить.
     * @returns {Promise<ImageDTO>} объект с параметрами загруженного изображения
     */
    async loadImageById(id: string): Promise<ImageDTO> {
        const load = this.api.apiConfigs.getPhoto(id);
        return this.api.client(load).then((response) => response.data);
    }

    setImages(images: ImagesDTO[]): void {
        this.images = images;
    }
}
