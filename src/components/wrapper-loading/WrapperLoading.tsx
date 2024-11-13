import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo } from 'react';

import { Loader } from '@components/loader/Loader';
import { LoadingModel } from '@models/LoadingModel';

export type WrapperLoadingProps = {
    /**
     * Функция для загрузки данных, которая возвращает Promise.
     */
    load: () => Promise<void>;
    /**
     * Дочерние элементы, которые отобразятся в случае успеха
     */
    children?: React.ReactNode;
};

/**
 * Компонент, отображающий индикатор загрузки во время выполнения асинхронной операции.
 * В случае успеха возвращает дочерние элементы, в случае с ошибкой - сообщение об ошибке загрузки 
  
 * @see {WrapperLoadingProps}
 */
export const WrapperLoading = observer((props: WrapperLoadingProps): JSX.Element => {
    const { load, children } = props;

    const loadingModel = useMemo(() => {
        return new LoadingModel();
    }, []);

    const { isLoading, isLoadingError, startLoading, setIsLoadingError, stoptLoading } = loadingModel;

    useEffect(() => {
        setIsLoadingError(false);
        startLoading();

        load()
            .catch(() => setIsLoadingError(true))
            .finally(stoptLoading);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    if (isLoadingError) {
        return <React.Fragment>Произошла ошибка при загрузке</React.Fragment>;
    }

    return <React.Fragment>{children}</React.Fragment>;
});
