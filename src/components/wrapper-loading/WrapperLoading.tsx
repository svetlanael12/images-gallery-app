import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo } from 'react';

import { Loader } from '@components/loader/Loader';
import { LoadingModel } from '@models/LoadingModel';

export type WrapperLoadingProps = {
    load: () => Promise<void>;
    children?: React.ReactNode;
};

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
