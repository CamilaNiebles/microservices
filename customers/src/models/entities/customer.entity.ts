import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Credits } from './credits.entity';
import { Order } from './order.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];

  @OneToMany(() => Credits, (credit) => credit.customer)
  credits: Credits[];
}
