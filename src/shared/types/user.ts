export type UserDTO = {
    id: string;
    username: string;
    name: string;
    profile_image: {
        small: string;
        medium: string;
        large: string;
    };
    portfolio_url?: string;
    instagram_username?: string;
    twitter_username?: string;
};
