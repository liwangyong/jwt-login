import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserExtEntity } from 'src/entities/user-entity';
import { BaseEntity } from './base-entity';
@Injectable()
export class UserExtService extends BaseEntity<UserExtEntity> {
  constructor(
    @InjectRepository(UserExtEntity)
    private readonly userExtEntity: Repository<UserExtEntity>,
  ) {
    super(userExtEntity);
  }
}
