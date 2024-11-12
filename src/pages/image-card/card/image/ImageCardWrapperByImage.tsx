import { observer } from 'mobx-react-lite';
import React from 'react';

import styled from '@emotion/styled';
import { useImageViewContext } from '@hooks/context/useImageViewContext';

const Container = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;

    @media screen and (min-width: 700px) {
        height: 400px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
`;

export const ImageCardWrapperByImage = observer(() => {
    const { image } = useImageViewContext();

    return (
        <Container>
            <Image src={image?.urls.full} alt={image?.alt_description} />
        </Container>
    );
});
