import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NodeHealthService {
    private _running$ = new BehaviorSubject<boolean>(false);
    private _running = false;

    get running$() {
        return this._running$.asObservable();
    }

    set running(value: boolean) {
        if (value === this._running) {
            return;
        }
        this._running = value;
        this._running$.next(value);
    }

    get running(): boolean {
        return this._running;
    }
}
