import { Customer } from '@entities/customer.entity';

export class ReserveCreditsDto {
  customerId: Customer;
  value: number;
}
