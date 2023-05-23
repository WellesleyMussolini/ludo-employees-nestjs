import { Controller, Get, Post, Put, Delete, Req, Res, Param, HttpStatus } from '@nestjs/common';
import { Request, Response } from "express";
import { WorkScheduleService } from '../services/work-schedule.service';
import { WorkScheduleInterface } from '../interface/work-schedule.interface';
import { format } from 'date-fns';

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
        const workScheduleData: WorkScheduleInterface = request.body;
        const { started_at, end_at } = workScheduleData.week_date;
    
        const startDateParts = started_at.split('/');
        const endDateParts = end_at.split('/');
    
        const startDay = Number(startDateParts[0]);
        const startMonth = Number(startDateParts[1]) - 1;
        const startYear = new Date().getFullYear();
    
        const endDay = Number(endDateParts[0]);
        const endMonth = Number(endDateParts[1]) - 1;
        const endYear = new Date().getFullYear();
    
        const startDate = new Date(startYear, startMonth, startDay);
        const endDate = new Date(endYear, endMonth, endDay);
    
        const monday = format(startDate, 'dd/MM');
        const tuesday = format(new Date(startDate.getTime() + 1 * 24 * 60 * 60 * 1000), 'dd/MM');
        const wednesday = format(new Date(startDate.getTime() + 2 * 24 * 60 * 60 * 1000), 'dd/MM');
        const thursday = format(new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000), 'dd/MM');
        const friday = format(new Date(startDate.getTime() + 4 * 24 * 60 * 60 * 1000), 'dd/MM');
        const saturday = format(new Date(startDate.getTime() + 5 * 24 * 60 * 60 * 1000), 'dd/MM');
        const sunday = format(endDate, 'dd/MM');
    
        const workSchedule: WorkScheduleInterface = {
            week_date: { started_at, end_at },
            monday: [{ name: workScheduleData.monday[0]?.name || 'Undefined', date: monday }],
            tuesday: [{ name: workScheduleData.tuesday[0]?.name || 'Undefined', date: tuesday }],
            wednesday: [{ name: workScheduleData.wednesday[0]?.name || 'Undefined', date: wednesday }],
            thursday: [{ name: workScheduleData.thursday[0]?.name || 'Undefined', date: thursday }],
            friday: [{ name: workScheduleData.friday[0]?.name || 'Undefined', date: friday }],
            saturday: [{ name: workScheduleData.saturday[0]?.name || 'Undefined', date: saturday }],
            sunday: [{ name: workScheduleData.sunday[0]?.name || 'Undefined', date: sunday }],
        };
    
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