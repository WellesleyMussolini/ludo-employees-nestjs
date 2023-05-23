import { Controller, Get, Post, Put, Delete, Req, Res, Param, HttpStatus } from '@nestjs/common';
import { Request, Response } from "express";
import { WorkScheduleService } from '../services/work-schedule.service';
import { WorkScheduleInterface } from '../interface/work-schedule.interface';

@Controller("schedule")
export class WorkScheduleController {
    constructor(private workScheduleService: WorkScheduleService) { }

    @Get()
    async find_all(@Res() response: Response) {
        const workSchedule = await this.workScheduleService.findAll();
        return response.status(HttpStatus.OK).json(workSchedule);
    }

    @Get(":id")
    async get_by_id(@Param("id") id: string, @Res() response: Response) {
        const workSchedule = await this.workScheduleService.findById(id);
        return response.status(HttpStatus.OK).json(workSchedule);
    }

    @Post()
    async create(@Req() request: Request, @Res() response: Response) {
        const workSchedule: WorkScheduleInterface = request.body;
        const createdWorkSchedule = await this.workScheduleService.create(workSchedule);
        return response.status(HttpStatus.CREATED).json(createdWorkSchedule);
    }

    @Put(":id")
    async update(@Param("id") id: string, @Req() request: Request, @Res() response: Response) {
        const workSchedule: WorkScheduleInterface = request.body;
        const updatedWorkSchedule = await this.workScheduleService.update(id, workSchedule);
        return response.status(HttpStatus.OK).json(updatedWorkSchedule);
    }

    @Delete(":id")
    async remove(@Param("id") id: string, @Res() response: Response) {
        await this.workScheduleService.delete(id);
        return response.status(HttpStatus.OK).send("Schedule deleted!");
    }
}