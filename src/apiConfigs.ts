import { ImageDTO, ImagesDTO } from '@shared/types/images';
import { AxiosRequestConfig } from 'axios';

/**
 * Статический класс, содержащий в себе конфигурацию апи с http(s)-методами,
 * параметрами, относительными урлами и т. д.
 */
export class ApiConfigs {
    /**
     * Запрос на получение списка картинок.
     * @param {number} [count=20] - Количество элементов, которое ожидаем в ответ (по умолчанию 20).
     * @returns {ImagesDTO[]} массив объектов ImagesDTO
     * @see ImagesDTO
     */
    getListPhotos: (count?: number) => AxiosRequestConfig<ImagesDTO[]> = (count = 20) => {
        return {
            url: '/photos',
            method: 'GET',
            params: {
                per_page: count,
            },
        };
    };

    /**
     * Запрос на получение конкретной картинки по её идентификатору.
     * @param {string} id - Идентификатор картинки, которую необходимо получить.
     * @returns {ImageDTO} объект с параметрами картинки
     * @see ImageDTO
     */
    getPhoto: (id: string) => AxiosRequestConfig<ImageDTO> = (id: string): AxiosRequestConfig => {
        return {
            url: `/photos/${id}`,
            method: 'GET',
        };
    };
}
