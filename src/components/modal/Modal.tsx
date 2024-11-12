import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    z-index: 1000;
    overflow-y: scroll;

    @media screen and (min-width: 700px) {
        padding: 40px;
        align-items: center;
    }
`;

const ModalContainer = styled.div`
    background-color: var(--pink);
    border-radius: 8px;
    max-width: 1100px;
    width: 100%;
    height: min-content;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    color: var(----dark-purple);
    cursor: pointer;
    font-size: 16px;
    float: right;
    border-radius: 50%;

    &:hover {
        background-color: var(--purple);
    }
`;

export type ModalProps = {
    isOpen: boolean;
    onClose: VoidFunction;
    children: React.ReactNode;
};

export const Modal = observer((props: ModalProps): JSX.Element => {
    const { isOpen, onClose, children } = props;
    if (!isOpen) {
        return <React.Fragment />;
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Отключаем прокрутку за модалкой
        } else {
            document.body.style.overflow = 'unset'; // Включаем прокрутку обратно
        }

        // Очистка эффекта при размонтировании компонента
        return () => {
            document.body.style.overflow = 'unset'; // Включаем прокрутку обратно
        };
    }, [isOpen]);

    const handleOverlayClick = () => {
        onClose(); // Закрытие модального окна при клике вне модалки
    };

    const handleModalClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return createPortal(
        <Overlay onClick={handleOverlayClick}>
            <ModalContainer onClick={handleModalClick}>
                <CloseButton onClick={onClose}>✖</CloseButton>
                {children}
            </ModalContainer>
        </Overlay>,
        document.getElementById('modal-root')!
    );
});
