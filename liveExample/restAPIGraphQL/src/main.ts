/**
 * EXPLANATIONS:
 * The entry file of the application which uses the core function NestFactory to create a Nest application instance.
 */


import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(3000);
}
bootstrap();
