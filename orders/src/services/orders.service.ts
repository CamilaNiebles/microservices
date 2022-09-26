import { Order } from '@entities/order.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}
  async create(order: any) {
    return this.orderRepository.save(order);
  }
  async getById(id) {
    return this.orderRepository.findOneBy({ id });
  }
}
