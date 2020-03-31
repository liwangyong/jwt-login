import { Injectable } from '@nestjs/common';
import { getConnection, InsertResult, Repository } from 'typeorm';
@Injectable()
export class BaseEntity<T> {
  constructor(private readonly entity) {}
  find(argsSearch = {}): Promise<T> {
    return this.entity.findOne(argsSearch);
  }
  findAll(args = {}): Promise<T[]> {
    return this.entity.find(args);
  }
  /**
   * 批量insert数据
   * @bulkData 批量数据
   */
  async batchEventInsert(bulkData: []): Promise<InsertResult> {
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
  async SingOneInsert(singData): Promise<any> {
    return await this.entity.save(singData);
  }
}
