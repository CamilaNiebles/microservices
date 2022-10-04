import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { AppService } from '@services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
