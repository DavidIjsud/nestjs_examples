import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';
import { connectionSource } from './ormconfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
      whitelist : true,
      forbidNonWhitelisted: true
  }));
  app.enableCors();
  //TODO  it is not needed.
  //connectionSource.initialize();
  await app.listen(3000);
}
bootstrap();
