import { Component, inject } from '@angular/core';
import { Product } from '../../model/product';
import { ProductItem } from "./product-item/product-item";
import { ProductService } from '../../services/product-service';
import { OrderService } from '../../services/order-service';

@Component({
  selector: 'app-product-selection',
  imports: [ProductItem],
  templateUrl: './product-selection.html',
  styleUrl: './product-selection.sass'
})
export class ProductSelection {

  private productService = inject(ProductService);
  private orderService = inject(OrderService);

  productList = this.productService.getProducts();

  addProduct(product: Product) {
    this.orderService.addLine({product: product, quantity: 1});
  }

}
