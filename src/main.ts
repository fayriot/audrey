import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ShutdownService } from '@services';

import { getEnvString } from '@helpers';
import { NodeHealthService } from '../libs/node-health';
import { AppModule } from './app.module';

async function bootstrap() {
    console.log(getEnvString());

    const app = await NestFactory.create(AppModule);

    await app.startAllMicroservices();

    app.enableShutdownHooks();

    app.get(ShutdownService).shutdown$((reason) => {
        app.close().finally(() => {
            console.log(`💀 Process terminated for reason: ${reason}`);
            process.exit(1);
        });
    });

    await app
        .listen(3000)
        .then(() => {
            Logger.log('All listeners started', 'INFO');
            app.get(NodeHealthService).running = true;
        })
        .catch((error: any) => {
            Logger.error(error);
            app.close().finally(() => {
                console.log(
                    `💀 Process terminated for reason: ${error.message}`,
                );
                process.exit(1);
            });
        });
}
bootstrap();
