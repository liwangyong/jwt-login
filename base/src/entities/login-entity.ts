import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { BasicEntity } from './basics-entity';
@Entity()
export class LoggerExtEntity extends BasicEntity {
  @PrimaryGeneratedColumn() // 主键
  id: string;
  @Index()
  @Column({ type: 'varchar', comment: '姓名' })
  userName: string;
  @Column({ type: 'varchar', comment: '密码' })
  password: string;
  @Column({ type: 'varchar', comment: '头像' })
  hdImg: string;
  @Column({ type: 'varchar', comment: '背景图片' })
  bgImg: string;
  @Column({ type: 'varchar', comment: '自我描述' })
  description: string;
}
