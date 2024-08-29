import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class ShutdownService implements OnModuleDestroy {
    private _shutdown$: Subject<void> = new Subject();

    onModuleDestroy() {
        Logger.log('Executing service shutdown', 'INFO');
    }

    shutdown$(fn: (reason) => void): void {
        this._shutdown$.subscribe((reason) => fn(reason));
    }

    shutdown(reason) {
        this._shutdown$.next(reason);
    }
}
