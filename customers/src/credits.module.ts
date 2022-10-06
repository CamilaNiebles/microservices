import { CreditsController } from '@controllers/credits.controller';
import { Credits } from '@entities/credits.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditsService } from '@services/credits.service';

@Module({
  imports: [TypeOrmModule.forFeature([Credits])],
  providers: [CreditsService],
  controllers: [CreditsController],
})
export class CreditsModule {}
