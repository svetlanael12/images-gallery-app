import { action, makeObservable, observable } from 'mobx';

export const loadingModelObservables = {
    isLoading: observable,

    startLoading: action.bound,
    stoptLoading: action.bound,
    setIsLoading: action.bound,
    setIsLoadingError: action.bound,
};

export class LoadingModel {
    isLoading?: boolean = false;
    isLoadingError?: boolean = false;

    constructor() {
        makeObservable(this, loadingModelObservables);
    }

    startLoading(): void {
        this.setIsLoading(true);
    }

    stoptLoading(): void {
        this.setIsLoading(false);
    }

    setIsLoading(isLoading: boolean): void {
        this.isLoading = isLoading;
    }

    setIsLoadingError(isLoadingError: boolean): void {
        this.isLoadingError = isLoadingError;
    }
}
