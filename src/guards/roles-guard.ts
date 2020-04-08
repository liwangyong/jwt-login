import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';
import { env } from 'src/until/env-unit';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const getRequest: Request | any = context.switchToHttp().getRequest();
    const auth: string = getRequest.headers.Authorization;
    const originalUrl = getRequest._parsedUrl.pathname;
    // 白名单
    const whiteList = ['/login', '/regis'];
    if ([].includes.call(whiteList, originalUrl)) {
      return true;
    }
    const index = auth?.indexOf('Bearer ');
    if (index) {
      try {
        const id = jwt.verify(
          auth.slice(index),
          env.getEnvScience('NEST_SECRET'),
        );
        getRequest.userId = id;
        return true;
      } catch (err) {
        throw new UnauthorizedException({
          status: HttpStatus.BAD_REQUEST,
          error: '没有权限, 请重新登录',
        });
      }
    } else {
      throw new UnauthorizedException({
        status: HttpStatus.BAD_REQUEST,
        error: '没有权限, 请重新登录',
      });
    }
  }
}
