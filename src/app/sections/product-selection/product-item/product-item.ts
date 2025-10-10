import { Component, Input, input } from '@angular/core';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.sass'
})
export class ProductItem {
  @Input({required: true}) product!: Product;
}
