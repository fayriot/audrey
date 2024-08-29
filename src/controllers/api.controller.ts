import { Controller, Get, Post } from '@nestjs/common';

@Controller('api')
export class ApiController {
    @Post()
    create() {
        console.log('AppController', 'create');
    }

    @Get('status')
    getStatus(): any {
        return {
            running: true,
        };
    }
}
