import { Customer } from '@entities/customer.entity';

export class CreateCreditsDto {
  customerId: Customer;
  value: number;
}
