import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import {
    DocumentBuilder,
    SwaggerCustomOptions,
    SwaggerModule,
} from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logger = new Logger('Bootstrap');

    app.setGlobalPrefix('api/v1');

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        })
    );

    const config = new DocumentBuilder()
        .setTitle('Nest App Template')
        .setDescription('Nest App Template API')
        .setVersion('1.0')
        .build();

    const customOptions: SwaggerCustomOptions = {
        useGlobalPrefix: true,
    };

    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('documentation', app, documentFactory, customOptions);

    const port = process.env.PORT;

    await app.listen(port);

    logger.log(`App is listening on port ${await app.getUrl()}`);
}
bootstrap();
