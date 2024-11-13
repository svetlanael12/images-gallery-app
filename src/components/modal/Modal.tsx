import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * Блок за модалкой, перекрывающий доступ к остальным элементам страницы
 */
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

/**
 * Сам контейнер, содержащий в себе контент модалки
 */
const ModalContainer = styled.div`
    background-color: var(--pink);
    border-radius: 8px;
    max-width: 1100px;
    width: 100%;
    height: min-content;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

/**
 * Кнопка закрытия
 */
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
    /**
     * Флаг, обозначающий открыта или закрыта модалка
     */
    isOpen: boolean;
    /**
     * Ф-я, которая будет вызвана при закрытии модалки
     */
    onClose: VoidFunction;
    /**
     * Дочерние элементы
     */
    children: React.ReactNode;
};

/**
 * Компонент модального окна (управляется извне)
 * @see ModalProps
 */
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
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Ф-я обечпечивает закрытие модального окна при клике вне модалки
    const handleOverlayClick = () => {
        onClose();
    };

    const handleModalClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    // используем createPortal, чтобы не рендерить модалку внутри ДОМа
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
