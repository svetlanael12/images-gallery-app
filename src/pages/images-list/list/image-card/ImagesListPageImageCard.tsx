import { observer } from 'mobx-react-lite';
import { StyledComponentImageCardInGrid } from '../styled-components/StyledComponentsImageList';
import React from 'react';
import { ImagesDTO } from '@shared/types/images';
import { ClientRouters } from '@routers/clientRouters';
import { useGenerateLinkWithParams } from '@hooks/useGenerateLinkWithParams';

/**
 * @param {ImagesDTO} image - параметры изображения
 */
export type ImagesListPageImageCardProps = {
    image: ImagesDTO;
};

/**
 * Компонент карточки в сетке с изображением и другой информацией
 * @see ImagesListPageImageCardProps
 */
export const ImagesListPageImageCard = observer((props: ImagesListPageImageCardProps): JSX.Element => {
    const { image } = props;
    const urlCard = useGenerateLinkWithParams(ClientRouters.imageCard, { id: image.id });

    return (
        <StyledComponentImageCardInGrid to={urlCard} key={image.id}>
            <img width="100%" src={image.urls.small} alt={image.alt_description} />
            <p>
                <b>Автор:</b> {image.user.username}
            </p>
            {image.description && (
                <p>
                    <b>Описание:</b> {image.description}
                </p>
            )}
        </StyledComponentImageCardInGrid>
    );
});
