import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class Credits {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  state: string;

  @ManyToOne(() => Customer, (customer) => customer.credits)
  customer: Customer;
}
