export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}