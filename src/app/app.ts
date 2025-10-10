import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductSelection } from "./sections/product-selection/product-selection";
import { Order } from "./sections/order/order";
import { OrderService } from './services/order-service';
import { OrderTicket } from "./components/order-ticket/order-ticket";

@Component({
  selector: 'app-root',
  imports: [ProductSelection, Order, OrderTicket],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  private orderService = inject(OrderService);
  printOrder() {
    this.orderService.printOrder();
  }
}
