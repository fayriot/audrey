import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { DATE_SERVICE_TOKEN, IDateService } from '../../../libs/node-date';

@Injectable()
export class ProcessService {
    constructor(
        @Inject(DATE_SERVICE_TOKEN) private readonly date: IDateService,
        private config: ConfigService,
    ) {}

    tryDownload() {
        console.log('ProcessService', 'tryDownload');

        return true;
    }
}
