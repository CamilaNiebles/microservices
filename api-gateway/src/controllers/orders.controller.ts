import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from '@services/order.service';
import { CreateOrderDto } from 'src/models/dto/createOrder.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }
}
