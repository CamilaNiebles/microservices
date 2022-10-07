import { Customer } from '@entities/customer.entity';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseTransactions } from './transactions';

@Injectable()
export class DatabaseServices implements OnApplicationBootstrap {
  customers: DatabaseTransactions<Customer>;

  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  onApplicationBootstrap() {
    this.customers = new DatabaseTransactions<Customer>(
      this.customerRepository,
    );
  }
}
