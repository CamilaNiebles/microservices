import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CustomerService } from '@services/customers.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() body) {
    return this.customerService.create(body);
  }
  @Get()
  async getById(@Query() query) {
    const { id } = query;
    return this.customerService.getById(id);
  }
}
