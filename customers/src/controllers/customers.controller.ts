import { Body, Controller, Post } from '@nestjs/common';
import { CustomerService } from '@services/customers.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() body) {
    return this.customerService.create(body);
  }
}
