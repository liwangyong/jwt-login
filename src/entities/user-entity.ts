import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { BasicEntity } from './basics-entity';
import { PhoneEntity } from './phone-entity';
@Entity()
export class UserExtEntity extends BasicEntity {
  @PrimaryGeneratedColumn() // 主键
  id: string;
  @Index()
  @Column({ type: 'varchar', comment: '姓名' })
  userName: string;
  @Column({ type: 'varchar', comment: '密码' })
  password: string;
  @Index()
  @Column({ type: 'varchar', comment: '手机号' })
  phone: number;
  @Column({ type: 'varchar', comment: '头像' })
  hdImg: string;
  @Column({ type: 'varchar', comment: '背景图片' })
  bgImg: string;
  @Column({ type: 'varchar', comment: '自我描述' })
  description: string;
}
