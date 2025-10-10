import { Injectable } from '@angular/core';
import products from '../../../public/products.json';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return products;
  }
}
