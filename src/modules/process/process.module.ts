import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';

import { NodeDateModule } from '../../../libs/node-date';
import { ProcessDownloadCommandHandler } from './handlers';
import { ProcessService } from './process.service';

const PROVIDERS = [ProcessService, ProcessDownloadCommandHandler];

@Module({
    imports: [CqrsModule, NodeDateModule, ConfigModule],
    providers: PROVIDERS,
    exports: PROVIDERS,
})
export class ProcessModule {}
