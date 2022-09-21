import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8080;

  app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle('Cine Pipoca')
      .setDescription('Api responsável pela gestão do Cine Pipoca')
      .setVersion('1.0')
      .addTag('films')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
