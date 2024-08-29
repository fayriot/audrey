import { AppInitCommandHandler } from '@handlers';
import { ProcessModule } from '@modules/process';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { ShutdownService } from '@services';
import * as Joi from 'joi';

import { NodeHealthModule } from 'libs/node-health';
import { NodeDateModule } from '../libs/node-date';
import { ApiController } from './controllers';

const HANDLERS = [AppInitCommandHandler];

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                npm_package_name: Joi.string().required(),
                npm_package_version: Joi.string().required(),
                SOURCE: Joi.string().default('audrey'),
            }),
            validationOptions: {
                abortEarly: false,
            },
        }),
        // EventEmitterModule.forRoot(),
        CqrsModule,
        NodeDateModule,
        NodeHealthModule,
        ProcessModule,
    ],
    controllers: [ApiController],
    providers: [ShutdownService, ...HANDLERS],
})
export class AppModule {}
