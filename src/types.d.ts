export type ProductResponse = {
    limit: number
    products: Product[]
    skip: number
    total: number
}

export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export type Search = {
    title: string,
    brand: string,
}


