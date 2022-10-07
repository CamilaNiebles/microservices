import { Customer } from '@entities/customer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DatabaseServices } from 'src/repository/postgres/module';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    private databaseService: DatabaseServices,
  ) {}
  async create(customer: any) {
    // return this.customerRepository.save(customer);
    return this.databaseService.customers.create(customer);
  }
  async getById(id) {
    return this.customerRepository.findOneBy({ id });
  }
}
