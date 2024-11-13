import { observer } from 'mobx-react-lite';
import React from 'react';
import { useParams } from 'react-router-dom';

import { WrapperLoading } from '@components/wrapper-loading/WrapperLoading';
import { useImageViewContext } from '@hooks/context/useImageViewContext';

import { ImageCardWrapperByImage } from './image/ImageCardWrapperByImage';
import { ImageCardWrapperByInfo } from './info/ImageCardWrapperByInfo';

/**
 * Компонент, загружающий изображение по идентификатору и отображающий инфу о нем
 */
export const ImageCard = observer((): JSX.Element => {
    const { id } = useParams();
    const { loadImageById } = useImageViewContext();

    // если отсутствует идентификатор, то возвращаем пустой фрагмет
    // (не null, чтобы не нарушать типизацию компонента)
    if (!id) {
        return <React.Fragment />;
    }

    const load = async () => {
        return loadImageById(id);
    };

    return (
        <WrapperLoading load={load}>
            <ImageCardWrapperByImage />

            <ImageCardWrapperByInfo />
        </WrapperLoading>
    );
});
