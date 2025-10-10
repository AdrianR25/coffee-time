import { Injectable } from '@angular/core';
import { OrderLine } from '../model/order-line';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order: OrderLine[] = [];
  getOrder(): OrderLine[] {
    return this.order;
  }
  addLine(line: OrderLine): OrderLine[] {
    const index = this.order.findIndex((l) => l.product === line.product);
    if (index > -1) {
      this.order[index].quantity += line.quantity;
    } else {
      this.order.push(line);
    }
    return this.order;
  }
  clearOrder(): OrderLine[] {
    this.order = [];
    return this.order;
  }
  printOrder() {
    window.print();
  }
}
