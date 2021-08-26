export interface Product {
    brand_name: string
    product_name: string
    color: string
    product_img_url: string,
    product_id: string
    price: number
    shipping?: number
    tax?: number
    duties?: number
}