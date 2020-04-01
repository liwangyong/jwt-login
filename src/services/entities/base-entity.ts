import { Injectable } from '@nestjs/common';
import {
  getConnection,
  Repository,
} from 'typeorm';
@Injectable()
export class BaseEntity<T> {
  constructor(private readonly entity: Repository<T>) {}
  find(args = {}): Promise<T> {
    return this.entity.findOne(args);
  }
  findAll(args = {}): Promise<T[]> {
    return this.entity.find(args);
  }
  /**
   * 批量insert数据
   * @bulkData 批量数据
   */
  async batchEventInsert(bulkData: any[]): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(this.entity as any)
      .values(bulkData)
      .execute();
  }
  /**
   *  单个insert数据
   * @bulkData 单个数据
   */
  async SingOneInsert(singData): Promise<T> {
    return await this.entity.save(singData);
  }
}
