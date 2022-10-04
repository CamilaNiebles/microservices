import { Module } from '@nestjs/common';
import { AppController } from '@controllers/app.controller';
import { AppService } from '@services/app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderController } from '@controllers/orders.controller';
import { OrderService } from '@services/order.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'events-ftgo',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'this-id-is-unique',
          },
        },
      },
    ]),
  ],
  controllers: [AppController, OrderController],
  providers: [AppService, OrderService],
})
export class AppModule {}
