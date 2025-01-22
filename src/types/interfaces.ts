export interface Product {
    description: string;
    quantity: number;
    _id: string;
    title: string;
    imageUrl: string;
    price: number;
    priceWithoutDiscount?: string;
    badge?: string;
    inventory?: number;
    slug: {
        current: string;
    }

    category?:{
        title: string
    }
}
  
export interface Category {
    _id: string;
    slug: {
        current: string
    }
    title: string;
    imageUrl: string;
    productCount: number;
}