import { Component, inject } from '@angular/core';
import { OrderService } from '../../services/order-service';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.html',
  styleUrl: './order.sass'
})
export class Order {
  private orderService = inject(OrderService);
  order = this.orderService.getOrder();
}
