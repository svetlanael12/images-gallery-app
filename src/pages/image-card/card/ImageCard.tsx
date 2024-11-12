import { observer } from 'mobx-react-lite';
import React from 'react';
import { useParams } from 'react-router-dom';

import { WrapperLoading } from '@components/wrapper-loading/WrapperLoading';
import { useImageViewContext } from '@hooks/context/useImageViewContext';

import { ImageCardWrapperByImage } from './image/ImageCardWrapperByImage';
import { ImageCardWrapperByInfo } from './info/ImageCardWrapperByInfo';

export const ImageCard = observer(() => {
    const { id } = useParams();
    const { loadImageById, image } = useImageViewContext();

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
