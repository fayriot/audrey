import { Module } from '@nestjs/common';

import { DayjsDateService } from './services';
import { DATE_SERVICE_TOKEN } from './tokens';

const PROVIDERS = [
    {
        provide: DATE_SERVICE_TOKEN,
        useClass: DayjsDateService,
    },
];

@Module({
    imports: [],
    providers: PROVIDERS,
    exports: PROVIDERS,
})
export class NodeDateModule {}
