import { Injectable } from '@nestjs/common';

import dayjs from '../classes/dayjs';
import { IDateService } from '../tokens';

@Injectable()
export class DayjsDateService implements IDateService {
    get(): dayjs.Dayjs {
        return dayjs();
    }
}
