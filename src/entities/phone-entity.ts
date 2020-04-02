import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { BasicEntity } from './basics-entity';
@Entity()
export class PhoneEntity extends BasicEntity {
  @PrimaryGeneratedColumn() // 主键
  id: string;
  @Index()
  @Column({ type: 'varchar', comment: 'userId' })
  userId: string;
  @Column({ type: 'bool', comment: '是否注册', default: true })
  isConnect: boolean;
  @Column({ type: 'varchar', comment: '认识的人' })
  @Index()
  frPhones: string;
}
