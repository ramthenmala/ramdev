export interface Blog {
    ms?: number;
    query?: string;
    result?: GitResult[];
}

export interface GitResult {
    _id?: string;
    description?: Description[] | null;
    image?: Image;
    slug?: Slug;
    title?: string;
}

export interface Description {
    _key?: string;
    _type?: string;
    children?: Child[];
    markDefs?: any[];
    style?: string;
}

export interface Child {
    _key?: string;
    _type?: string;
    marks?: any[];
    text?: string;
}

export interface Image {
    asset?: Asset;
}

export interface Asset {
    _id?: string;
    url?: string;
}

export interface Slug {
    _type?: string;
    current?: string;
}
