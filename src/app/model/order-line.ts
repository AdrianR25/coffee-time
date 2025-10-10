import { Product } from "./product";

export interface OrderLine {
    product: Product;
    quantity: number;
}
