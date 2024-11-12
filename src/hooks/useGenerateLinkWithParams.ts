import { ClientRouters } from '@routers/clientRouters';

export type UseGenerateLinkWithParamsType = (link: ClientRouters, params: Record<string, string>) => string;

export const useGenerateLinkWithParams: UseGenerateLinkWithParamsType = (link, params) => {
    let replaceLink = link as string;

    for (const [key, value] of Object.entries(params)) {
        replaceLink = link.replace(`:${key}`, value);
    }

    return replaceLink;
};
