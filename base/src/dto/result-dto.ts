import { ApiProperty } from '@nestjs/swagger'
import { IsInt } from 'class-validator'
import { Type } from 'class-transformer'
/**
 * 返回数据
 */
export class ResultSend<CODE extends keyof HttpCode, T> {
    @IsInt()
    @ApiProperty({ description: 'code', example: 200 })
    readonly code: CODE

    @ApiProperty({ description: '是否成功' })
    @Type(() => String)
    readonly message: string
    @ApiProperty({ description: '是否成功' })
    content: T
}
