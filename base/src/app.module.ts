import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './until/env-unit';
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
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
