import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('orders')
export class OrderController {
  constructor(
    @Inject('events-ftgo')
    private readonly clientKafka: ClientKafka,
  ) {}

  @Get()
  get() {
    return this.clientKafka.emit('ftgo.orders', {
      foo: 'bar',
      date: new Date().toString(),
    });
  }
}
