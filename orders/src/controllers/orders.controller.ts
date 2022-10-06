import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { OrderService } from '@services/orders.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Post()
  async create(@Body() body) {
    return this.orderService.create(body);
  }
  @Get()
  async getById(@Query() query) {
    const { id } = query;
    return this.orderService.getById(id);
  }
  @MessagePattern('ftgo.orders')
  getEvent(@Payload() message: any, @Ctx() context: KafkaContext) {
    const eventMessage = context.getMessage();
    const { value: response } = eventMessage;
    console.log(
      `Receiving a new message from topic: ftgo.orders: ` +
        JSON.stringify(response),
    );
    return response;
  }
}
