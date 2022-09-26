import { Module } from '@nestjs/common';
import { AppController } from '@controllers/app.controller';
import { AppService } from '@services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeOrm.service';
import { ConfigModule } from '@nestjs/config';
import schemaObject from './config/schemaValidation';
import { CustomersModule } from './customers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: schemaObject,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      inject: [TypeOrmConfigService],
    }),
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService, TypeOrmConfigService],
})
export class AppModule {}
