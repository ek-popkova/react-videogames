export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    genres: Genre[];
    publishers: Publisher[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw: string;
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

export interface Publisher {
    id: number;
    name: string;
}

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

export interface Movie {
    id: number;
    name: string;
    preview: string;
    data: MovieData;
}

export interface MovieData {
    480: string;
    max: string;
}

export interface Screenshot {
    id: number;
    image: string;
}