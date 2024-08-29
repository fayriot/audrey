import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import * as utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(duration);

export default dayjs;
