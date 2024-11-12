import { LinkDTO, TagDTO, UrlsDTO } from './common';
import { UserDTO } from './user';

export type ImagesDTO = {
    id: string;
    created_at: string;
    updated_at: string;
    width: number;
    height: number;
    color: string;
    description?: string;
    alt_description?: string;
    urls: UrlsDTO;
    likes: number;
    user: UserDTO;
};

export type ImageDTO = {
    id: string;
    created_at: string;
    updated_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: string;
    alt_description?: string;
    urls: UrlsDTO;
    links: LinkDTO;
    likes: number;
    liked_by_user: boolean;
    user: UserDTO;
    tags: TagDTO[];
};
