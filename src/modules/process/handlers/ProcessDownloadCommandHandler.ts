import { Inject } from '@nestjs/common';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { ProcessDownloadCommand } from '../commands';
import { ProcessService } from '../process.service';

@CommandHandler(ProcessDownloadCommand)
export class ProcessDownloadCommandHandler
    implements ICommandHandler<ProcessDownloadCommand>
{
    constructor(
        @Inject(CommandBus) private readonly commandBus: CommandBus,
        private readonly process: ProcessService,
    ) {}

    async execute(): Promise<void> {
        this.process.tryDownload();
    }
}
