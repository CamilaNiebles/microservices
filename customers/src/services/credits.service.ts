import { Credits } from '@entities/credits.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCreditsDto } from 'src/models/dto/createCredits.dto';
import { ReserveCreditsDto } from 'src/models/dto/reserveCredits.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CreditsService {
  constructor(
    @InjectRepository(Credits)
    private readonly creditsRepository: Repository<Credits>,
  ) {}

  create(createCreditsDto: CreateCreditsDto) {
    const { customerId: customer, value } = createCreditsDto;
    return this.creditsRepository.save({ customer, value, state: 'ADDED' });
  }

  reserve(reserveCreditsDto: ReserveCreditsDto) {
    const { customerId: customer, value } = reserveCreditsDto;
    return this.creditsRepository.save({ customer, value, state: 'ON_HOLD' });
  }

  sold(soldCreditsDto: ReserveCreditsDto) {
    const { customerId: customer, value } = soldCreditsDto;
    return this.creditsRepository.save({ customer, value, state: 'SPENT' });
  }
}
