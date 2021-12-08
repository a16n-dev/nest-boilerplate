import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { setup } from './setup';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setup(app);

  setupSwagger(app);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
