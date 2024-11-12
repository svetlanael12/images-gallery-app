import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledComponentGrid = styled.div`
    padding-left: 0;
    margin: 3rem auto 0;
    column-width: 250px;
    column-count: auto;
    column-gap: 10px;
`;

export const StyledComponentWrapperForImage = styled.div`
    width: 100%;
    margin: auto;
    margin-bottom: 10px;
    display: inline-block;
    column-break-inside: avoid;
    list-style-type: none;
    border-radius: 5px;
`;

export const StyledComponentImageCardInGrid = styled(Link)`
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;

    padding: 2rem;

    border: 1px solid var(--purple);
    text-decoration: none;

    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
`;
