import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './shares/filters/http-exception.filter';
import { SuccessResponseInterceptor } from './shares/interceptors/success-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = `api/${process.env.APP_VERSION}`;

  app.useGlobalInterceptors(new SuccessResponseInterceptor());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix(globalPrefix);

  await app.listen(process.env.PORT);
}

bootstrap();
