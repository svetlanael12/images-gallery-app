import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal } from '@components/modal/Modal';
import { ImageViewContext } from '@context/imageViewContext';
import { useRootStore } from '@hooks/context/useRootStore';
import { useFlag } from '@hooks/useFlag';
import { ImageViewModel } from '@models/ImageViewModel';
import { ClientRouters } from '@routers/clientRouters';

import { ImageCard } from './card/ImageCard';

/**
 * Страница просмотра полного изображения
 */
export const ImageCardPage = observer((): JSX.Element => {
    const navigate = useNavigate();
    // по умолчанию при переходе на роут модалка должна открыта
    const [isOpenModal, , onCloseModal] = useFlag(true);
    const rootStore = useRootStore();

    const imageViewModel = useMemo(() => {
        return new ImageViewModel(rootStore);
    }, []);

    const onClose = (): void => {
        onCloseModal();
        navigate(ClientRouters.imagesList);
    };

    return (
        <ImageViewContext.Provider value={imageViewModel}>
            <Modal isOpen={isOpenModal} onClose={onClose}>
                <ImageCard />
            </Modal>
        </ImageViewContext.Provider>
    );
});
