import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';

export const Loader = styled.div`
    height: 2px;
    width: 100%;
    margin-top: 1rem;
    --c: no-repeat linear-gradient(var(--purple) 0 0);
    background: var(--c), var(--c), var(--pink);
    background-size: 60% 100%;
    animation: l16 3s infinite;

    @keyframes l16 {
        0% {
            background-position: -150% 0, -150% 0;
        }
        66% {
            background-position: 250% 0, -150% 0;
        }
        100% {
            background-position: 250% 0, 250% 0;
        }
    }
`;
