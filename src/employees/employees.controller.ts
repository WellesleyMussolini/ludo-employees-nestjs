import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('pets')
export class PetsController {
    @Get()
    find_all(): string {
        return 'GET ALL PETS';
    }
    @Get(':id')
    get_by_id(): string {
        return 'GET PET BY ID';
    }
    @Post()
    create(): string {
        return 'CREATES ONE PET';
    }
    @Put()
    update(): string {
        return 'UPDATE A PET';
    }
    @Delete()
    remove(): string {
        return 'DELETING A PET';
    }
}