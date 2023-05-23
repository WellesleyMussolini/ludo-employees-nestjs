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

        const monday = startDate.getDate();
        const tuesday = new Date(startDate.getTime());
        tuesday.setDate(tuesday.getDate() + 1);
        const wednesday = new Date(startDate.getTime());
        wednesday.setDate(wednesday.getDate() + 2);
        const thursday = new Date(startDate.getTime());
        thursday.setDate(thursday.getDate() + 3);
        const friday = new Date(startDate.getTime());
        friday.setDate(friday.getDate() + 4);
        const saturday = new Date(startDate.getTime());
        saturday.setDate(saturday.getDate() + 5);
        const sunday = endDate.getDate();

        const month = startMonth + 1;

        const workSchedule: WorkScheduleInterface = {
            week_date: { started_at, end_at },
            monday: [{ name: workScheduleData.monday[0]?.name || 'Undefined', date: `${monday.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}` }],
            tuesday: [{ name: workScheduleData.tuesday[0]?.name || 'Undefined', date: `${tuesday.getDate().toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}` }],
            wednesday: [{ name: workScheduleData.wednesday[0]?.name || 'Undefined', date: `${wednesday.getDate().toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}` }],
            thursday: [{ name: workScheduleData.thursday[0]?.name || 'Undefined', date: `${thursday.getDate().toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}` }],
            friday: [{ name: workScheduleData.friday[0]?.name || 'Undefined', date: `${friday.getDate().toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}` }],
            saturday: [{ name: workScheduleData.saturday[0]?.name || 'Undefined', date: `${saturday.getDate().toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}` }],
            sunday: [{ name: workScheduleData.sunday[0]?.name || 'Undefined', date: `${sunday.toString().padStart(2, '0')}/${endMonth.toString().padStart(2, '0')}` }],
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