import { ClientRouters } from '@routers/clientRouters';

/**
 * Тип хука useGenerateLinkWithParams
 * @param {ClientRouters} link - Исходная ссылка, содержащая параметры в формате `:paramName`.
 * @param {Record<string, string>} params - Объект, содержащий пары ключ-значение для замены параметров в ссылке.
 * @returns {string} - Сгенерированная ссылка с замененными параметрами.
 */
export type UseGenerateLinkWithParamsType = (link: ClientRouters, params: Record<string, string>) => string;

/**
 * Хук для генерации ссылки, заменяющий параметры в исходной ссылке на переданные значения
 * @see UseGenerateLinkWithParamsType
 */
export const useGenerateLinkWithParams: UseGenerateLinkWithParamsType = (link, params) => {
    let replaceLink = link as string;

    for (const [key, value] of Object.entries(params)) {
        replaceLink = link.replace(`:${key}`, value);
    }

    return replaceLink;
};
