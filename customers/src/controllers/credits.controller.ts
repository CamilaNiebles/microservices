import { Body, Controller, Post } from '@nestjs/common';
import { MessagePattern, Ctx, KafkaContext } from '@nestjs/microservices';
import { CreditsService } from '@services/credits.service';
import { CreateCreditsDto } from 'src/models/dto/createCredits.dto';

@Controller('credits')
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @Post()
  create(@Body() createCreditsDto: CreateCreditsDto) {
    return this.creditsService.create(createCreditsDto);
  }

  @MessagePattern('ftgo.orders')
  reserveCredits(@Ctx() context: KafkaContext) {
    const eventMessage = context.getMessage();
    const { value: response } = eventMessage;
    console.log(
      `Receiving a new message from topic: ftgo.orders: ` +
        JSON.stringify(response),
    );
    const { price, customerId } = JSON.parse(JSON.stringify(response));
    this.creditsService.reserve({ value: price, customerId });
  }
}
