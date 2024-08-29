import { Module } from '@nestjs/common';

import { NodeHealthService } from './services';

const PROVIDERS = [NodeHealthService];

@Module({
    imports: [],
    providers: PROVIDERS,
    exports: PROVIDERS,
})
export class NodeHealthModule {}
