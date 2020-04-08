import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './until/env-unit';
import { EntityModule } from './modules/entities/entity-module';
import { LoginModule } from './modules/login-module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from './guards/error-interceptor';
import { RolesGuard } from './guards/roles-guard';
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
      cache: {
        duration: 3000, // 30 seconds
      },
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
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
