import { Module } from '@nestjs/common';
import { AppController } from '@controllers/app.controller';
import { AppService } from '@services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeOrm.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import schemaObject from './config/schemaValidation';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: schemaObject,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(TypeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
