
export type FormDataCreate = {
    category: {
        name: string;
        icon: string;
    };
    name: string;
    desc: string;
    image ?: string;
    price: string;
    quantity: string;
}
export type FormDataUpdate = {readonly id: number, category: {name: any}, name: string, desc: string, image?: string, price: string, quantity: string, seller: string, fileProduct: any}
export type FormDelete = {
    readonly id: string;
    category: {
        name: any;
    };
    name: string;
    desc: string;
    image ?: string;
    price: string;
    quantity: string;
    seller: string;
}
export type ProductType = {
    category: {
        name: string;
        icon: string;
    };
    readonly id: string;
    name: string;
    desc: string;
    image ?: string;
    price: string;
    quantity: string;
    seller: string;
}
export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    seller: string;
}