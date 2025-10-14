import { Component, inject } from '@angular/core';
import { OrderService } from '../../services/order-service';

@Component({
  selector: 'app-order-ticket',
  imports: [],
  templateUrl: './order-ticket.html',
  styleUrl: './order-ticket.sass'
})
export class OrderTicket {
  private orderService = inject(OrderService);
  order = this.orderService.getOrder();
  date = new Date().toLocaleDateString();
}
