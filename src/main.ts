import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import UseSalfState from './use-middle';
import { env } from './until/env-unit';
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { cors: true });
  new UseSalfState(app);
  await app.listen(env.getEnvScience('NEST_PORT'), '0.0.0.0');
};
bootstrap();
