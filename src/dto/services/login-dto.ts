import { IsString, IsNotEmpty, ValidateIf, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class User {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '账号名字' })
  userName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '密码' })
  password: string;
}
export class Register extends User {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: '手机号' })
  phone: number;
  @IsString()
  @ValidateIf((body, item) => Boolean(item))
  @ApiProperty({ description: '头像' })
  hdImg: string;
  @IsString()
  @ValidateIf((body, item) => Boolean(item))
  @ApiProperty({ description: '背景图片' })
  bgImg: string;
  @IsString()
  @ValidateIf((body, item) => Boolean(item))
  @ApiProperty({ description: '自我描述' })
  description: string;
}
