import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { HttpsCode } from 'src/until/constants';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    response.status(200).json({
      code: status || 500,
      content: null,
      success: status === 200,
      message: exception.message.error || HttpsCode[status || 500],
    });
  }
}
