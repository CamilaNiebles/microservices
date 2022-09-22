import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '@entities/customer.entity';
import { CustomerService } from '@services/customers.service';
import { CustomerController } from '@controllers/customers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomersModule {}
