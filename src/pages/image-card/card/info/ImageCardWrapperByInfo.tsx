import { observer } from 'mobx-react-lite';
import React from 'react';

import { Tag } from '@components/tag/Tag';
import styled from '@emotion/styled';
import { useImageViewContext } from '@hooks/context/useImageViewContext';

const Title = styled.h3`
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;

    padding-bottom: 2rem;
    border-bottom: 1px solid var(--purple);
`;

const Tags = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
`;

export const ImageCardWrapperByInfo = observer(() => {
    const { image } = useImageViewContext();

    const tags = image?.tags.map((tag) => <Tag>{tag.title}</Tag>);

    return (
        <div>
            <Title>{image?.description}</Title>

            <p>
                <b>Автор: </b>
                {image?.user.username}
            </p>
            <p>
                <b>Instagram: @</b>
                {image?.user.instagram_username}
            </p>

            <Tags>{tags}</Tags>
        </div>
    );
});
