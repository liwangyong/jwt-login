import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BasicEntity } from './basics-entity';
import { UserExtEntity } from './user-entity';
@Entity()
export class PhoneEntity extends BasicEntity {
  @PrimaryGeneratedColumn() // 主键
  id: string;
  @ManyToOne(
    type => UserExtEntity,
    user => user.frList,
  )
//   @JoinColumn({ name: 'user_id' })
  userId: string;
  @Column({ type: 'bool', comment: '是否注册', default: true })
  isConnect: boolean;
  @Column({ type: 'varchar', comment: '认识的人' })
  @Index()
  frId: string;
}
