import { WrapperLoading } from '@components/wrapper-loading/WrapperLoading';
import { useRootStore } from '@hooks/context/useRootStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyledComponentGrid, StyledComponentWrapperForImage } from './styled-components/StyledComponentsImageList';
import { ImagesListPageImageCard } from './image-card/ImagesListPageImageCard';

/**
 * Компонент сетки картинок на главной странице
 */
export const ImagesListPageGrid = observer((): JSX.Element => {
    const { loadImages, images } = useRootStore().imagesStore;

    const list =
        images && images.length ? (
            images.map((image, index) => (
                <StyledComponentWrapperForImage key={index}>
                    <ImagesListPageImageCard image={image} />
                </StyledComponentWrapperForImage>
            ))
        ) : (
            <React.Fragment>Изображений по запросу не нашлось</React.Fragment>
        );

    return (
        <React.Fragment>
            <WrapperLoading load={loadImages}>
                <StyledComponentGrid>{list}</StyledComponentGrid>
            </WrapperLoading>
        </React.Fragment>
    );
});
