import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserExtEntity } from 'src/entities/user-entity';
import { UserExtService } from 'src/services/entities/user-entity';
@Global()
@Module({
  imports: [TypeOrmModule.forFeature([UserExtEntity])],
  providers: [UserExtService],
  exports: [UserExtService],
})
export class EntityModule {}
