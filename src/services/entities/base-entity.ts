import { Injectable } from '@nestjs/common';
import { Repository, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserExtEntity } from 'src/entities/user-entity';
@Injectable()
export class BaseEntity<T> {
  entity;
  constructor(entity) {
    this.entity = entity;
  }
  find(argsSearch = {}): Promise<UserExtEntity> {
    return this.entity.findOne(argsSearch);
  }
  /**
   * 批量insert数据
   * @bulkData 批量数据
   */
  async batchEventInsert(bulkData: T[]): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(this.entity)
      .values(bulkData)
      .execute();
  }
  /**
   *  单个insert数据
   * @bulkData 单个数据
   */
  async SingOneInsert(singData: T | any): Promise<any> {
    return await this.entity.save(singData);
  }
}
