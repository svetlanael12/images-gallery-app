import { WrapperLoading } from '@components/wrapper-loading/WrapperLoading';
import styled from '@emotion/styled';
import { useRootStore } from '@hooks/context/useRootStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyledComponentGrid, StyledComponentWrapperForImage } from './styled-components/StyledComponentsImageList';
import { ImagesListPageImageCard } from './image-card/ImagesListPageImageCard';

export const ImagesListPageGrid = observer(() => {
    const { loadImages, images } = useRootStore().imagesStore;

    const list = images ? (
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
