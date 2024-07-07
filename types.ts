export interface Billboard {
    id: string;
    label: string;
    ImageUrl: string;
};

export interface Category {
    id: string;
    name: string;
    billboard: Billboard
};

export interface Product {
    category: any;
    id: string;
    categories: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[];

}

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}


export interface Color {
    id: string;
    name: string;
    value: string;
}
