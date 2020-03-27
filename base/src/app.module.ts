import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './until/env-unit';
import { EntityModule } from './modules/entities/entity-module';
import { LoginModule } from './modules/login-module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './guards/error-interceptor';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: env.getEnvScience('NEST_LIBRARY'),
      host: env.getEnvScience('NEST_LIBRARY_HOST'),
      port: env.getEnvScience('NEST_LIBRARY_PORT'),
      username: env.getEnvScience('NEST_USERNAME'),
      password: env.getEnvScience('NEST_PASSWORD'),
      database: 'nestjs',
      retryAttempts: 5,
      entities: ['dist/**/*-entity{.ts,.js}'],
      synchronize: true,
    }),
    EntityModule,
    LoginModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
