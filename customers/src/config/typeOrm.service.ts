import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import {
  TypeOrmModuleOptions,
  TypeOrmModuleAsyncOptions,
} from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService): Promise<any> => {
    return {
      type: 'postgres',
      port: config.get<number>('POSTGRES_PORT'),
      database: config.get<string>('POSTGRES_DB'),
      username: config.get<string>('POSTGRES_USER'),
      password: config.get<string>('POSTGRES_PASSWORD'),
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    };
  },
};
