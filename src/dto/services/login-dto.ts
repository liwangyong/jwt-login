import {
  IsString,
  IsNotEmpty,
  ValidateIf,
  IsNumber,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class User {
  @IsNotEmpty({ message: '账号不能为空' })
  @ApiProperty({ description: '账号名字' })
  userName: string;
  @IsNotEmpty({ message: '密码不能为空' })
  @ApiProperty({ description: '密码' })
  password: string;
}
export class Register extends User {
  @IsNumber({}, { message: '手机号必须为数字' })
  @IsNotEmpty({ message: '手机号不为空' })
  @Length(6, 11, { message: '手机号在6-11之间' })
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
