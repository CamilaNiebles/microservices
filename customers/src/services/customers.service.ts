import { Customer } from '@entities/customer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}
  async create(customer: any) {
    return this.customerRepository.save(customer);
  }
  async getById(id) {
    return this.customerRepository.findOneBy({ id });
  }
}
