export class OrderCreatedEvent {
  orderId: string;
  price: number;
  customerId: string;

  constructor(orderId: string, price: number, customerId: string) {
    this.orderId = orderId;
    this.price = price;
    this.customerId = customerId;
  }

  toString() {
    return JSON.stringify({
      orderId: this.orderId,
      price: this.price,
      customerId: this.customerId,
    });
  }
}
