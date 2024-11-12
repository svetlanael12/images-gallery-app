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

export class ImageViewModel {
    protected imagesStore: ImagesStore;

    image?: ImageDTO;

    constructor(rootStore: RootStore) {
        this.imagesStore = rootStore.imagesStore;

        makeObservable(this, imageViewModelObservables);
    }

    async loadImageById(id: string): Promise<void> {
        return this.imagesStore.loadImageById(id).then(this.setImage);
    }

    setImage(image: ImageDTO): void {
        this.image = image;
    }
}
