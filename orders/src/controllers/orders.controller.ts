import { Controller, Post, Get, Body, Query } from '@nestjs/common';
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
}
