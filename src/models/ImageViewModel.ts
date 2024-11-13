import { action, makeObservable, observable } from 'mobx';

import { ImageDTO, ImagesDTO } from '@shared/types/images';
import { ImagesStore } from '@stores/ImagesStore';
import { RootStore } from '@stores/RootStore';

export const imageViewModelObservables = {
    imagesStore: observable,

    image: observable,

    loadImageById: action.bound,
    setImage: action.bound,
};

/**
 * Модель для управления загруженным по идентификатору изображением
 */
export class ImageViewModel {
    protected imagesStore: ImagesStore;

    /**
     * Загруженное изображение
     */
    image?: ImageDTO;

    constructor(rootStore: RootStore) {
        this.imagesStore = rootStore.imagesStore;

        makeObservable(this, imageViewModelObservables);
    }

    /**
     *  Загружает изображение по его идентификатору и устанавливает его в состояние.
     * @param {string} id - Идентификатор изображения, которое необходимо загрузить.
     */
    async loadImageById(id: string): Promise<void> {
        return this.imagesStore.loadImageById(id).then(this.setImage);
    }

    setImage(image: ImageDTO): void {
        this.image = image;
    }
}
