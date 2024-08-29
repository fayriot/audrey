import { AppInitCommand } from '@commands';
import { Inject } from '@nestjs/common';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(AppInitCommand)
export class AppInitCommandHandler implements ICommandHandler<AppInitCommand> {
    constructor(@Inject(CommandBus) private readonly commandBus: CommandBus) {}

    async execute(): Promise<void> {
        console.log('AppInitCommandHandler', 'execute');
    }
}
