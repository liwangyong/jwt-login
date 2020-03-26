import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import UseSalfState from './use-middle';
import { env } from './until/env-unit'
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  new UseSalfState(app);
  await app.listen(env.getEnvScience('NEST_PORT'));
}
bootstrap();
