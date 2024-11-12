import { AxiosRequestConfig } from 'axios';

/**
 * Статический класс, содержащий в себе конфигурацию апи с http(s)-методами,
 * параметрами, относительными урлами и т. д.
 */
export class ApiConfigs {
    getListPhotos: (count?: number) => AxiosRequestConfig = (count = 20) => {
        return {
            url: '/photos',
            method: 'GET',
            params: {
                per_page: count,
            },
        };
    };

    getPhoto: (id: string) => AxiosRequestConfig = (id) => {
        return {
            url: `/photos/${id}`,
            method: 'GET',
        };
    };
}
