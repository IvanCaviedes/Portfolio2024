import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/naming-convention
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const port: number = 3500;
  await app.listen(port);
}
bootstrap();
