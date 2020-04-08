import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class JournalValidationPipe implements PipeTransform {
  async transform(value, { metatype }: ArgumentMetadata) {
    const object = plainToClass(metatype, value);
    const err = await validate(object);
    if (err.length) {
      throw new BadRequestException({
        error: Object.values(err[0].constraints)[0],
      });
    }
    return value;
  }
}
