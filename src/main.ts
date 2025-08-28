import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors : true});

  const config = new DocumentBuilder()
    .setTitle("ToDO CheckMate API")
    .setDescription("API Documentation")
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 

  let currentPort = process.env.PORT ?? 3000
  await app.listen(currentPort);
  
  console.log(`http://localhost:${currentPort}`)
}
bootstrap();
