import { Dayjs } from 'dayjs';

export interface IDateService {
    get(): Dayjs;
}

export const DATE_SERVICE_TOKEN = 'DATE_SERVICE_TOKEN';
