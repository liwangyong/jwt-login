import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserExtEntity } from 'src/entities/user-entity';
import { UserExtService } from 'src/services/entities/user-entity';
import { RelaUserExtService } from 'src/services/entities/rela-user-entity';
import { PhoneEntity } from 'src/entities/phone-entity';
@Global()
@Module({
  imports: [TypeOrmModule.forFeature([UserExtEntity, PhoneEntity])],
  providers: [UserExtService, RelaUserExtService],
  exports: [UserExtService, RelaUserExtService],
})
export class EntityModule {}
