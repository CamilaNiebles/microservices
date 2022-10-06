import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderDto } from 'src/models/dto/createOrder.dto';
import { OrderCreatedEvent } from 'src/models/entities/orderCreated.event';

@Injectable()
export class OrderService {
  constructor(
    @Inject('events-ftgo')
    private readonly clientKafka: ClientKafka,
  ) {}

  createOrder(createOrderDto: CreateOrderDto) {
    const { orderId, price, customerId } = createOrderDto;
    this.clientKafka.emit(
      'ftgo.orders',
      new OrderCreatedEvent(orderId, price, customerId).toString(),
    );
  }
}
