import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '@entities/customer.entity';
import { CustomerService } from '@services/customers.service';
import { CustomerController } from '@controllers/customers.controller';
import { DatabaseServices } from './repository/postgres/module';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerService, DatabaseServices],
})
export class CustomersModule {}
