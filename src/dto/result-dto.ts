import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
/**
 * 返回数据
 */
export class ResultSend<T> {
  @IsInt()
  @ApiProperty({ description: 'code', example: 200 })
  readonly code: number;

  @ApiProperty({ description: '成功失败信息' })
  @Type(() => String)
  readonly message: string;
  @ApiProperty({ description: '是否成功' })
  @IsBoolean()
  @Type(() => Boolean)
  readonly success: boolean;
  @ApiProperty({ description: '内容' })
  content: T;
}
