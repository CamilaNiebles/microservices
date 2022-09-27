import { Module } from '@nestjs/common';
import { AppController } from '@controllers/app.controller';
import { AppService } from '@services/app.service';
import { ConfigModule } from '@nestjs/config';
import schemaObject from '@config/schemaValidation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '@config/typeOrm.service';
import { OrdersModule } from './orders.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({ validationSchema: schemaObject, isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      inject: [TypeOrmConfigService],
    }),
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
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService, TypeOrmConfigService],
})
export class AppModule {}
