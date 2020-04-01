import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseEntity } from './base-entity';
import { PhoneEntity } from 'src/entities/phone-entity';
@Injectable()
export class RelaUserExtService extends BaseEntity<PhoneEntity> {
  constructor(
    @InjectRepository(PhoneEntity)
    private readonly phoneEntity: Repository<PhoneEntity>,
  ) {
    super(phoneEntity);
  }
}
